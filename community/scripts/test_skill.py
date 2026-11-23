#!/usr/bin/env python3
"""Quick regression checks using only Python stdlib; optional Pillow is exercised when available."""
import importlib.util
import json
from pathlib import Path
import subprocess
import sys
import tempfile
from unittest import TestCase, main

ROOT=Path(__file__).resolve().parents[1]
PYTHON=sys.executable

class SkillTests(TestCase):
    def test_skill_entrypoint(self):
        content=(ROOT/'SKILL.md').read_text(encoding='utf-8')
        self.assertTrue(content.startswith('---\nname: visual-story-site\n'))
        self.assertIn('description:', content.split('---',2)[1])
        for f in ('visual-direction.md','scene-motion.md','web-implementation.md'):
            self.assertTrue((ROOT/'references'/f).is_file())
    def test_starter_passes(self):
        result=subprocess.run([PYTHON, str(ROOT/'scripts/check_site.py'), '--site',str(ROOT/'assets/starter-site'),'--strict'],capture_output=True,text=True)
        self.assertEqual(result.returncode,0,result.stdout+result.stderr)
    def test_missing_asset_detected(self):
        with tempfile.TemporaryDirectory() as tmp:
            site=Path(tmp)
            (site/'index.html').write_text('<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body><img src="missing.png" alt="測試"></body></html>',encoding='utf-8')
            result=subprocess.run([PYTHON,str(ROOT/'scripts/check_site.py'),'--site',str(site)],capture_output=True,text=True)
            self.assertNotEqual(result.returncode,0)
            self.assertIn('missing img resource',result.stdout)
    def test_manifest_image_hash(self):
        with tempfile.TemporaryDirectory() as tmp:
            top=Path(tmp);media=top/'assets';media.mkdir()
            # Minimal valid PNG: 1x1 pixel
            import base64,hashlib
            data=base64.b64decode('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9VKfNbMAAAAASUVORK5CYII=')
            (media/'tiny.png').write_bytes(data)
            out=top/'manifest.json'
            result=subprocess.run([PYTHON,str(ROOT/'scripts/asset_manifest.py'),'scan','--input',str(media),'--output',str(out)],capture_output=True,text=True)
            self.assertEqual(result.returncode,0,result.stdout+result.stderr)
            payload=json.loads(out.read_text(encoding='utf-8'))
            self.assertEqual(payload['asset_count'],1)
            self.assertEqual(payload['assets'][0]['sha256'],hashlib.sha256(data).hexdigest())
            self.assertEqual(payload['assets'][0]['rights_status'],'UNVERIFIED')

if __name__=='__main__':
    main(verbosity=2)
