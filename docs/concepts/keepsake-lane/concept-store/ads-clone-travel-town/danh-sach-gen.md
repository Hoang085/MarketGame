# Danh sách asset cần gen cho demo clone ads A (30/10/2026)

Demo kỹ thuật, FX và art, chỉ dùng nội bộ: clone đoạn 0–12 s của ads A, thêm FX xu nổ của ads B (xem [README.md](README.md)). Style theo [style-guide-travel-town.md](../style-guide-travel-town.md).

## Giữ gì, đổi gì

| Giữ giống ads | Đổi để không thành bản clone |
|---|---|
| Chủ đề bãi biển, style item như render 3D | **Món đồ trong từng chuỗi**: đổi sang món khác cùng chủ đề |
| Bố cục: thanh tài nguyên, 3 khách trên thẻ đơn, bàn 7×7 | **Khách**: đổi vai, trang phục, tuổi |
| Nhịp 0–12 s: merge, Nice!, GO, giao hàng, khách mới | **Nền**: biển và hàng dừa thay cho đồi cỏ |
| Cơ chế và FX | **Màu khung bàn, icon đá quý** |

Mọi hình đều tự gen. Không cắt hình từ video: creative của Travel Town có watermark "PROTECTED".

## Cần gen

| # | Mã | Asset | Trong ads | Của mình | Số bản |
|---|---|---|---|---|---|
| 1 | `ITEM-float` | Chuỗi chính, 5 cấp | Đồ lặn: ống thở → chân vịt | **Phao bơi:** phao tay → phao tròn sọc → phao vịt vàng → phao kỳ lân → thuyền chuối | 2 |
| 2 | `ITEM-fruit` | Chuỗi phụ, 5 cấp | Vỏ sò, ốc | **Trái cây nhiệt đới:** lát dưa hấu → nửa quả dưa hấu → trái dừa có ống hút → giỏ trái cây → xe kem trái cây | 1 |
| 3 | `ITEM-misc` | Item phụ rải trên bàn | Lâu đài cát, rong biển, đá, đĩa đồ ăn, cà rốt | **Ô dù, dép xỏ ngón, khăn tắm cuộn, con cua, kem chống nắng, kính râm** | 1 |
| 4 | `CH-customers` | 4 khách, nửa người | Cậu bé thám hiểm, cô gái tóc vàng, bà cụ đeo kính | **Cô bé ôm ván lướt sóng, anh cứu hộ đeo còi, ông cụ đội mũ câu cá, bà bán kem** (khách mới) | 2 |
| 5 | `ICON-res` | Icon tài nguyên | Tia sét, xu, đá quý hồng | Tia sét, xu, **ngọc trai xanh ngọc** thay đá quý | 1 |
| 6 | `BG-beach` | Nền phía sau khách | Trời xanh, đồi cỏ | **Trời xanh, mặt biển, hàng dừa**, vẽ mờ | 2 |

Ảnh mẫu: #1, #4 dùng `crops/ref-tt-items-beach.png`, `ref-tt-items-jungle.png`, `ref-tt-characters.png`. #2, #3, #5 lấy bản chọn của #1 làm ảnh 1. #6 dùng `travel-town-2.jpg`.

Tổng: 9 ảnh × 0,15 USD ≈ **1,35 USD** (`fal-ai/nano-banana-pro/edit`, 2K). Nếu phải làm lại một vòng thì thêm khoảng 1 USD.

**Thứ tự gen:** #1 xong (30/10): chọn `art/v3/ITEM-float-a.png`, dùng làm ảnh 1 cho #2, #3, #5. #4 và #6 không cần chờ, gen song song được.

## Không cần gen (vẽ bằng code)

| Thứ | Cách làm |
|---|---|
| Bàn caro 7×7 | Ô hai tông cát và be; **khung màu xanh biển** thay cho khung gỗ của ads |
| Thanh tài nguyên | Thanh bo tròn màu kem, gắn icon #5 |
| Thẻ đơn hàng | Thẻ trắng bo góc, icon item thu nhỏ, phần thưởng ở góc |
| Nút GO | Nút xanh lá bo tròn, chữ trắng viền |
| Chữ khen (Nice!, Great!, Amazing!) | Font tròn đậm, viền và đổ bóng bằng code |
| Ô sáng xanh, tia sáng khi merge, lấp lánh | Particle và glow bằng code |
| Bàn tay hướng dẫn | Icon tay đơn giản |
