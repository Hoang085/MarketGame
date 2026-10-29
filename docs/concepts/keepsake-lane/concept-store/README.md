# Bloom Corner (tên tạm)
Hướng đổi theme cho game merge-2 Keepsake Lane, đề xuất ngày 2026-10-27, nhắm người chơi nữ. Bối cảnh là một "concept store" vừa bán hoa, vừa có góc café, vừa có kệ thời trang. Gameplay merge giữ nguyên. **Chốt chạy ads ngày 2026-10-27**, thêm một bí mật gia đình nhẹ (ảnh cũ năm 1968) theo `../../../market/merge2-theme-vintage-vs-bloom-2026-10-27.md`.

## Chia vai trò
| Thành phần | Vai trò |
|---|---|
| Hoa | Bản sắc và cái móc quảng cáo; chuỗi item chính |
| Café, bánh | Chuỗi phụ, đơn hàng của khách |
| Thời trang | Không làm dress-up. Phối đồ cho nữ chính (4 ô: tóc, áo/váy, phụ kiện, đạo cụ) rồi chụp ảnh lưu vào album kỷ niệm |

Art: item merge kiểu tròn dễ thương; nhân vật và nền giữ nét 2D như bản vintage của Keepsake Lane.

## File
| File | Nội dung |
|---|---|
| `compare.html` | Trang so sánh với bản "vintage bí ẩn": cảnh hội thoại, bàn ghép, tủ đồ + ảnh kỷ niệm, chuỗi item, bảng so sánh. Đã đăng thành artifact riêng tư: https://claude.ai/artifact/FNNN2Lob3vMjUyGUhJTgug |
| `playable-script.md` | Kịch bản playable ad 2 màn (hoa, thời trang), phối đồ + chụp ảnh, 2 nửa ảnh 1968; asset cần vẽ thêm, biến thể test |
| `playable/` | Demo playable 2 màn chơi được (bản test nội bộ, v0.1), xem `playable/README.md` |
| `concept-art/` | Ảnh concept (AI, chỉ dùng nội bộ) |

Trang `compare.html` tham chiếu ảnh vintage qua đường dẫn `vintage/...` (đường dẫn trong artifact). Mở file cục bộ sẽ thiếu ảnh cột vintage; xem bản artifact.

## Bản chọn (concept-art/)
| Asset | Chọn | Ghi chú |
|---|---|---|
| Nền tiệm ban ngày | **BG-store-day-2** | Góc hoa bên trái, quầy café giữa, giá váy + gương + đèn chụp ảnh bên phải; giữa khung trống. Bản 1 cũng đẹp nhưng nhiều đồ treo ở trên. |
| Nữ chính (tạp dề tiệm hoa) | **CH-heroine-2** | Sửa từ Clara v4 của Keepsake: giữ gương mặt, đổi trang phục, ôm bó hoa. |
| Nữ chính váy hoa + mũ cói | **CH-heroine-sundress-2** | Bộ đồ thứ 2 cho tủ đồ. |
| Nữ chính dạ hội | **CH-heroine-evening-2** | Bộ đồ thứ 3. |
| Leo (nhiếp ảnh gia, tuyến tình cảm) | **CH-leo-2** | Gắn với tính năng chụp ảnh. |
| Ảnh kỷ niệm | **PHOTO-memory-1** | Tường hoa, giá váy, gương, bàn café trong một khung. |
| Chuỗi hoa | **FLW-sheet-2** | Hạt giống → chậu mầm → hoa hồng → bó nhỏ → bó lớn → giỏ hoa. |
| Chuỗi café | **CAF-sheet-1** | Hạt café → túi café → ly café → latte → latte + cupcake → tiệc trà. |
| Chuỗi thời trang | **FSH-sheet-1** | Ruy băng → nơ → mũ cói → túi → bộ phụ kiện → váy hè. |

Model: `google/nano-banana-2.1/edit` (mẫu phong cách: nền BG-boutique-day-1, Clara v4, Victor v4, icon locket tròn), tách nền `fal-ai/birefnet/v2`.
