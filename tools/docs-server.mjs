import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Phục vụ thư mục docs/ (ảnh tương đối không hiện khi mở file:// trong Browser pane)
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../docs');
const types = { '.html': 'text/html; charset=utf-8', '.jpg': 'image/jpeg', '.png': 'image/png', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json' };
createServer(async (req, res) => {
  const p = path.join(root, decodeURIComponent(new URL(req.url, 'http://x').pathname));
  if (!p.startsWith(path.normalize(root))) { res.writeHead(403).end(); return; }
  let body;
  try { body = await readFile(p); } catch { res.writeHead(404).end('not found'); return; }
  res.writeHead(200, { 'Content-Type': types[path.extname(p)] ?? 'application/octet-stream' }).end(body);
}).listen(8770, () => console.log('docs on http://localhost:8770'));
