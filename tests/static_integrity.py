#!/usr/bin/env python3
"""Pure-stdlib link, asset and i18n validation for Visual Story demo pages."""
import json, re, sys, unittest
from pathlib import Path
from urllib.parse import unquote, urlsplit
from html.parser import HTMLParser

ROOT=Path(__file__).resolve().parents[1]
SITE=ROOT/'community/assets/starter-site'
HTML_FILES=(SITE/'index.html',*sorted((SITE/'showcase').glob('*.html')))

class Tags(HTMLParser):
    def __init__(self):
        super().__init__();self.anchors=[];self.resources=[];self.ids=[];self.keys=[]
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if a.get('id'):self.ids.append(a['id'])
        for key in ('data-i18n','data-i18n-html','data-i18n-aria-label','data-i18n-content','data-t','data-t-html','data-t-aria'):
            if a.get(key):self.keys.append(a[key])
        if tag=='a' and a.get('href'):self.anchors.append(a['href'])
        if tag in ('script','img') and a.get('src'):self.resources.append(a['src'])
        if tag=='link' and a.get('href') and a.get('rel')!='canonical':self.resources.append(a['href'])

def load_js_json(text,variable):
    match=re.search(r'const '+re.escape(variable)+r'\s*=\s*',text)
    if not match:raise ValueError('missing '+variable)
    value,idx=json.JSONDecoder().raw_decode(text[match.end():]);return value

class StaticChecks(unittest.TestCase):
    def test_all_pages_real_and_relative_links(self):
        self.assertEqual(len(HTML_FILES),4)
        for file in HTML_FILES:
            p=Tags();p.feed(file.read_text(encoding='utf-8'))
            self.assertEqual(len(p.ids),len(set(p.ids)),file)
            for link in p.anchors + p.resources:
                if link.startswith(('https://','http://','mailto:','data:','javascript:')):continue
                part=urlsplit(link)
                if part.path:
                    target=(file.parent/unquote(part.path)).resolve()
                    self.assertTrue(target.is_relative_to(SITE.resolve()),f'link escaped: {link}')
                    self.assertTrue(target.is_file(),f'{file.name}: missing {link}')
                elif part.fragment:
                    self.assertIn(part.fragment,p.ids,f'{file.name}: invalid anchor {link}')
    def test_index_i18n_complete(self):
        translations=load_js_json((SITE/'i18n.js').read_text(encoding='utf-8'),'VISUAL_STORY_TRANSLATIONS')
        p=Tags();p.feed((SITE/'index.html').read_text(encoding='utf-8'))
        self.assertGreater(len(p.keys),35)
        for key in p.keys:
            self.assertIn(key,translations)
            self.assertEqual({'en','zh-TW','zh-CN'},set(translations[key]))
            self.assertTrue(all(translations[key].values()),key)
    def test_showcase_i18n_complete(self):
        js=(SITE/'showcase/showcase.js').read_text(encoding='utf-8')
        translations=load_js_json(js,'DICTIONARY')
        for file in HTML_FILES[1:]:
            p=Tags();p.feed(file.read_text(encoding='utf-8'))
            for key in p.keys:
                self.assertIn(key,translations,f'{file}: {key}')
                self.assertEqual({'en','zh-TW','zh-CN'},set(translations[key]))
                self.assertTrue(all(translations[key].values()),f'{file}: {key}')
    def test_docs_reference_existing_files(self):
        for name in ('README.md','README.zh-CN.md','README.zh-TW.md'):
            p=ROOT/name
            text=p.read_text(encoding='utf-8')
            self.assertIn('showcase/character.html',text)
            self.assertIn('showcase/brand.html',text)
            self.assertIn('showcase/product.html',text)
            for href in re.findall(r'\[[^\]]*\]\(([^)]+)\)',text):
                parsed=urlsplit(href)
                if parsed.scheme or href.startswith('#'):continue
                self.assertTrue((p.parent/unquote(parsed.path)).exists(),f'{name}: {href}')
if __name__=='__main__':unittest.main(verbosity=2)
