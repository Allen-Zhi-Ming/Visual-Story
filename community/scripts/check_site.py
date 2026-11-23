#!/usr/bin/env python3
"""Static site verifier; no browser, JS runtime, or external network claims."""
import argparse
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import sys
from urllib.parse import unquote, urlsplit

SKIP_SCHEMES = ('http:', 'https:', 'mailto:', 'tel:', 'data:', 'javascript:')

class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.refs = []
        self.ids = set()
        self.anchors = []
        self.images = 0
        self.nav = 0
        self.viewport = False
        self.lang = False
        self.charset = False
        self.errors = []
        self.warnings = []
    def handle_starttag(self, tag, attrs):
        d = dict(attrs)
        if d.get('id'):
            if d['id'] in self.ids:
                self.errors.append(f"duplicate id: {d['id']}")
            self.ids.add(d['id'])
        if tag == 'html' and d.get('lang'):
            self.lang = True
        if tag == 'meta' and d.get('name', '').lower() == 'viewport':
            self.viewport = True
        if tag == 'meta' and 'charset' in d:
            self.charset = True
        if tag == 'nav':
            self.nav += 1
        if tag == 'img':
            self.images += 1
            if 'alt' not in d:
                self.errors.append('image missing alt attribute')
            if not d.get('src') and not d.get('srcset'):
                self.errors.append('image missing source')
        if tag == 'video' and 'autoplay' in d:
            for flag in ('muted', 'playsinline'):
                if flag not in d:
                    self.warnings.append(f'autoplay video missing {flag}')
        for attr in (('src',) if tag in ('script', 'iframe', 'source', 'video', 'img', 'audio') else ()):
            if d.get(attr):
                self.refs.append((tag, attr, d[attr]))
        if tag == 'link' and d.get('href'):
            self.refs.append((tag, 'href', d['href']))
        if tag == 'a' and d.get('href'):
            self.anchors.append(d['href'])
            if d['href'] == '#':
                self.warnings.append('anchor uses # without destination')

def check(root):
    errs, warns, pages = [], [], []
    html_paths = sorted(root.rglob('*.html'))
    if not html_paths:
        return {'status': 'FAIL', 'errors': ['no HTML files found'], 'warnings': [], 'pages': []}
    css_data = []
    for css in root.rglob('*.css'):
        if css.is_symlink():
            continue
        css_data.append(css.read_text(encoding='utf-8', errors='replace'))
    if not any(re.search(r'prefers-reduced-motion', css) for css in css_data):
        warns.append('no prefers-reduced-motion rule found in local CSS')
    for path in html_paths:
        if path.is_symlink():
            warns.append(f'skipped symbolic-link HTML: {path.relative_to(root)}')
            continue
        rel = path.relative_to(root).as_posix()
        page = Page()
        try:
            page.feed(path.read_text(encoding='utf-8'))
        except (UnicodeError, ValueError) as exc:
            errs.append(f'{rel}: cannot read HTML: {exc}')
            continue
        for label, condition in [('lang', page.lang), ('viewport', page.viewport), ('charset', page.charset)]:
            if not condition:
                errs.append(f'{rel}: missing {label}')
        errs.extend(f'{rel}: {err}' for err in page.errors)
        warns.extend(f'{rel}: {warning}' for warning in page.warnings)
        for tag, attr, val in page.refs:
            url = val.strip()
            if url.startswith(('#', '//')) or url.lower().startswith(SKIP_SCHEMES):
                continue
            parts = urlsplit(url)
            local_path = unquote(parts.path)
            if not local_path:
                continue
            candidate = (root / local_path.lstrip('/')).resolve() if local_path.startswith('/') else (path.parent / local_path).resolve()
            try:
                candidate.relative_to(root.resolve())
            except ValueError:
                errs.append(f'{rel}: {tag} {attr} escapes site root: {url}')
                continue
            if not candidate.is_file():
                errs.append(f'{rel}: missing {tag} resource: {url}')
        for url in page.anchors:
            if url.startswith('#') and len(url) > 1 and unquote(url[1:]) not in page.ids:
                errs.append(f'{rel}: missing anchor target: {url}')
        pages.append({'path': rel, 'images': page.images, 'navigation_elements': page.nav})
    return {'status': 'FAIL' if errs else 'PASS', 'scope': 'STATIC_ONLY',
            'errors': errs, 'warnings': warns, 'pages': pages}

def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--site', type=Path, required=True)
    ap.add_argument('--output', type=Path)
    ap.add_argument('--strict', action='store_true', help='treat warnings as errors')
    args = ap.parse_args()
    if not args.site.is_dir():
        ap.error('--site must be a directory')
    result = check(args.site)
    if args.strict and result['warnings']:
        result['status'] = 'FAIL'
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f"{result['status']}: pages={len(result['pages'])} errors={len(result['errors'])} warnings={len(result['warnings'])} [static-only]")
    for err in result['errors']:
        print('ERROR:', err)
    for warning in result['warnings']:
        print('WARN:', warning)
    return 0 if result['status'] == 'PASS' else 1
if __name__ == '__main__':
    sys.exit(main())
