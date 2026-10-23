# Art brief: "Về Quê Làm Giàu" (tên tạm, trước đây "Từ Quê Lên Phố")
Phiên bản: v2, 2026-10-22 | Giai đoạn: chốt art style (concept 2D trước, chưa dựng demo chơi được)

> **Thay đổi ở v2:** chốt ảnh X1-2 làm mốc phong cách (mục 3), thêm quy tắc dùng tham khảo để tránh rủi ro bản quyền, danh sách nguồn tham khảo bắt buộc, 3 điểm khác biệt với Xóm Nhỏ, và lô asset đầu tiên (mục 8). Đình làng được phép đầu đao cong nhẹ (mục 4).

## 1. Tóm tắt game (để họa sĩ hiểu bối cảnh)
Game mô phỏng trồng trọt + kinh doanh, chạm để di chuyển nhân vật. Người chơi về quê, bắt đầu từ trồng trọt, chăn nuôi, rồi lớn dần qua 4 phần:
1. Làm tại nhà: trồng trọt, chăn nuôi.
2. Đem đồ ra chợ phiên hoặc bán trước cửa.
3. Mở quán nhỏ ở quê, làm nhà cung cấp cho quán ăn trên phố.
4. Lên phố mở quán (map riêng, làm sau).

Người chơi mục tiêu: chủ yếu nữ 20–40 tuổi, thích thư giãn, có ký ức tuổi thơ ở quê. Đội 3–6 người, nên mọi lựa chọn hình ảnh phải tái sử dụng được và vẽ được khối lượng lớn.

## 2. Các quyết định đã chốt
| Mục | Quyết định |
|---|---|
| Góc nhìn | 2D isometric (nhìn chéo từ trên), nhân vật 4 hướng đi |
| Phong cách | Cozy cartoon: hoạt hình 2D ấm áp, màu phẳng có viền, nhân vật chibi. Mốc phong cách: ảnh X1-2 (mục 3) |
| Điều khiển | Chạm để di chuyển nhân vật, nên nhân vật phải nhìn rõ ở mức zoom thường chơi |
| Bối cảnh | **Làng quê chung, lấy Bắc Bộ làm nền**: kiến trúc và cảnh quan chính là Bắc Bộ, được pha một số chi tiết quen thuộc toàn quốc để người chơi cả nước thấy gần gũi |
| Thời kỳ | Làng quê lý tưởng hóa, phảng phất thập niên 90–2000 (xe đạp cũ, radio, quạt nan), không gắn cứng một năm cụ thể |
| Map | **2 màn** (chốt 2026-10-22). **Làng**: rộng, liền mạch, nhân vật đi lại; có đình, chợ phiên, sân bóng, các khu nhà dân, ruộng lúa (ruộng lúa chỉ ở màn này). Overview: `que-len-pho/lang-quy-hoach/lang-overview-chot.png`. **Nhà mình**: vào qua cổng, kiểu Hay Day, camera cố định góc chéo, kéo/zoom; đất rộng có lưới ô để đặt luống rau củ, chuồng trại, sân phơi, trang trí; mở rộng bằng cách dọn đất hoang ở mép |
| Hoạt ảnh | Spine hoặc ghép bộ phận để thay trang phục không phải vẽ lại |

## 3. Mốc phong cách và quy tắc dùng tham khảo

### 3.1. Mốc phong cách: ảnh X1-2
File: `docs/concepts/que-len-pho/lang-xomnho-ref/X1-bacbo-2.png` (ảnh AI, **chỉ dùng nội bộ**, không đưa vào game, không đăng công khai).

| Lấy từ X1-2 | Không lấy từ X1-2 |
|---|---|
| Độ dày nét viền, cách tô màu phẳng, độ sáng tổng thể | Hình dáng cụ thể của bất kỳ ngôi nhà, cây, đồ vật nào trong ảnh |
| Mật độ chi tiết vừa phải, đọc rõ trên điện thoại | Bố cục map |
| Ô vườn có hàng rào cây cắt tỉa, đường cát uốn lượn | Nhân vật (X1-2 có nhân vật giống Xóm Nhỏ, phải thiết kế lại hoàn toàn) |
| Cảm giác yên bình, tươi, sạch | Màu viền xám đen và tông xanh cỏ chói (đổi theo mục 3.3) |

### 3.2. Quy tắc dùng tham khảo (bắt buộc)
1. **Vẽ mới từ đầu, không đồ lại.** Không đặt X1-2 hay ảnh game khác làm lớp dưới để vẽ lên; không lấy nguyên hình dáng một món nào.
2. **Không dùng ảnh AI làm asset.** Ảnh AI chỉ để định hướng. Asset trong game phải do họa sĩ vẽ.
3. **Mỗi asset tham khảo từ nhiều nguồn**, ghi lại nguồn trong file theo dõi asset (tên asset → các ảnh tham khảo).
4. **Giữ file phác thảo và các bước vẽ** (file gốc nhiều lớp, bản phác) làm bằng chứng tự sáng tác.
5. **Trước khi phát hành**, nhờ người làm sở hữu trí tuệ xem bộ art chính.

**Nguồn tham khảo bắt buộc có trong moodboard:**
- Ảnh thật làng Bắc Bộ: nhà 3 gian mái ngói, đình làng, cổng làng, giếng làng, lũy tre, ao làng, cầu đá, cánh đồng lúa (ví dụ Đường Lâm, Cự Đà, làng quê đồng bằng sông Hồng).
- Tranh làng quê Việt Nam (cây đa, cổng làng, sông, cầu đá vòm, trâu, thuyền nan).
- Tranh Đông Hồ (cho UI và điểm nhấn).
- 2–3 game farm/isometric khác ngoài Xóm Nhỏ, để tham khảo cách bố trí UI và độ đọc của asset.

### 3.3. Ba điểm khác biệt bắt buộc với Xóm Nhỏ
1. **Nhân vật:** to hơn so với map (xem mục 6), tỷ lệ đầu thân riêng, có nét mặt riêng, trang phục mang chất Bắc Bộ.
2. **Nét và màu:** viền nâu ấm thay viền xám đen; bảng màu ngả đỏ ngói, vàng rơm, xanh lúa non, bớt xanh cỏ chói.
3. **Công trình biểu tượng:** lũy tre, đình làng, cổng làng, cầu đá, giếng làng (những thứ Xóm Nhỏ không có) phải là điểm nhấn nổi bật nhất trên map.

### 3.4. Đối thủ tham khảo: Xóm Nhỏ Tuổi Thơ / My Little Village (COROCHTI)
Chỉ tham khảo cảm giác và tinh thần. **Không sao chép bố cục, đồ vật, nhân vật cụ thể.**

| Học theo | Làm khác |
|---|---|
| Isometric 2D cozy, màu sáng ấm | **Nhân vật to hơn so với map** (họ để nhân vật rất nhỏ); nhân vật là trung tâm câu chuyện và là chỗ bán trang phục |
| Map rộng liền mạch, các khu nối bằng đường đất | **Dấu ấn Bắc Bộ rõ hơn**: lũy tre, cổng làng, đình làng, giếng, cầu ao (họ pha nhiều dừa, thúng chai) |
| Chi tiết thuần Việt dễ nhận: ghế nhựa đỏ, ô dù, xe máy, mái ngói, cây đa, đống rơm, trâu | **Dấu ấn riêng**: họa tiết tranh Đông Hồ ở UI, ánh sáng theo mùa và giờ |
| Map "sống": dân làng đi lại, trẻ con, chó, tàu chạy | Giữ, nhưng tiết chế để không rối khi zoom gần |
| Nhà cắt ngang thấy nội thất | Giữ cho khu "Nhà mình" (phục vụ trang trí) |

Phép thử: đặt ảnh store của hai game cạnh nhau, người xem phải phân biệt được ngay.

## 4. Bối cảnh: "làng chung, nền Bắc Bộ"
**Thành phần chính (Bắc Bộ, ~80%)**: lũy tre bao quanh làng, cổng làng, đình làng và sân đình, giếng làng, ao làng có cầu ao, mái ngói đỏ tường vôi vàng hoặc trắng, cánh đồng lúa có bờ và mương, đống rơm, cây đa, cây gạo, hàng cau, chuồng trâu, chuồng gà, giàn mướp, giàn bầu.

**Chi tiết toàn quốc được phép pha (~20%)**: ghế nhựa đỏ và ô dù quán cóc, xe máy, xe đạp cũ, nón lá, áo bà ba, quầy tạp hóa có mái tôn, sông có thuyền nan.

**Để dành cho map mở rộng sau** (không đưa vào làng Bắc Bộ): dừa, thúng chai, chợ nổi (miền Tây); nhà sàn, đồi cà phê (Tây Nguyên).

**Tránh tuyệt đối:**
- Kiến trúc kiểu Trung Quốc: mái cong vút, lồng đèn đỏ kiểu Trung, cổng tam quan kiểu Trung, cổ trang.
  - Ngoại lệ: **đình làng** được đầu đao cong nhẹ đúng kiểu đình Bắc Bộ. Nhà dân giữ mái thẳng.
- Cảnh quê nghèo khổ, tối, bẩn. Quê trong game là nơi người chơi muốn về.
- Chi tiết vụn không đọc được trên màn hình điện thoại.

## 5. Bảng màu và ánh sáng
| Vai trò | Màu gợi ý |
|---|---|
| Nền chính | Xanh lúa non, vàng rơm, nâu đất, đỏ ngói, trắng vôi, vàng tường |
| Nhấn | Hồng sen, xanh ngọc nước ao |
| UI | Nâu tre, be giấy dó, đỏ son (lấy từ tranh Đông Hồ) |
| Ánh sáng mặc định | Nắng chiều ấm, bóng đổ mềm về một hướng cố định |
| Biến thể theo mùa (sau) | Mùa gặt vàng, Tết hồng đào, Trung Thu tối có đèn lồng |

## 6. Nhân vật
- Tỷ lệ chibi khoảng 2,5–3 đầu. Ở mức zoom thường chơi, nhân vật cao khoảng 1/2–2/3 chiều cao cửa nhà.
- Nhân vật chính: chọn nam/nữ, 4 hướng đi, các trạng thái: đứng, đi, cuốc đất, tưới, thu hoạch, bưng đồ, cho gà ăn.
- Trang phục ghép bộ phận (đầu, tóc, áo, quần, giày, mũ) để bán trang phục mà không vẽ lại hoạt ảnh.
- NPC dân làng: bà cụ, ông cụ, trẻ con, cô bán hàng, chú xe ôm; dùng chung bộ khung xương với nhân vật chính.

## 7. Giao diện (UI)
- Khung và nút lấy chất liệu quê: tre, gỗ, giấy dó.
- Họa tiết tranh Đông Hồ (gà, lợn, hoa sen) dùng làm điểm nhấn ở khung, màn chờ, thẻ công thức, sự kiện Tết.
- Chữ to, rõ, hỗ trợ đầy đủ dấu tiếng Việt (kiểm tra font có đủ dấu chồng như "ổ", "ữ", "ặ").

## 8. Sản phẩm cần cho giai đoạn này
| # | Sản phẩm | Mục đích |
|---|---|---|
| 1 | Moodboard theo danh sách nguồn ở mục 3.2 | Thống nhất cảm giác |
| 2 | **Style frame** khu "Nhà mình" theo mốc X1-2, đã áp 3 điểm khác biệt ở mục 3.3 | Chốt phong cách |
| 3 | Bảng nhân vật chính 4 hướng, 2–3 bộ trang phục | Chốt tỷ lệ, cách ghép bộ phận |
| 4 | Lô asset đầu tiên (bảng dưới) | Chốt độ chi tiết, nét viền |
| 5 | Mock UI 1 màn hình chính | Chốt phong cách UI |

**Lô asset đầu tiên** (đủ để dựng khu "Nhà mình" và một góc làng):

| Nhóm | Asset | Ghi chú |
|---|---|---|
| Nhà | Nhà 3 gian mái ngói, **bản cắt lớp** thấy nội thất + bản kín | Bỏ tường trước và một bên tường, giữ nửa sau mái |
| Nội thất | Bàn thờ, chõng tre, bàn trà + đôn, tủ gỗ, radio, quạt nan | Nền gạch đỏ ô vuông |
| Sân vườn | Sân gạch phơi lúa, giếng tròn, luống rau (3 loại cây), chuồng gà mái rơm, giàn mướp, đống rơm | Mỗi luống rau có 3 trạng thái: mới gieo, đang lớn, chín |
| Ranh giới | Hàng rào cây cắt tỉa (thẳng, góc, cổng), bụi tre, lũy tre | Ghép theo ô để dựng map |
| Mặt đất | Ô cỏ, ô đường cát (thẳng, cong, ngã ba, ngã tư), ô ruộng lúa có bờ | Tile ghép liền mạch |
| Công trình biểu tượng | Cổng làng, giếng làng, cây đa | Điểm nhấn khác biệt với Xóm Nhỏ |
| Nhân vật | Nhân vật chính (nữ) 4 hướng, 2 NPC (bà cụ, trẻ con) | Ghép bộ phận để thay trang phục |
| Vật nuôi | Gà, chó, trâu | Mỗi con 2 hướng |

## 9. Cảnh mẫu cho style frame: khu "Nhà mình"
Một khung hình điện thoại ngang (16:9), zoom ở mức chơi thường:
- Nhà mái ngói đỏ cắt ngang thấy nội thất (chõng tre, radio, quạt nan, bàn thờ đơn giản).
- Sân gạch đỏ phơi lúa, giếng nước, chuồng gà, 3–4 luống rau, giàn mướp.
- Một góc ao có cầu ao, một phần lũy tre ở mép khung.
- Nhân vật chính đang tưới rau, một con gà, một con chó.
- Nắng chiều ấm.

## 10. Câu hỏi còn mở
- Tên game chính thức.
- Nhân vật chính có cố định giới tính hay cho chọn.
- Có dùng tranh Đông Hồ làm điểm nhấn không (quyết định sau khi xem style frame).

## 11. Ảnh AI đã sinh (chỉ dùng nội bộ, không phải asset)
Sinh bằng fal.ai, script và prompt ở `tools/concept-gen/` (có thể sinh lại từ các file prompt). Ảnh còn giữ trong `docs/concepts/que-len-pho/`:
- `lang-xomnho-ref/X1-bacbo-2.png`: **mốc phong cách đã chốt** (kèm prompt trong `X1-bacbo.meta.json`). Sinh từ ảnh Xóm Nhỏ, nên tuyệt đối không dùng làm asset.
- `_ref-noi-bo/`: ảnh đối thủ dùng làm tham khảo nội bộ.

Các ảnh draft của những vòng thử trước đã xóa ngày 2026-10-22.
- `lang-quy-hoach/lang-overview-chot.png`: **overview màn Làng (final)**.
- `man-nha/BAT-DAU-1.png`, `man-nha/PHAT-TRIEN-2.png` (bản chính), `man-nha/PHAT-TRIEN-1.png`: **màn Nhà mình kiểu Hay Day (final)**, lúc mới vào game và lúc đã phát triển.
