# Tranh trong lọ (2026-10-27)

Gen bằng `fal-ai/nano-banana-pro` (1:1, 2 bản mỗi tranh, chỉ dùng 2–4 màu của game). Ảnh gốc ở `raw/`; ảnh chọn được thu về 256px tại đây.

`node tranh/build-tranh.mjs` (chạy từ thư mục hanh-trinh-sac-mau, cần Edge): xếp từng pixel vào màu game gần nhất theo sắc độ, bầu theo khối thành lưới 96×96, ghi ra `../tranh-map.js`. `tranh-lo.js` cắt lưới này theo dáng lọ để ra vùng màu và số cát cần.

| Tranh | Ảnh chọn | Màu |
|---|---|---|
| Bãi cát | raw/bai-cat-2 | ngọc, vàng |
| Đồi cát | raw/doi-cat-2 | ngọc, vàng |
| Sóng biển | raw/song-bien-2 | ngọc, vàng |
| Đảo nhỏ | raw/dao-nho-2 | ngọc, vàng |
| Đồi cát đỏ | raw/doi-cat-do-2 | vàng, cam, đỏ |
| Thuyền đỏ | raw/thuyen-do-2 | ngọc, cam, đỏ |
| Hoàng hôn biển ★ | raw/hoang-hon-2 | ngọc, vàng, cam |
| Bãi biển | raw/bai-bien-1 | ngọc, vàng, cam |
| Làng chài | raw/lang-chai-v2-1 (gen dọc 4:5 theo lọ thẳng, chốt 28/10) | vàng, cam, đỏ |
| Mũi Né ★ | raw/mui-ne-v2-1 (gen dọc 2:3 theo hồ lô, chốt 28/10) | ngọc, đỏ, vàng, cam |

Bản loại: các bản có viền trắng/khung tranh (dao-nho-1, doi-cat-1, doi-cat-do-1, song-bien-1, mui-ne-2). Đổi ảnh chọn: sửa `PICKS` trong build-tranh.mjs rồi chạy lại. Đổi tranh có thể đổi số cát cần, nên kiểm lại tổng bể và khay.

Ảnh dọc (v2) được đặt giữa một ô vuông khi lượng tử hóa; nền trắng ngoài lọ (độ bão hòa thấp) bị bỏ qua và lấp bằng màu bên cạnh. Lưới vẽ 1,25 cm/ô; đốm màu nhỏ hơn 40 ô bị gộp (Làng chài: 10 ô để giữ cửa và cửa sổ).
