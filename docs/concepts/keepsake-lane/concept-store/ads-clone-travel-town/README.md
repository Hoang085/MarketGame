# Clone ads Travel Town để làm demo kỹ thuật, FX, art (30/10/2026)

Mục đích: demo nội bộ để thử kỹ thuật, FX và art theo style Travel Town ([style-guide-travel-town.md](../style-guide-travel-town.md)). Đây không phải creative để chạy. Bản chạy ads phải dùng art và item của Bloom Corner, không dùng hình của Travel Town.

Nguồn: Meta Ad Library, tìm "Travel Town", lọc video đang chạy, sắp theo lượt hiển thị (30/10/2026). Nhà quảng cáo: trang **Travel Town - Merge Adventure** (Moon Active). Khoảng 140 kết quả; phần lớn là ads kéo người chơi cũ quay lại ("Your Items Are Waiting For You to Merge", "We Miss You!").

Ảnh khung hình nằm trong `frames/`.

## Các ads đã xem

| Mã | Chạy từ | Dài | Kiểu | Ghi chú |
|---|---|---|---|---|
| **A** [1130567363481565](https://www.facebook.com/ads/library/?id=1130567363481565) | 17/06/2026 | 59 s | **Quay gameplay thật:** 3 khách đặt hàng, bàn merge 7×7, merge, giao hàng | **Lượt hiển thị cao nhất**; 5 ads dùng chung creative |
| **B** [3578386132301554](https://www.facebook.com/ads/library/?id=3578386132301554) | 29/03/2026 | 59 s | Bàn rất dày item **café**, tay chạm đống xu thì xu nổ tung và bay đi | Chạy 7 tháng, tức là creative hiệu quả |
| C [1267750644827384](https://www.facebook.com/ads/library/?id=1267750644827384) | 29/03/2026 | 30 s | Giống B, item bãi biển | |
| D [953738887720321](https://www.facebook.com/ads/library/?id=953738887720321) | 09/07/2026 | 59 s | Giống B, item bãi biển, có popup thưởng "1,000" | "Merge Daily and Win Free Prizes!" |

Mọi ads đều kết thúc bằng endcard: nhân vật Travel Town trên nền bãi biển, logo, nút "COME BACK".

## Chốt (30/10/2026): clone ads A, lấy đoạn 0–12 s làm demo; thêm FX xu nổ của ads B lúc giao hàng

**Lý do chọn A:**
- Lượt hiển thị cao nhất trong các ads đang chạy.
- Thể hiện đủ cả 3 thứ cần demo: **art** (nhân vật, item, bàn, UI, nền), **FX** (merge, popup chữ, giao hàng, xu bay) và **kỹ thuật** (logic merge, đơn hàng, đổi khách).
- Đúng vòng chơi cốt lõi mà Bloom Corner sẽ có, nên code và FX dùng tiếp được cho playable (art sẽ thay sau).

**Phần chốt (0–12 s), một vòng chơi trọn vẹn:**

| Thời điểm | Diễn biến | Cần làm |
|---|---|---|
| 0–1 s | Màn hình hiện sẵn: thanh tài nguyên (năng lượng 600, xu 3.900, đá quý 55), 3 khách đứng trên 3 thẻ đơn hàng, bàn 7×7 đầy item | Art: nhân vật, item, bàn, UI, nền trời và đồi cỏ |
| 1–5 s | Tay kéo một item (ống thở) tới item giống hệt | Kỹ thuật: kéo thả, item bám theo ngón tay, ô đích sáng lên |
| 5,6–6,2 s | Hai item gộp thành item cấp cao hơn (chân vịt). Ô sáng xanh lá, chữ **"Nice!"** bật lên | FX: item nảy lên, ô sáng, chữ bật lên rồi mờ dần |
| ~6 s | Thẻ đơn hàng của khách 1 đã đủ đồ, nút **"GO"** xanh hiện trên đầu khách | FX: nút bật lên và nhún nhẹ |
| 8–9 s | Bấm GO: item bay từ bàn lên thẻ đơn, khách 1 trượt ra khỏi màn hình, xu tăng 3.900 → 3.906 | FX: item bay theo đường cong, số xu đếm lên |
| 9–11 s | Hai thẻ còn lại trượt sang trái, **khách mới trượt vào** từ bên phải | Kỹ thuật: hàng đợi khách, animation trượt |
| 12 s | Merge tiếp, chữ **"Amazing!"** | Chữ khen đổi theo cấp item |

Đoạn 12–56 s chỉ lặp lại vòng này. Có thể thêm hiệu ứng **xu nổ tung và bay đi** của ads B làm FX phụ cho lúc giao hàng; ads B dùng item café, gần với Bloom Corner.

## Danh sách cho demo

**Art** (theo style Travel Town, giữ chủ đề bãi biển như ads; danh sách gen ở [danh-sach-gen.md](danh-sach-gen.md)):
- 3–4 nhân vật khách, nửa người, kiểu bán thực
- 2 chuỗi item × 4–5 cấp (đủ để merge 2 lần và có đơn hàng)
- Bàn caro 7×7 hai tông màu đục
- Thanh tài nguyên, thẻ đơn hàng, nút GO, icon xu
- Nền trời và cảnh phía sau, mờ, ít chi tiết

**FX:**
- Item nảy khi được nhấc, bám ngón tay khi kéo
- Ô đích sáng lên khi kéo item giống tới
- Merge: hai item hút vào nhau, nảy, sáng, ra item mới
- Chữ khen bật lên (Nice!, Great!, Amazing!)
- Nút GO bật lên và nhún
- Item bay lên thẻ đơn; xu bay về thanh tài nguyên, số đếm lên
- Khách trượt ra và trượt vào

**Kỹ thuật:**
- Lưới, kéo thả, kiểm tra merge
- Đơn hàng: kiểm tra đủ đồ, bật GO
- Hàng đợi khách
- Chạy được trên điện thoại (dạng playable HTML5 hoặc Unity build)

## Cần thảo luận

1. **Engine:** HTML5 (dùng lại code playable Bloom Corner v0.1, đóng MRAID được ngay) hay Unity?
2. **Art:** đã chốt giữ chủ đề bãi biển như ads (30/10), vì đây chỉ là demo kỹ thuật.
3. **FX:** làm bằng code (tween, particle) hay xuất từ After Effects hoặc Spine?
4. **Mức giống:** giống Travel Town đến đâu là đủ, và chỗ nào làm khác để có dấu ấn riêng?
