#!/usr/bin/env python3
"""Chromium E2E for the English-default, 3-language interactive demos.

--http: true localhost server; required by CI. --inline: sandbox diagnostic
fallback for environments that block network/file navigation.
"""
import argparse,asyncio,json,threading,functools,contextlib,os
from pathlib import Path
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from playwright.async_api import async_playwright

ROOT=Path(__file__).resolve().parents[1]
SITE=ROOT/'community/assets/starter-site'
ENTRY={'main':'index.html','character':'showcase/character.html','brand':'showcase/brand.html','product':'showcase/product.html'}
WIDTHS=(320,390,768,1440)
class QuietHandler(SimpleHTTPRequestHandler):
 def log_message(self,*args):pass
@contextlib.contextmanager
def local_server():
 handler=functools.partial(QuietHandler,directory=str(SITE))
 server=ThreadingHTTPServer(('127.0.0.1',0),handler)
 thread=threading.Thread(target=server.serve_forever,daemon=True);thread.start()
 try:yield f'http://127.0.0.1:{server.server_port}'
 finally:server.shutdown();server.server_close();thread.join(timeout=4)

async def load_page(page,which,mode,base_url):
 p=SITE/ENTRY[which]
 if mode=='http':
  resp=await page.goto(f'{base_url}/{ENTRY[which]}',wait_until='load',timeout=30000)
  assert resp and resp.status==200, (which,resp.status if resp else None)
 else:
  text=p.read_text(encoding='utf-8')
  if which=='main':
   css=(SITE/'styles.css').read_text(encoding='utf-8')
   scripts=[(SITE/'i18n.js').read_text(encoding='utf-8'),(SITE/'app.js').read_text(encoding='utf-8')]
  else:
   css=(SITE/'showcase/showcase.css').read_text(encoding='utf-8')
   scripts=[(SITE/'showcase/showcase.js').read_text(encoding='utf-8')]
  import re
  text=re.sub(r'<link\s[^>]*rel="stylesheet"[^>]*>',f'<style>{css}</style>',text)
  text=re.sub(r'<script\s[^>]*src="[^"]+"[^>]*></script>','',text)
  await page.goto('about:blank');await page.set_content(text,wait_until='load')
  for source in scripts:await page.add_script_tag(content=source)
 await page.wait_for_timeout(120)

async def check(browser,mode,base_url,width,which,errors):
 context=await browser.new_context(viewport={'width':width,'height':900},reduced_motion='reduce')
 page=await context.new_page();page.on('pageerror',lambda exc:errors.append(str(exc)))
 try:
  await load_page(page,which,mode,base_url)
  assert await page.locator('html').get_attribute('lang')=='en', (which,width,'English default')
  sizes=await page.evaluate("()=>({scroll:document.documentElement.scrollWidth,client:document.documentElement.clientWidth})")
  if sizes['scroll']>sizes['client']+1:
   overflow=await page.evaluate("""() => [...document.querySelectorAll('body *')].map(e => ({tag:e.tagName,cls:(typeof e.className==='string'?e.className:'').slice(0,90),text:(e.innerText||'').slice(0,45),right:Math.round(e.getBoundingClientRect().right),left:Math.round(e.getBoundingClientRect().left),scroll:e.scrollWidth})).filter(e=>e.right>document.documentElement.clientWidth+2).sort((a,b)=>b.right-a.right).slice(0,12)""")
   print('OVERFLOW_DIAGNOSTIC',which,width,sizes,overflow,flush=True)
  assert sizes['scroll']<=sizes['client']+1,(which,width,sizes)
  selector='#languageSelect' if which=='main' else '#demoLanguage'
  await page.select_option(selector,'zh-CN')
  assert await page.locator('html').get_attribute('lang')=='zh-CN'
  await page.select_option(selector,'zh-TW')
  assert await page.locator('html').get_attribute('lang')=='zh-TW'
  await page.select_option(selector,'en')
  assert await page.locator('html').get_attribute('lang')=='en'
  if which=='main':
   await page.locator('[data-filter="brand"]').click()
   assert await page.locator('.project-card:not([hidden])').count()==1
   assert 'brand.html' in await page.locator('.project-card:not([hidden]) .showcase-open').get_attribute('href')
   await page.locator('[data-filter="all"]').click()
   assert await page.locator('.project-card:not([hidden])').count()==3
   if width<=760:
    await page.locator('#navToggle').click()
    assert await page.locator('#primaryNav').get_attribute('class')=='nav open'
    await page.keyboard.press('Escape')
    assert await page.locator('#navToggle').get_attribute('aria-expanded')=='false'
  elif which=='character':
   await page.locator('[data-scene-choice="neon"]').click()
   assert await page.locator('.character-experience').get_attribute('data-scene')=='neon'
   assert 'NIGHT CITY' in await page.locator('#sceneName').inner_text()
   await page.locator('[data-pose-choice="profile"]').click()
   assert await page.locator('.character-experience').get_attribute('data-pose')=='profile'
   await page.select_option(selector,'zh-TW');assert '霓虹城市' in await page.locator('#sceneName').inner_text()
  elif which=='brand':
   await page.locator('[data-collection-choice="noir"]').click()
   assert await page.locator('.brand-experience').get_attribute('data-collection')=='noir'
   assert 'AFTER DARK' in await page.locator('#collectionHeadline').inner_text()
   await page.select_option(selector,'zh-CN');assert '夜幕之后' in await page.locator('#collectionHeadline').inner_text()
  else:
   await page.locator('[data-tone-choice="midnight"]').click()
   assert await page.locator('.product-experience').get_attribute('data-tone')=='midnight'
   await page.locator('[data-size-choice="L"]').click()
   await page.locator('#qtyPlus').click();await page.locator('#qtyPlus').click()
   assert await page.locator('#quantityValue').inner_text()=='3'
   await page.locator('#addDemoBag').click()
   assert await page.locator('#demoBagCount').inner_text()=='3'
   assert 'No order was placed' in await page.locator('#bagFeedback').inner_text()
   await page.select_option(selector,'zh-CN')
   assert '深夜墨黑' in await page.locator('#selectedColor').inner_text()
  # Again after longest localized strings
  sizes=await page.evaluate("()=>({scroll:document.documentElement.scrollWidth,client:document.documentElement.clientWidth})")
  assert sizes['scroll']<=sizes['client']+1,(which,width,'localized',sizes)
  if mode=='http' and which=='main' and width==390:
   await page.select_option(selector,'zh-TW')
   await page.reload(wait_until='load')
   assert await page.locator('html').get_attribute('lang')=='zh-TW','locale persists on HTTP navigation'
  return f'PASS {which:10} {width}px'
 finally:await context.close()

async def main():
 parser=argparse.ArgumentParser();parser.add_argument('--mode',choices=['inline','http'],default='http');args=parser.parse_args()
 async with async_playwright() as p:
  browser=await p.chromium.launch(headless=True,args=['--no-sandbox'],**({'executable_path':os.environ['PLAYWRIGHT_CHROMIUM_EXECUTABLE']} if os.environ.get('PLAYWRIGHT_CHROMIUM_EXECUTABLE') else {}))
  errors=[]
  try:
   with local_server() if args.mode=='http' else contextlib.nullcontext('') as base_url:
    results=[]
    for width in WIDTHS:
     for key in ENTRY:
      result=await check(browser,args.mode,base_url,width,key,errors)
      results.append(result);print(result)
    if errors:raise AssertionError('browser errors: '+str(errors))
    print(f'PASS: {len(results)} page/viewport combinations; real URL loaded={args.mode=="http"}')
  finally:await browser.close()
if __name__=='__main__':asyncio.run(main())
