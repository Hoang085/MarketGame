// Sinh anh concept qua fal.ai.
// node tools/concept-gen/fal-gen.mjs <prompts.json> <thu-muc-ra> [--model fal-ai/flux-pro/v1.1] [--only A,B] [--n 2]
// Can bien moi truong FAL_KEY. Moi muc trong prompts.json: { "id": "A", "prompt": "...", "image_size": "landscape_16_9" }
// Tuy chon moi muc: "model" (ghi de --model), "image" (duong dan anh goc de sua), "extra" (tham so them cho model)
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const args = process.argv.slice(2);
const opt = (k, d) => (args.includes(k) ? args[args.indexOf(k) + 1] : d);
const [promptFile, outDir] = args.filter((a, i) => !a.startsWith('--') && !args[i - 1]?.startsWith('--'));
const model = opt('--model', 'fal-ai/flux-pro/v1.1');
const only = opt('--only')?.split(',');
const n = Number(opt('--n', '2'));

if (!process.env.FAL_KEY) { console.error('Thieu FAL_KEY'); process.exit(1); }
if (!promptFile || !outDir) { console.error('Dung: node fal-gen.mjs <prompts.json> <thu-muc-ra>'); process.exit(1); }

const items = JSON.parse(await readFile(promptFile, 'utf8')).filter((p) => !only || only.includes(p.id));
await mkdir(outDir, { recursive: true });

for (const it of items) {
  const body = { prompt: it.prompt, num_images: n, output_format: 'png', safety_tolerance: '2', ...it.extra };
  // Co anh goc (sua anh / image-to-image): gui dang data URI, giu ti le anh goc
  const mime = { '.webp': 'image/webp', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg' }[path.extname(it.image ?? '').toLowerCase()] ?? 'image/png';
  if (it.image) body.image_url = `data:${mime};base64,${(await readFile(it.image)).toString('base64')}`;
  else body.image_size = it.image_size ?? 'landscape_16_9';
  const res = await fetch(`https://fal.run/${it.model ?? model}`, {
    method: 'POST',
    headers: { Authorization: `Key ${process.env.FAL_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) { console.error(`${it.id}: loi ${res.status} ${(await res.text()).slice(0, 300)}`); continue; }
  const data = await res.json();
  for (const [i, img] of (data.images ?? []).entries()) {
    const file = path.join(outDir, `${it.id}-${i + 1}.png`);
    await writeFile(file, Buffer.from(await (await fetch(img.url)).arrayBuffer()));
    console.log(`Da luu ${file}`);
  }
  await writeFile(path.join(outDir, `${it.id}.meta.json`), JSON.stringify({ model: it.model ?? model, image: it.image, seed: data.seed, prompt: it.prompt }, null, 2));
}
