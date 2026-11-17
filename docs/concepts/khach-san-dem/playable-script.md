# Kịch bản playable ad: Khách sạn đêm (tên tạm)
Phiên bản: v1, 2026-11-07 | Độ dài: 50–60 giây (2 màn: ngày → đêm) | Màn dọc 9:16 (có bố cục cho màn ngang)

> Dựa trên `idea-note.md` cùng thư mục và báo cáo `../../market/monster-hotel-merge2-2026-11-07.md`. Mục tiêu của bản test là trả lời: **móc "bị lừa mua khách sạn + khách đêm là quái vật" có kéo CPI/CTR tốt hơn Bloom Corner không.** Playable phải dùng đúng cơ chế game thật (bàn ghép, máy sinh đồ, ô khóa, order của khách), không làm mini-game giả.

Mục tiêu cảm xúc: **bất công → tự tay vực khách sạn dậy → sững sờ khi khách đêm gõ cửa → tò mò "ai đã lừa mình"**. Quái vật phải xuất hiện **trước giây 30**, vì ads hứa hẹn quái vật (bài học Moonlit Town bị chê "game không giống quảng cáo").

Chữ trong quảng cáo là tiếng Anh, ghi chú cho đội bằng tiếng Việt. Bàn ghép, tay hướng dẫn, HUD và cách trình bày hội thoại tái dùng từ playable Keepsake/Bloom Corner (`../keepsake-lane/playable/`), chỉ đổi art và luồng cảnh.

**Nhân vật (tên tạm, chưa kiểm tra trùng):**
- **Nora** – nữ chính, ~30 tuổi, từng có tiệm bánh, bị lừa mất hết. Áo len, tóc buộc vội, vali cũ.
- **Victor Sterling** (đổi từ Victor Crane ngày 12/11/2026, xem [check-trung-2026-11-12.md](check-trung-2026-11-12.md)) – môi giới bất động sản đã bán khách sạn cho Nora. Trong playable chỉ xuất hiện qua **danh thiếp và tin nhắn**, không có mặt.
- **Lord Aldric** – khách đêm đầu tiên, ma cà rồng lịch lãm (áo choàng dài, tóc bạc chải ngược, mắt hổ phách). **Người lớn, đẹp, không đáng sợ kiểu kinh dị, không mũm mĩm hoạt hình.**

**Tên game (tạm, chốt 12/11/2026):** *The Midnight Deed: Merge & Mystery*. "Deed" là giấy chủ quyền, gắn với cú lừa của Victor; logo end card dùng tên này.

**Khách sạn:** *The Hollow Lantern Hotel* (tên tạm; không dùng làm tên game vì Google Play đã có app "Hollow Lantern"). Kiến trúc Victorian bỏ hoang, sảnh có cầu thang gỗ, đèn chùm đổ.

## 1. Tóm tắt nhịp
| Thời gian | Nhịp | Người xem làm gì | Mục đích |
|---|---|---|---|
| 0–4s | **Hook**: Nora kéo vali đến khách sạn đổ nát; điện thoại hiện tin nhắn của Victor: *"No refunds. Good luck."* | Xem, chạm để bắt đầu | Bất công ngay giây đầu, người xem đứng về phía Nora |
| 4–9s | **Màn 1 (ngày) – merge 1** có tay hướng dẫn | Kéo mẩu nến chồng lên mẩu nến | Dạy cơ chế trong 1 thao tác |
| 9–20s | **Màn 1 – merge 2–4** tự làm | Kéo tiếp, có thể chạm hộp đồ cũ | Sảnh sáng dần, trời ngả tối dần |
| 20–24s | **Chuyển đêm**: đèn chùm sáng lên, đồng hồ điểm 12 tiếng | Xem | Thỏa mãn thị giác + chuyển không khí |
| 24–30s | **Gõ cửa lúc nửa đêm**: chọn *OPEN* hoặc *HIDE* | Chạm 1 nút | Tương tác lựa chọn; lộ quái vật đầu tiên |
| 30–42s | **Màn 2 (đêm) – merge 5–8**: order phục vụ phòng của Lord Aldric | Kéo, có thể chạm xe đẩy | Lặp cơ chế với chuỗi mới, cho thấy "khách đêm" là core loop |
| 42–50s | **Hé lộ**: Aldric trả tiền bằng đồng vàng cổ + đưa ra **danh thiếp của Victor**: *"He sold this hotel to us too."* | Xem | Twist nối mạch "bị lừa" với "quái vật" |
| 50–58s | **End card**: câu hỏi bỏ ngỏ + nút cài | Bấm cài | Chuyển đổi |

## 2. Kịch bản chi tiết

### Cảnh 1: Hook (0–4s)
- **Hình:** mặt tiền khách sạn buổi chiều muộn, cửa sổ vỡ, biển hiệu *THE HOLLOW LANTERN* mất hai chữ, dây leo phủ cổng. Biển **"SOLD"** dán chéo trên biển *"FOR SALE"*.
- Nora kéo vali đứng trước cổng. **Điện thoại bật lên** (khung tin nhắn ở góc trên):
  - *Victor Sterling:* **"No refunds. Good luck with your 'hotel'."**
- **Bong bóng thoại (Nora, mặt thất thần → cắn môi quyết tâm):** *"It's all I have left."*
- Chạm bất kỳ đâu thì bàn ghép trượt lên, nền chuyển vào **sảnh bên trong** (bản đổ nát: bụi, mạng nhện, đèn chùm rơi nghiêng, lò sưởi tắt).
- **Âm thanh:** gió, cổng sắt kẽo kẹt, piano trầm 1 nốt.
- **Lưu ý:** chữ "No refunds" là câu nhớ nhất của hook, cỡ lớn, đọc được khi tắt tiếng.

### Cảnh 2: Màn 1 (ngày) – merge 1 có hướng dẫn (4–9s)
- **Bàn ghép 7×7 đặt sẵn đồ** (xem mục 3), chiếm khoảng 58% màn hình (từ 42% chiều cao trở xuống). Bàn là lớp phủ trượt lên trên nền sảnh vẽ đầy đủ, che phần dưới nền; khi bàn ẩn (cảnh 4, 7) thì thấy lại toàn bộ sảnh. Mặt bàn gỗ sẫm, ô khay màu kem cũ. Góc bàn là **hộp đồ cũ bám bụi** (máy sinh đồ, sinh mẩu nến cấp 1).
- **Thẻ order** trên bàn: chân dung nhỏ của **Nora** + icon **đèn chùm** (cấp 6), chữ *"Let there be light!"*
- **Tay hướng dẫn** hiện sau 2 giây, kéo **cây nến** (cấp 2) chồng lên cây nến thứ hai.
- **Chữ:** *"Merge to restore!"*
- Kết quả: **đèn dầu** (cấp 3), có tia lửa ấm bật ra.

### Cảnh 3: Màn 1 – merge 2–4 tự làm (9–20s)
- Cặp ghép được phát sáng nhẹ; tay hướng dẫn chỉ hiện lại nếu người xem đứng yên 3 giây.
- **Chuỗi ánh sáng (LGT):**
  1. đèn dầu + đèn dầu → **đèn bão** (cấp 4)
  2. đèn bão + đèn bão → **đèn tường đồng** (cấp 5)
  3. đèn tường + đèn tường → **đèn chùm pha lê** (cấp 6, viền vàng)
- Thanh **"Restoring... 25% → 50% → 75% → 100%"** ở đầu màn hình. **Nền sảnh đổi dần từ đổ nát sang ấm cúng**: 25% sạch bụi, 50% lò sưởi cháy, 75% thảm và rèm mới, 100% đèn chùm treo lại. **Đồng thời ánh sáng ngoài cửa sổ chuyển từ chiều sang tím đêm.** Đây là cảnh "trước/sau" để cắt làm video quảng cáo.
- Ghép cạnh **ô khóa** (tấm vải trắng phủ đồ cũ) thì vải bay lên, lộ món bên dưới.
- Thiếu đồ thì chạm **hộp đồ cũ** để sinh mẩu nến (đường lui, không bắt buộc).

### Cảnh 4: Chuyển đêm (20–24s)
- Bàn ghép ẩn. Đèn chùm bay lên trần, bừng sáng; sảnh hoàn chỉnh lần đầu.
- Nora thả người xuống ghế sofa: *"Not bad... for a scam."*
- **Đồng hồ quả lắc** trong sảnh điểm **12 tiếng**. Ánh sáng hơi tối lại, ngọn lửa đèn chùm lay nhẹ.
- **Âm thanh:** tiếng đồng hồ, nhạc chuyển sang dây trầm + celesta bí ẩn (không phải nhạc kinh dị).

### Cảnh 5: Gõ cửa lúc nửa đêm (24–30s)
- **Cốc. Cốc. Cốc.** Chữ lớn rung theo tiếng gõ.
- Nora (bất ngờ): *"Who checks in at midnight?"*
- Hai nút lớn ở giữa màn hình:
  - 🚪 **OPEN**
  - 🙈 **HIDE**
- **OPEN:** cửa mở, gió thổi tắt nửa số nến, **Lord Aldric** cúi chào trên ngưỡng cửa: *"A room, madam. For… a long stay."* Nora nhìn xuống: **không có bóng của ông trên sàn**.
- **HIDE:** Nora núp sau quầy, cửa **tự mở**; Aldric đã đứng ở quầy lễ tân, gõ chuông: *"No need to hide. I only bite… my dinner."* (đùa, giọng lịch sự). Sau đó chạy tiếp như nhánh OPEN.
- Không chạm sau 4 giây thì tự chọn OPEN.
- **Lưu ý:** đây là khoảnh khắc lộ quái vật, **phải đẹp và lịch lãm**, không jumpscare, không máu. Rating mục tiêu 12+.

### Cảnh 6: Màn 2 (đêm) – merge 5–8 (30–42s)
- Bàn ghép trở lại, **bản đêm**: cùng bàn, ánh nến xanh tím, item phát sáng nhẹ.
- **Thẻ order:** chân dung Aldric + icon **xe đẩy phục vụ phòng** (cấp 6), chữ *"Room 13. Dinner at once."*
- **Máy sinh đồ:** **xe đẩy bạc nhỏ** (sinh tách trà cấp 1).
- **Chuỗi phục vụ phòng (SRV):**
  1. tách trà + tách trà → **ấm trà sứ** (cấp 3)
  2. ấm trà + ấm trà → **khay trà bạc** (cấp 4)
  3. khay + khay → **nắp chuông bạc (cloche)** (cấp 5)
  4. cloche + cloche → **xe đẩy phục vụ phòng** có hoa hồng đỏ và ly rượu vang (cấp 6)
- Không còn tay hướng dẫn, chỉ phát sáng gợi ý sau 3 giây. Thanh tiến độ: *"Serving... 25% → 100%"*.
- Vài món **chuỗi ánh sáng** còn lại trên bàn làm trang trí, cho thấy hai chuỗi dùng chung một board.

### Cảnh 7: Hé lộ (42–50s)
- Bàn ghép ẩn. Xe đẩy lăn tới cửa phòng 13. Aldric nâng ly, mỉm cười hài lòng: *"Finally. Proper service."*
- Ông đặt lên khay **một đồng vàng cổ** (tiền thuê) và **một tấm danh thiếp** nhàu: **VICTOR STERLING – Real Estate**.
- **Aldric:** *"Your agent sold this hotel to us too… in 1923."*
- Zoom vào danh thiếp: **cùng tên, cùng chữ ký, nhưng giấy đã ố vàng 100 năm.**
- **Nora (sững người):** *"...Who ARE you, Victor?"*
- **Âm thanh:** nhạc dừng, một nốt piano thấp + tiếng đồng xu vàng xoay trên khay.
- **Lưu ý:** chữ trên màn hình tối đa 6 từ mỗi dòng, cỡ lớn.

### Cảnh 8: End card (50–58s)
- Nền: mặt tiền khách sạn **ban đêm**, tất cả cửa sổ sáng đèn, bóng nhiều vị khách lạ thấp thoáng sau rèm (hồn ma quý bà, người sói đội mũ, phù thủy). Danh thiếp Victor gài ở góc.
- Logo game.
- **Chữ lớn**, 2 phương án để test:
  - **E1 (bí ẩn kẻ lừa đảo):** *"Who sold you a monster hotel?"*
  - **E2 (khách đêm):** *"Your guests aren't human. Keep them happy."*
- Nút **PLAY NOW** nhấp nháy nhẹ. Chạm bất kỳ đâu trên end card đều mở store.

## 3. Bố trí bàn ghép ban đầu (7×7)

> Đổi từ 5×4 sang 7×7 ngày 09/11/2026 theo yêu cầu người dùng: bàn rộng hơn, nhiều chỗ ghép hơn, giống Travel Town và Hotel Legacy; dùng lại được code bàn 7×7 của demo clone Travel Town. Chuỗi chính vẫn chỉ cần 4 lần merge như bảng dưới. 49 ô nên phần còn lại phủ kín bằng **ô khóa vải trắng (khoảng 12–15 ô)** và **item trang trí ghép được ở cấp thấp (khoảng 10–12 món)** để bàn trông đầy và có nhiều cặp phát sáng, còn khoảng 8–10 ô trống để kéo thả.
Mỗi màn đặt sẵn từ cấp 2 để chỉ cần đúng 4 lần merge là ra món cấp 6.

**Màn 1 – ngày (chuỗi LGT):**
| Món | Cấp | Số lượng |
|---|---|---|
| Cây nến | 2 | 2 |
| Đèn dầu | 3 | 1 |
| Đèn bão | 4 | 1 |
| Đèn tường đồng | 5 | 1 |
| Hộp đồ cũ (máy sinh đồ) | – | 1 |
| Mẩu nến (trang trí, ghép được) | 1 | 2 |
| Vải trắng phủ đồ (ô khóa) | – | 3–4, có 2 ô cạnh chuỗi đèn để người xem thấy cơ chế sớm |

**Màn 2 – đêm (chuỗi SRV):**
| Món | Cấp | Số lượng |
|---|---|---|
| Tách trà | 2 | 2 |
| Ấm trà sứ | 3 | 1 |
| Khay trà bạc | 4 | 1 |
| Nắp chuông bạc | 5 | 1 |
| Xe đẩy bạc nhỏ (máy sinh đồ) | – | 1 |
| Đèn còn lại từ màn 1 (trang trí) | 3–5 | 2–3 |
| Vải trắng phủ đồ (ô khóa) | – | 2 |

Chuỗi mỗi màn: 2+2 → 3 (thành 2) → 4 (thành 2) → 5 (thành 2) → 6. Các ô còn lại để trống.

## 4. Asset cần vẽ
Concept này chưa có art. Toàn bộ asset dưới đây phải dùng lại được trong game.

| Asset | Ghi chú | Dùng lại trong game |
|---|---|---|
| BG-exterior-dusk | Mặt tiền đổ nát, biển SOLD/FOR SALE | Có (mở đầu chương 1) |
| BG-lobby-ruined / BG-lobby-restored | Cùng bố cục, khớp từng vị trí để chuyển dần | Có (khu vực đầu tiên) |
| Lớp ánh sáng cửa sổ: chiều → tím đêm | Overlay, không vẽ lại nền | Có (chu kỳ ngày/đêm) |
| BG-exterior-night (end card) | Mọi cửa sổ sáng, bóng khách sau rèm | Có (màn hình tải) |
| CH-nora: thất thần, quyết tâm, bất ngờ, sững người | Nửa người, cùng gương mặt | Có |
| CH-aldric: cúi chào, nâng ly, mỉm cười | Lịch lãm, người lớn; **không** giống Dracula của Hotel Transylvania | Có |
| Bóng khách đêm: hồn ma quý bà 1920s, người sói đội mũ, phù thủy | Chỉ silhouette cho end card | Có (giới thiệu khách sau) |
| Icon chuỗi LGT (6 cấp) và SRV (6 cấp) | Cùng phong cách icon tròn, bản đêm có viền phát sáng | Có |
| Máy sinh đồ: hộp đồ cũ, xe đẩy bạc nhỏ | | Có |
| Ô khóa vải trắng + hiệu ứng vải bay | | Có |
| Điện thoại + khung tin nhắn Victor | UI đơn giản | Có (kênh truyện) |
| Danh thiếp Victor (bản mới, bản ố 1923), đồng vàng cổ | Cận cảnh | Có (album manh mối) |
| Đồng hồ quả lắc sảnh | Có kim chạy tới 12 | Có |

## 5. Biến thể để test A/B
Giữ nguyên bàn ghép và cơ chế, chỉ đổi phần truyện:

| Biến thể | Hook | Hé lộ | End card |
|---|---|---|---|
| **S (bị lừa + quái vật, chính)** | Tin nhắn "No refunds" | Danh thiếp Victor 1923 | E1 *"Who sold you a monster hotel?"* |
| **M (chỉ quái vật, không bị lừa)** | Nora thừa kế khách sạn của bà, không có Victor | Aldric đưa chìa khóa phòng 13 có tên bà | E2 *"Your guests aren't human. Keep them happy."* |
| **R (nhấn romance)** | Như S | Aldric trẻ hơn, điển trai; cuối cảnh 7 ông hôn tay Nora | *"Her first guest wasn't human. Her heart didn't care."* |

Chạy **S và M** trước: cùng gameplay, chỉ khác lớp "bị lừa", trả lời câu hỏi "xung đột bị lừa có kéo hơn không". So thêm với playable Bloom Corner đang chạy để biết theme siêu nhiên có thắng không. R chạy thêm nếu đủ ngân sách.

## 6. Thông số kỹ thuật
Giống playable Keepsake/Bloom Corner: HTML5 một file nhúng asset, MRAID 2.0, mục tiêu dưới 2MB, dọc là chính, tải dưới 3 giây trên 4G, hiểu được khi tắt tiếng. Tái dùng code bàn ghép, kéo thả, ô khóa, FX, âm thanh, màn chờ tải; thêm:
- Overlay ánh sáng ngày → đêm chạy theo thanh tiến độ.
- Màn chọn 2 nút OPEN/HIDE (giống màn chọn outfit của Bloom Corner).
- Rung chữ theo tiếng gõ cửa.

**Âm thanh mới:** gió + cổng sắt, đồng hồ điểm 12, gõ cửa 3 tiếng, gió thổi tắt nến, đồng xu vàng xoay, tiếng ly chạm. Nhạc nền: piano trầm (ngày) → dây + celesta bí ẩn (đêm). **Không** dùng nhạc kinh dị hay tiếng hét.

**Sự kiện cần đo:**
`load` → `ready` → `first_interaction` → `merge_1` … `merge_4` → `night_seen` → `door_open` / `door_hide` / `door_auto` → `monster_seen` → `level2_start` → `merge_5` … `merge_8` → `reveal_seen` → `endcard_seen` (kèm E1/E2) → `cta_click`

Tỷ lệ `door_open` so với `door_hide` cho biết người xem thích hướng tò mò hay hồi hộp. Nếu rơi nhiều giữa `monster_seen` và `merge_8`, cân nhắc bản 1 màn: màn ngày → gõ cửa → hé lộ danh thiếp ngay.

## 7. Rủi ro cần biết
- **Lệch tệp trẻ em:** nếu Aldric hay khách đêm trông dễ thương kiểu hoạt hình, creative sẽ hút trẻ em. Duyệt art với tiêu chí "trông như nhân vật phim tình cảm bí ẩn, không như phim hoạt hình gia đình".
- **IP:** không dùng chữ "Transylvania", không làm ông bố ma cà rồng chủ khách sạn, không vẽ Frankenstein kiểu Universal. Tên *Hollow Lantern*, *Victor Sterling*, *Aldric* đã kiểm tra trùng sơ bộ ngày 12/11 (xem check-trung-2026-11-12.md), cần tra nhãn hiệu trực tiếp trước khi chạy thật.
- **Nếu game thật không cho gặp quái vật trong 10 phút đầu** thì ads bị coi là lừa: chương 1 của game phải có cảnh gõ cửa lúc nửa đêm y như playable.
- **Mùa vụ:** nếu chạy quanh Halloween, CTR có thể cao giả tạo. Nên test ngoài mùa (sau 15/11) để có số "quanh năm".
- Phạm vi: playable chỉ dùng 2 chuỗi (ánh sáng, phục vụ phòng). Không thêm khách thứ hai trong bản test.

## 8. Quy tắc
- Playable phải giống game thật: cùng bàn ghép, cùng chuỗi đồ, cùng nhân vật; chu kỳ ngày/đêm và order của khách đêm là tính năng có thật trong game.
- Asset vẽ cho playable phải dùng lại được trong game.
- Ảnh AI chỉ dùng làm concept nội bộ, không đưa vào playable chạy thật.
