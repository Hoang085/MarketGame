# Kịch bản demo chơi được: "Hành Trình Sắc Màu"
Phiên bản: v0.4, 2026-10-27 | Engine: Unity | Style: `style-frame-v2/SF2-full-belt-2.png` | Quy mô: **2 màn**

## 1. Mục tiêu của demo
- Trả lời một câu hỏi: **lõi "bàn trượt hứng cát + đơn hàng đồ thủy tinh" có vui và dễ hiểu không?**
- Người ngoài đội cầm máy, không cần ai giải thích, chơi hết 2 màn trong khoảng 4–6 phút.
- Màn 1 dạy luật. Màn 2 là câu đố khó thật: bàn chật, khay nhiều hình dạng, cát trong bể dịch chuyển, đơn hàng ép phải tính thứ tự.

Không có trong demo: bản đồ hành trình, cửa hàng, IAP, quảng cáo, vật phẩm hỗ trợ, đăng nhập.

## 2. Luật dùng trong demo (luật tạm, chỉnh sau khi chơi thử)
### Bể cát
- Một **bể lớn** nằm trên bàn, rộng bằng hàng trên cùng của bàn. Trong bể là các dải cát nhiều màu xếp theo cột.
- Cát là hạt mô phỏng (kiểu cellular automaton): khi cát ở đáy chảy đi, hạt phía trên tụt xuống và trượt chéo sang bên, nên **màu nằm ngay trên mỗi ô thay đổi dần** trong màn.
- Thiết kế bể (số màu, độ rộng dải, có vách ngăn hay không) là tham số của từng màn. Sau này có màn dùng buồng riêng từng màu.

### Khay
| Mục | Luật |
|---|---|
| Hình dạng | Nhiều hình: 1 ô, thẳng 2–3 ô, vuông 2×2, chữ L 3 ô... |
| Sức chứa | **4 phần mỗi ô** (khay chữ L 3 ô chứa 12, khay vuông 2×2 chứa 16) |
| Khay màu | Chỉ hứng cát đúng màu của nó |
| Khay trắng | Hứng màu đầu tiên rơi vào, rồi khóa màu đó |
| Hứng cát | Khay có ô nằm ở hàng trên cùng, ngay dưới bể, thì cát đúng màu phía trên chảy vào. Cát khác màu đứng yên |
| Khóa trục | Khay có mũi tên chỉ trượt theo một trục (ngang hoặc dọc) |
| Khay đầy | Rời bàn, bay vào chỗ đổ, để lại ô trống mở đường cho khay khác |
| Nhãn | Mỗi khay hiện % đầy |

### Chỗ đổ, đơn hàng, thắng thua
| Mục | Luật |
|---|---|
| Chỗ đổ | 5 chỗ. Khay đầy tự bay vào chỗ trống bên trái nhất |
| Đổ cát | **Lấp theo hàng** (chốt 2026-10-27): lọ lấp từng hàng ô cát từ đáy lên. Khay đổ màu nào thì chỉ lấp các ô màu đó của hàng đang lấp; hàng chưa đủ hết các màu thì chưa lên hàng trên, cát còn lại nằm trong khay ở chỗ đổ. Lấp đủ hàng thì cát chảy tiếp lên hàng trên. Khay ở chỗ đổ tự bay lên đổ khi hàng đang lấp cần màu của nó, nên ở mép giữa hai màu các khay thay nhau đổ. Mọi lọ (cả món đặc biệt) đều theo luật này |
| Món đồ là tranh | Mỗi lọ chứa một bức tranh cát chia vùng màu (ảnh pixel nhỏ, khoảng 32×48 ô). Đổ màu nào thì cát chảy vào vùng màu đó (phần có chỗ tựa), tranh hiện dần từ dưới lên. Tranh được lọc bỏ các đốm màu nhỏ (< 12 ô) để không phải đổ vụn. Lượng cần mỗi màu = số ô vùng đó, làm tròn theo bội số 4 |
| Băng chuyền | 3 món ở khu giao hàng. Món đủ cát thì rời đi, băng nhích một nấc, món mới vào |
| Khối băng | Chắn đường, trượt được. Mỗi lượt trượt bất kỳ thì số giảm 1, về 0 thì tan |
| Thắng | Hoàn thành đủ số món của màn |
| Thua | 5 chỗ đổ đều có khay dư mà 3 món đang chờ không cần màu nào trong đó, hoặc bàn hết nước đi. Hiện nút chơi lại |
| Đồng hồ | Không có |

Đơn hàng luôn là bội số của 4. **Màn được tính ngược từ tranh** (chốt 2026-10-27): chọn các lọ và tranh của màn → cộng số cát mỗi màu các lọ cần → đó chính là lượng cát mỗi màu trong bể → chia lượng đó vào các khay màu (+ khay trắng). Bảng màu của màn vì vậy là các màu có trong tranh của màn đó, không cố định đỏ/xanh/vàng/lá.

## 3. Luồng chơi
1. **Mở game (3 giây):** logo, băng chuyền chở 3 chai cát chạy ngang. Chạm để chơi.
2. **Màn 1** → màn thắng (các chai vừa làm xếp lên kệ, nút "Tiếp").
3. **Màn 2** → nếu thua: nút chơi lại; nếu thắng: món đặc biệt cuối cùng hiện thành tranh cát biển Mũi Né, camera phóng to, hạt lấp lánh.
4. **Kết thúc:** dòng "Cảm ơn đã chơi thử" và nút chơi lại từ đầu.

## 4. Kịch bản 2 màn
Màu cát theo tranh của từng màn (xem bảng mỗi màn). "4 vàng" nghĩa là cần 4 phần cát vàng.

### Màn 1: "Hứng cát" (dạy luật, khoảng 1 phút, không thể thua)
- **Bàn:** chữ nhật 4 cột × 4 hàng, thoáng.
- **Bể:** 2 dải, nửa trái vàng cát (16 phần), nửa phải xanh ngọc (16 phần).
- **Khay (8 ô):** vàng 1 ô, vàng 2 ô, vàng 1 ô (tổng 16); xanh ngọc 1 ô, xanh ngọc 1 ô, xanh ngọc 2 ô (tổng 16). Không có khay trắng, không khóa trục.
- **Lọ (4 tranh, mỗi tranh 4 vàng + 4 xanh ngọc):**

| # | Lọ | Tranh |
|---|---|---|
| 1 | Bình cầu | Bãi cát: bãi vàng dưới, trời xanh trên |
| 2 | Hồ lô | Đồi cát: hai đồi vàng, trời xanh |
| 3 | Lọ thẳng | Sóng biển: biển xanh gợn sóng, trời vàng nắng |
| 4 | Lọ bầu dục | Đảo nhỏ: đảo vàng giữa biển xanh |

- **Diễn biến:**
  1. Bàn tay chỉ kéo khay vàng 1 ô lên hàng trên, dưới dải vàng. Cát chảy, khay đầy, bay lên đổ vào lọ 1: nửa dưới tranh "Bãi cát" hiện ra.
  2. Bàn tay chỉ khay xanh ngọc 1 ô một lần nữa. Lọ 1 hiện đủ tranh và rời đi.
  3. Các khay còn lại người chơi tự làm. Người chơi thấy cát trong bể tụt dần ở chỗ vừa hứng.

### Màn 2: "Đồng hồ cát" (câu đố khó, khoảng 3–5 phút, có thể thua)
**Bàn:** hình đồng hồ cát. Hàng trên và hàng dưới rộng 6 ô, 4 hàng giữa thắt lại còn 4 ô ở giữa. Tổng 28 ô, 6 ô trống lúc bắt đầu, nên khay xếp sát nhau và phải dọn theo thứ tự. Bố cục chi tiết xem [demo-2-man-mockup.html](demo-2-man-mockup.html).

**Lọ (6 tranh Mũi Né, 4 màu: xanh ngọc, đỏ, vàng cát, cam):**
| # | Lọ | Tranh | Cần |
|---|---|---|---|
| 1 | Bình cầu | Đồi cát đỏ: đồi vàng, trời cam, mặt trời đỏ | 4 vàng + 4 cam + 4 đỏ |
| 2 | Lọ bầu dục | Thuyền đỏ: biển xanh, thuyền đỏ, trời cam | 4 ngọc + 4 cam + 4 đỏ |
| 3 | Lọ thẳng ★ | Hoàng hôn biển: biển, mặt trời lặn, trời | **Từ đáy lên:** 8 ngọc → 4 vàng → 4 cam |
| 4 | Bình cầu | Bãi biển: bãi vàng, biển xanh, trời cam | 4 vàng + 4 ngọc + 4 cam |
| 5 | Lọ thẳng | Làng chài: bãi vàng, nhà mái đỏ, trời cam | 4 vàng + 8 cam + 4 đỏ |
| 6 | Hồ lô ★ | Mũi Né: biển, thuyền đỏ, đồi cát và mặt trời, trời | **Từ đáy lên:** 4 ngọc → 4 đỏ → 8 vàng → 4 cam |

Tổng: xanh ngọc 20, đỏ 16, vàng 24, cam 28 = 88 phần. Tranh là ảnh gen AI (`tranh/`), quy về 4 màu game bằng `tranh/build-tranh.mjs` thành lưới màu `tranh-map.js`. Lượng mỗi màu tính từ số ô của vùng đó trong tranh (`tranh-lo.js`), làm tròn theo bội số 4, mỗi màu tối thiểu 4.

**Bể:** 4 dải từ trái sang: xanh ngọc | đỏ (hẹp) | vàng | cam (rộng nhất). Lượng mỗi dải đúng bằng tổng ở trên.

**Khay (10 khay, 22 ô = 88 phần):**
| # | Màu | Hình | Sức chứa | Ghi chú |
|---|---|---|---|---|
| 1 | Cam | Ngang 2 ô | 8 | Khóa trục ngang, nằm ở hàng trên, phải sang phải tới dải cam |
| 2 | Vàng | Dọc 2 ô | 8 | Chắn đường khay 1 |
| 3 | Đỏ | Chữ L 3 ô | 12 | |
| 4 | Vàng | Chữ L 3 ô | 12 | |
| 5 | Cam | Vuông 2×2 | 16 | Khay to, dễ dư cát |
| 6 | Xanh ngọc | Dọc 2 ô | 8 | |
| 7 | Xanh ngọc | Dọc 3 ô | 12 | |
| 8 | Vàng | 1 ô | 4 | Hàng dưới |
| 9 | Cam | 1 ô | 4 | Hàng dưới |
| 10 | Trắng | 1 ô | 4 | Dành để hứng 4 đỏ còn thiếu; dải đỏ hẹp nên khó đưa tới |

Theo màu: xanh ngọc 20, đỏ 12 + 4 (khay trắng), vàng 24, cam 28. Khớp với bể và lọ.

**Cái khó nằm ở đâu:**
- **Bàn chật:** khay cam khóa trục chắn hàng trên; phải đưa vài khay ra khỏi bàn mới có đường cho khay sâu bên dưới.
- **Cát dịch chuyển:** hứng nhiều ở một bên thì màu dưới bể đổi. Dải đỏ hẹp nên dễ bị vàng hoặc ngọc trượt lấn.
- **Khay dư:** khay cam 2×2 chứa 16, mà mỗi lọ chỉ cần 4–8 cam. Phần dư nằm ở chỗ đổ, hứng thêm khay to sai lúc là đầy 5 chỗ đổ.
- **Lấp theo hàng:** hàng ở mép giữa hai màu cần cả hai màu có mặt ở chỗ đổ cùng lúc. Người chơi phải giữ đủ các màu đó trong 5 chỗ đổ, nếu không lọ đứng chờ. Mô phỏng: mỗi tranh cần 8–29 lần khay bay lên đổ (tự động); solver cần tính theo hàng.
- **Khay trắng:** phải để dành cho màu đỏ; dùng sai màu thì thiếu đỏ cho lọ cuối.

Bảng khay và vị trí là **nháp**. Phải dựng vào solver để kiểm tra: màn giải được không cần vật phẩm, có ít nhất 1–2 cách thua dễ mắc, lời giải ngắn nhất khoảng 15–25 nước.


## 5. Cảm giác (juice) cần có trong demo
Ưu tiên theo thứ tự:
1. **Cát chảy từ bể vào khay:** hạt pixel rơi, bể tụt và trượt chéo, mức cát trong khay dâng mượt, nhãn % chạy số.
2. **Khay bay lên và nghiêng đổ:** khay rời bàn, bay theo đường cong lên trên món, nghiêng, cát chảy vào bình và dâng thành lớp.
3. **Món hoàn thành:** bình lóe sáng, nảy nhẹ, băng chuyền nhích.
4. **Trượt khay:** khay bám ô lưới, nảy nhỏ khi dừng, rung nhẹ khi đụng vật chắn hoặc trượt sai trục.
5. **Khối băng:** số đếm lùi có hiệu ứng nứt, tan thành hạt.
6. **Âm thanh:** tiếng cát rơi đều, dễ chịu; tiếng "pop" khi món xong; nhạc nền nhẹ.

## 6. Đo gì khi cho người chơi thử
- Tự động ghi: thời gian mỗi màn, số nước đi, số lần chơi lại màn 2.
- Quan sát trực tiếp: người chơi có hiểu vì sao khay không hứng hoặc không đổ không; có để ý màu trong bể đang đổi không.
- Hỏi trực tiếp sau khi chơi: (1) Phần nào thích nhất? (2) Lúc nào thấy rối? (3) Có muốn chơi tiếp không, điểm 1–5?
- Ngưỡng đạt: ít nhất 60% người chơi qua màn 2 trong 3 lần thử mà không cần giúp, điểm "muốn chơi tiếp" trung bình từ 4 trở lên.

## 7. Bản cắt cho playable ad (nếu chạy quảng cáo test)
Dùng màn 1 rút gọn, 30–40 giây:
1. **0–3 giây (móc câu):** cát từ bể chảy vào khay, khay bay lên đổ vào chai, chai hiện tranh. Người chơi chưa cần làm gì.
2. **3–25 giây:** bàn tay chỉ khay đầu tiên. Bể 3 màu, 3 món, bàn hơi chật, khoảng 4–5 nước đi.
3. **25–35 giây:** còn một món, 4 chỗ đổ đã có khay dư. Tạo cảm giác "suýt nữa".
4. **Cuối:** dù thắng hay kẹt, đều hiện nút tải game.
Không làm kiểu quảng cáo lừa (cảnh trong quảng cáo không có trong game).

## 8. Thứ tự làm
1. Logic lõi C# thuần: bàn hình bất kỳ, khay nhiều hình + khóa trục, **mô phỏng cát trong bể** (tất định để solver chạy lại được), chỗ đổ, đơn hàng. Định dạng màn JSON, solver, unit test.
2. Dựng 2 màn vào solver, chỉnh bảng khay và đơn hàng màn 2 đến khi đạt tiêu chí ở mục 4.
3. Unity greybox: khối hộp thay asset, đủ luật, chơi được 2 màn.
4. Chơi thử nội bộ, chỉnh.
5. Thay asset 2.5D (model dựng bằng script Blender) + juice ở mục 5.
6. Cho 5–10 người ngoài chơi, đo theo mục 6.

**Rủi ro kỹ thuật lớn nhất:** mô phỏng cát trong bể. Nó vừa phải đẹp (hạt trượt tự nhiên), vừa phải tất định và đủ nhanh để solver thử hàng nghìn nước đi. Hướng xử lý: dùng một lưới hạt thô cho logic và solver, phần hiển thị trong Unity vẽ mịn hơn dựa trên lưới đó.
