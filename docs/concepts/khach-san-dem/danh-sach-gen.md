# Danh sách art cần gen cho playable "Khách sạn đêm" (07/11/2026)

Theo kịch bản [playable-script.md](playable-script.md), mục 4. Ảnh gen là **concept nội bộ** để duyệt hướng và dựng demo playable; bản chạy ads thật phải vẽ lại (quy tắc ở mục 8 của kịch bản).

**Style: `merge-glossy-cartoon`, theo Travel Town** (người dùng chốt 07/11/2026). Cùng style với Bloom Corner và demo clone ads Travel Town (30/10), để test CPI chỉ khác theme, không khác style. Quy tắc vẽ theo [style-guide-travel-town.md](../keepsake-lane/concept-store/style-guide-travel-town.md): 3D vẽ tay (không phải render CG), không viền, một nguồn sáng ấm từ trên trái, vệt bóng rộng và mềm, item mập tròn gọn trong ô, mỗi chuỗi một màu chủ đạo.

**Chỉnh cho theme đêm:** giữ đúng cách dựng và chất liệu của Travel Town; chỉ đổi bảng màu và ánh sáng nền (cảnh đêm dùng ánh nến vàng ấm làm nguồn sáng chính trên nền tím than). Nhân vật vẫn tỉ lệ Travel Town nhưng **gương mặt người lớn hơn**, đặc biệt Aldric: không chibi, không mũm mĩm.

## Nguyên tắc chung
- Quái vật **người lớn, lịch lãm**, không mũm mĩm hoạt hình, không máu, không jumpscare. Rating mục tiêu 12+.
- Không gì giống Hotel Transylvania: không chữ "Transylvania", không Dracula kiểu phim, không Frankenstein đầu phẳng da xanh.
- Kiến trúc Victorian; bảng màu ngày: gỗ ấm, kem, xanh rêu; bảng màu đêm: tím than, xanh lam, ánh nến vàng.
- Mọi asset phải dùng lại được trong game thật.

## Cần gen

| # | Mã | Asset | Mô tả | Dùng ở cảnh | Số bản |
|---|---|---|---|---|---|
| 1 | `BG-exterior-dusk` | Mặt tiền khách sạn, chiều muộn | Khách sạn Victorian 3 tầng bỏ hoang: cửa sổ vỡ, dây leo, biển *THE HOLLOW LANTERN* mất chữ, biển SOLD dán chéo lên FOR SALE, cổng sắt gỉ. Chừa chỗ dưới cho nhân vật | 1 | 1 |
| 2 | `BG-lobby-ruined` | Sảnh bên trong, đổ nát | Theo phác thảo `sketch/BG-lobby-ruined-sketch.svg` (v4, 09/11): quầy lễ tân dài ở trung tâm, tủ chìa khóa nhiều ô số phòng, thang máy cổ, xe đẩy hành lý đổ, đèn chùm rơi, thảm đỏ rách, ghế phủ vải; cầu thang và cửa sổ vòm chỉ là phụ. Tiền cảnh (lộ ra khi bàn ẩn): huy hiệu khách sạn khảm giữa sàn, ghế sofa tròn kiểu sảnh khách sạn phủ vải, chồng vali cũ + hộp mũ, giá treo áo có áo choàng đen và mũ chóp cao, cây cọ chậu héo, dây chắn nhung đổ, thư/báo cũ, xô hứng nước dột. Nền vẽ **đầy đủ cả khung** (đồ có thể xuống tới ~55% chiều cao); khi chơi, **bàn ghép 7×7 trượt lên phủ ~58% dưới**, che phần dưới nền, không cần ép đồ lên trên | 2–3 | 1 |
| 3 | `BG-lobby-restored` | Sảnh đã sửa, ban đêm | **Cùng bố cục #2**, khớp từng vị trí: sạch, lò sưởi cháy, thảm và rèm đỏ rượu, đèn chùm treo lại sáng rực, ngoài cửa sổ trời tím đêm | 3–7 | 1 |
| 4 | `BG-exterior-night` | Mặt tiền ban đêm (end card) | **Cùng bố cục #1** nhưng đã sửa, mọi cửa sổ sáng đèn, trăng tròn, sương mỏng. Chừa chỗ giữa trên cho logo | 8 | 1 |
| 5 | `CH-nora` | Nữ chính Nora, nửa người | ~30 tuổi, cựu chủ tiệm bánh; áo len mặc vội, tóc nâu buộc rối, xách vali cũ. Vẻ mệt nhưng bướng | 1–7 | 2 |
| 6 | `CH-nora-expr` | Bảng biểu cảm Nora | Thất thần, quyết tâm, bất ngờ, sững người. Giữ đúng gương mặt bản #5 đã chọn | 1–7 | 1 |
| 7 | `CH-aldric` | Ma cà rồng Lord Aldric, nửa người | Quý ông ~40–50 tuổi, tóc bạc chải ngược, mắt hổ phách, áo choàng dài nhung đen viền đỏ rượu, găng tay, gậy đầu bạc. Lịch lãm, hơi hài hước, không đáng sợ, không răng nanh lộ | 5–7 | 2 |
| 8 | `CH-aldric-expr` | Bảng biểu cảm Aldric | Cúi chào, nâng ly, mỉm cười bí ẩn. Giữ đúng gương mặt bản #7 đã chọn | 5–7 | 1 |
| 9 | `SIL-night-guests` | Bóng khách đêm | 3 silhouette sau rèm cửa sổ sáng: hồn ma quý bà thập niên 1920 (mũ cloche, chuỗi ngọc), người sói đội mũ phớt, phù thủy mũ rộng vành. Nền trong suốt hoặc trơn | 8 | 1 |
| 10 | `ITEM-LGT` | Chuỗi ánh sáng, 6 cấp | mẩu nến → cây nến → đèn dầu → đèn bão → đèn tường đồng → đèn chùm pha lê (cấp 6 viền vàng) | 2–3 | 1 |
| 11 | `ITEM-SRV` | Chuỗi phục vụ phòng, 6 cấp | tách trà → (cấp 2 tách có đĩa) → ấm trà sứ → khay trà bạc → nắp chuông bạc → xe đẩy phục vụ có hoa hồng đỏ và ly vang. Cùng render với #10 | 6 | 1 |
| 12 | `PROPS` | Máy sinh đồ + đạo cụ truyện | Hộp đồ cũ bám bụi, xe đẩy bạc nhỏ (2 máy sinh đồ); tấm vải trắng phủ đồ (ô khóa); danh thiếp *VICTOR CRANE – Real Estate* (12/11/2026 đổi tên thành VICTOR STERLING, xem `art/v2/src/cards-sterling-a.png`) bản mới và bản ố vàng 1923; đồng vàng cổ; mặt đồng hồ quả lắc chỉ 12 giờ | 2, 4, 6–8 | 1 |
| 13 | `ITEM-FILLER` | Item lấp bàn (thêm 11/11) | Cấp 1–3 của 2 chuỗi phụ: ghế (đôn → ghế tựa → ghế bành, nhung tím mận + gỗ óc chó) và chìa khóa phòng (1 chìa → chìa có thẻ → chùm chìa, đồng đỏ + cam san hô). Chỉ để lấp bàn 7×7, không ghép lên cấp cao trong playable | 2–7 | 1 |

**Tổng: 14 ảnh × 0,15 USD ≈ 2,1 USD** (`fal-ai/nano-banana-pro/edit`, 2K). Làm lại một vòng thì thêm khoảng 1 USD.

## Ảnh mẫu
Ảnh quan trọng nhất đặt đầu (ảnh 1). Đường dẫn `style-refs/…`, `theme-refs/…` tính từ `docs/market/`.

| Asset | Ảnh 1 (style) | Ảnh phụ |
|---|---|---|
| Item #10 | `../concepts/keepsake-lane/concept-store/ads-clone-travel-town/art/v3/ITEM-float-a.png` (bản đã chọn 30/10) | `style-refs/merge-glossy-cartoon/crops/ref-tt-items-beach.png`, `ref-tt-items-jungle.png` |
| Item #11, #12 | Bản chọn của #10 | `crops/ref-tt-items-jungle.png` |
| Nhân vật #5, #7 | `style-refs/merge-glossy-cartoon/crops/ref-tt-characters.png` | `crops/ref-tt2-heroine.png`, `crops/ref-hl-heroine.png` (Hotel Legacy, gương mặt người lớn hơn) |
| Biểu cảm #6, #8; bóng khách #9 | Bản chọn của #5 / #7 | `crops/ref-tt1-faces.png` |
| Nền #1, #2 | `style-refs/merge-glossy-cartoon/hotel-legacy-1.jpg` | `travel-town-2.jpg`; `theme-refs/mystery-detective/mystery-town-1.jpg` (chỉ lấy không khí, không lấy style) |
| Nền #3, #4 | Bản chọn của #2 / #1 | `theme-refs/mystery-detective/haunted-merge-1.jpg` (không khí đêm) |

Item gen trên nền trơn **cùng màu bàn chơi** (gỗ sẫm + kem) để model tự chỉnh tông, như bài học chuỗi phao bơi 30/10.

## Tiến độ
| # | Asset | Trạng thái |
|---|---|---|
| 5 | `CH-nora` | **Đã chọn `art/v2/CH-nora-a.png` (07/11).** Dùng làm ảnh 1 cho #6, #7 (để Aldric cùng nét vẽ), #8, #9 |
| 7 | `CH-aldric` | **Đã chọn `art/v2/CH-aldric-b.png` (09/11)**: bản có dấu hiệu ma cà rồng (mắt đỏ, tai nhọn, răng nanh, áo choàng, ghim dơi). Cổ áo choàng đang dựng cao, cần hạ thấp khi vẽ bản thật. Dùng làm ảnh 1 cho #8 |
| 1 (cũ) | `BG-exterior-dusk` | ~~Chốt tạm `art/v3/BG-exterior-dusk.png` (10/11)~~, thay bằng v4 b2 ngày 11/11 |
| 2 | `BG-lobby-ruined` | **Chốt tạm `art/v3/BG-lobby-ruined.png` (10/11)**. Dùng làm ảnh 1 cho #3 |
| 3 | `BG-lobby-restored` | **Đã chọn `art/v2/BG-lobby-restored.png` (11/11)** |
| 1 | `BG-exterior-dusk` | **Đã chọn `art/v4/BG-exterior-dusk-b2.png` (11/11)**: bố cục theo mẫu Mansion Tale (`refs/mansion-tale-crop.jpg`). Bỏ bản v3 nhìn thẳng. Dùng làm ảnh 1 cho #4 |
| 4 | `BG-exterior-night` | **Đã chọn `art/v4/BG-exterior-night.png` làm end card (11/11)**. Đã có bóng khách đêm sau rèm nên #9 không cần gen riêng |
| 9 | `SIL-night-guests` | Bỏ: đã nằm trong #4 |
| 10 | `ITEM-LGT` | **Đã chọn `art/ITEM-LGT-a.png` (11/11)**. Dùng làm ảnh 1 cho #11, #12 |
| 11 | `ITEM-SRV` | **Đã chọn `art/ITEM-SRV-a.png` (11/11)** |
| 12 | `PROPS` | **Dùng `art/v2/PROPS-a2.png` (11/11)**: đồng hồ đúng 12 giờ |
| 6 | `CH-nora-expr` | **Dùng `art/CH-nora-expr-a.png` (11/11)** |
| 8 | `CH-aldric-expr` | **Đã chọn `art/v2/CH-aldric-expr-c.png` (11/11)**: cổ áo đã hạ, bản chào là cúi đầu (chưa cúi gập người) |
| 13 | `ITEM-FILLER` | Thêm 11/11: cấp 1–3 chuỗi ghế (nhung tím mận) + chuỗi chìa khóa (đồng đỏ, thẻ cam). **Dùng `art/ITEM-FILLER-a.png`** |

Đủ art, đã ghép vào playable demo: [playable/README.md](playable/README.md) (11/11/2026).

## Thứ tự gen
1. **Đợt 1 (song song):** #1, #2, #5, #7, #10. Chờ chọn bản.
2. **Đợt 2:** dùng bản chọn làm ảnh 1 để đồng bộ:
   - #3 từ #2 (cùng bố cục), #4 từ #1.
   - #6 từ #5, #8 và #9 từ #7.
   - #11 và #12 từ #10.

## Không cần gen (làm bằng code)
| Thứ | Cách làm |
|---|---|
| Bàn ghép 7×7 (khoảng 58% màn hình dưới), bản ngày và bản đêm | Ô gỗ sẫm + kem; bản đêm phủ lớp tím xanh, item glow |
| Overlay ánh sáng ngày → đêm | Gradient màu đè lên #2/#3, chạy theo thanh tiến độ |
| Điện thoại + tin nhắn Victor | Khung UI đơn giản, chữ bằng font |
| Nút OPEN / HIDE, PLAY NOW, thanh tiến độ, thẻ order | UI code, gắn icon item thu nhỏ |
| Chữ "Cốc. Cốc. Cốc." rung, chữ khen | Font đậm, rung bằng code |
| Gió tắt nến, tia lửa khi merge, đồng xu xoay, vải bay | Particle và tween |
| Bàn tay hướng dẫn | Dùng lại từ playable Keepsake |
