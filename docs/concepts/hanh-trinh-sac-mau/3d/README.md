# Model 3D lọ thủy tinh (vòng 1, 2026-10-27)

Dựng bằng script, không gen AI: `tools/blender/lo-thuy-tinh.py` (Blender 5.2). Kích thước khớp `SHAPES` trong `../tranh-lo.js`, 1 px mockup = 1 cm, đáy lọ ở z = 0.

```
"C:\Program Files\Blender Foundation\Blender 5.2\blender.exe" -b --factory-startup -P tools/blender/lo-thuy-tinh.py -- docs/concepts/hanh-trinh-sac-mau/3d docs/concepts/hanh-trinh-sac-mau/tranh
```

| File | Dáng | Cao thân / tổng (cm) |
|---|---|---|
| lo-bottle.glb/.fbx | Bình cầu | 76 / 98 |
| lo-gourd.glb/.fbx | Hồ lô | 99 / 104 |
| lo-jar.glb/.fbx | Lọ thẳng | 80 / 92 |
| lo-lantern.glb/.fbx | Lọ bầu dục | 88 / 98 |

Mỗi file có 3 mesh:
- `lo-*`: thân kính, dày 1,6 cm (modifier Solidify đã áp khi xuất).
- `vanh-*`: vành miệng.
- `tranh-*`: lõi cát bên trong thân. UV chiếu chính diện theo cách "cover" giống `tranh-lo.js`, nên gán ảnh trong `../tranh/` là đúng vùng màu. Trong Unity, shader của lõi sẽ dùng lưới vùng màu (tranh-map) để hiện dần từng vùng theo lượng cát đã đổ.

`preview.png`: hàng trước có tranh (Bãi cát, Mũi Né, Hoàng hôn biển, Thuyền đỏ), hàng sau là lọ rỗng. Render Cycles, nền tím theo style frame.

Chưa làm: viền vàng + sao cho món đặc biệt (để Unity đổi material), LOD, tối ưu số tam giác (hiện ~64 cạnh quanh trục).
