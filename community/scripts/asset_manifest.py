#!/usr/bin/env python3
"""Read-only media inventory with reproducible hashes; standard library only."""
import argparse
import hashlib
import json
import mimetypes
from pathlib import Path
import shutil
import subprocess
import sys

MEDIA_EXTENSIONS = {'.png', '.jpg', '.jpeg', '.gif', '.webp', '.avif', '.svg', '.mp4', '.webm', '.mov', '.m4v', '.mp3', '.wav', '.ogg'}
VIDEO_EXTENSIONS = {'.mp4', '.webm', '.mov', '.m4v'}

def sha256_file(path):
    digest = hashlib.sha256()
    with path.open('rb') as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b''):
            digest.update(chunk)
    return digest.hexdigest()

def probe_video(path):
    if not shutil.which('ffprobe'):
        return {'probe_status': 'NOT_RUN', 'reason': 'ffprobe unavailable'}
    try:
        proc = subprocess.run(['ffprobe', '-v', 'error', '-show_entries',
                               'format=duration:stream=codec_type,width,height',
                               '-of', 'json', str(path)], capture_output=True, text=True,
                              timeout=15, check=False)
        if proc.returncode != 0:
            return {'probe_status': 'FAILED', 'reason': proc.stderr.strip()[:200]}
        result = json.loads(proc.stdout)
        data = {'probe_status': 'PASS'}
        if result.get('format', {}).get('duration'):
            data['duration_seconds'] = round(float(result['format']['duration']), 2)
        for stream in result.get('streams', []):
            if stream.get('codec_type') == 'video':
                data['width'] = stream.get('width')
                data['height'] = stream.get('height')
                break
        return data
    except (OSError, ValueError, subprocess.TimeoutExpired) as exc:
        return {'probe_status': 'FAILED', 'reason': str(exc)[:200]}

def probe_image(path):
    try:
        from PIL import Image
    except ImportError:
        return {'probe_status': 'NOT_RUN', 'reason': 'Pillow unavailable'}
    try:
        with Image.open(path) as im:
            return {'probe_status': 'PASS', 'width': im.width, 'height': im.height}
    except (OSError, ValueError) as exc:
        return {'probe_status': 'FAILED', 'reason': str(exc)[:200]}

def scan(input_dir):
    output = []
    for p in sorted(input_dir.rglob('*')):
        if p.is_symlink() or not p.is_file() or p.suffix.lower() not in MEDIA_EXTENSIONS:
            continue
        try:
            rel = p.relative_to(input_dir).as_posix()
            item = {'path': rel, 'bytes': p.stat().st_size,
                    'sha256': sha256_file(p), 'mime': mimetypes.guess_type(p.name)[0],
                    'role': 'UNCLASSIFIED', 'rights_status': 'UNVERIFIED'}
            if p.suffix.lower() in VIDEO_EXTENSIONS:
                item.update(probe_video(p))
            elif p.suffix.lower() not in {'.mp3', '.wav', '.ogg', '.svg'}:
                item.update(probe_image(p))
            else:
                item['probe_status'] = 'NOT_RUN'
            output.append(item)
        except OSError as exc:
            output.append({'path': p.relative_to(input_dir).as_posix(), 'probe_status': 'FAILED',
                           'reason': str(exc)[:200]})
    return {'schema_version': '1.0', 'source_dir': str(input_dir.resolve()),
            'status': 'SCANNED', 'asset_count': len(output), 'assets': output}

def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('command', choices=['scan'])
    ap.add_argument('--input', required=True, type=Path)
    ap.add_argument('--output', required=True, type=Path)
    args = ap.parse_args()
    if not args.input.is_dir():
        ap.error('--input must be an existing directory')
    if args.output.resolve().is_relative_to(args.input.resolve()):
        ap.error('--output must be outside input directory to avoid mixing inventory with assets')
    data = scan(args.input)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f"PASS: inventoried {data['asset_count']} media files -> {args.output}")
    return 0
if __name__ == '__main__':
    sys.exit(main())
