#!/usr/bin/env python3
"""Internationalization source checks using only Python's standard library."""
from pathlib import Path
import re
import unittest
from urllib.parse import unquote

ROOT=Path(__file__).resolve().parents[2]
SITE=ROOT/'community/assets/starter-site'
LANGS=('en','zh-CN','zh-TW')

class LocalizationTests(unittest.TestCase):
 def test_default_english_with_real_selector(self):
  html=(SITE/'index.html').read_text(encoding='utf-8')
  self.assertRegex(html,r'<html\s+lang="en"')
  self.assertIn('id="languageSelect"',html)
  self.assertIn('value="en"',html)
  self.assertIn('value="zh-CN"',html)
  self.assertIn('value="zh-TW"',html)
  self.assertIn('src="./i18n.js"',html)
  self.assertIn('src="./app.js"',html)
 def test_translations_cover_all_keys(self):
  html=(SITE/'index.html').read_text(encoding='utf-8')
  js=(SITE/'i18n.js').read_text(encoding='utf-8')
  keys=set(re.findall(r'data-i18n(?:-html|-aria-label|-content)?="([a-zA-Z0-9]+)"',html))
  self.assertGreater(len(keys),35)
  for key in keys:
   self.assertIn('"'+key+'"',js)
  self.assertIn('"en"',js)
  self.assertIn('"zh-TW"',js)
  self.assertIn('"zh-CN"',js)
  self.assertIn('localStorage.setItem',js)
 def test_three_documentation_languages_exist(self):
  for folder,basename in [(ROOT,'README'),(ROOT/'community','README'),(ROOT/'community','SKILL'),(ROOT/'docs','LICENSING'),(ROOT/'docs','VERIFICATION')]:
   for lang in LANGS:
    suffix='' if lang=='en' else '.'+lang
    self.assertTrue((folder/(basename+suffix+'.md')).is_file(),(folder,basename,lang))
  self.assertIn('Visual assets to interactive websites',(ROOT/'README.md').read_text(encoding='utf-8'))
 def test_markdown_links_local(self):
  checked=0
  for md in ROOT.rglob('*.md'):
   content=md.read_text(encoding='utf-8')
   for link in re.findall(r'\[[^\]]*\]\(([^)]+)\)',content):
    if link.startswith(('https:','http:','mailto:','#')):continue
    self.assertTrue((md.parent/unquote(link.split('#')[0])).exists(),f'{md}: {link}')
    checked+=1
  self.assertGreater(checked,60)

if __name__=='__main__':unittest.main(verbosity=2)
