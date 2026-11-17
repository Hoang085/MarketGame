// Gói index.html + assets/ + audio/ thành một file HTML duy nhất (ảnh, âm thanh nhúng base64), kiểu playable ads.
//   node build.mjs   ->  dist/khach-san-dem-playable.html
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const MIME = { '.png': 'image/png', '.jpg': 'image/jpeg', '.mp3': 'audio/mpeg' };
let html = await readFile(path.join(here, 'index.html'), 'utf8');
const refs = [...new Set(html.match(/'(?:assets|audio)\/[\w.-]+'/g))];
for (const q of refs) {
  const rel = q.slice(1, -1), bytes = await readFile(path.join(here, rel));
  html = html.split(q).join(`'data:${MIME[path.extname(rel)]};base64,${bytes.toString('base64')}'`);
}
await mkdir(path.join(here, 'dist'), { recursive: true });
const out = path.join(here, 'dist', 'khach-san-dem-playable.html');
await writeFile(out, html);
console.log(`${refs.length} files inlined -> ${path.relative(here, out)} (${(Buffer.byteLength(html) / 1048576).toFixed(2)} MB)`);
