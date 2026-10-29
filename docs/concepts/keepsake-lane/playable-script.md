# Kịch bản playable ad: Keepsake Lane (tên tạm)
Phiên bản: v1.1, 2026-10-26 | Độ dài: 30–45 giây | Màn dọc 9:16 (có bố cục cho màn ngang)

> **Thay đổi ở v1.1:** Merge & Mend (ra 29/09/2026) cũng dùng "ảnh cũ" và "hộp nhạc" để kể chuyện ấm lòng. Vì vậy cảnh hé lộ đổi từ ảnh cũ sang **lá thư và chiếc chìa khóa**, đẩy tông về phía cozy crime. Chìa khóa mở luôn cửa gác mái ở cảnh 5, nên lựa chọn có hệ quả rõ. Biến thể B bỏ hộp nhạc. End card có 2 câu để test.

Mục tiêu: cho người xem **tự tay merge vài lần, thấy món đồ hé lộ bí mật, và đứng trước một lựa chọn**. Kết thúc bằng câu hỏi bỏ ngỏ để họ bấm cài. Playable phải dùng đúng cơ chế của game thật, không làm mini-game giả.

Chữ trong quảng cáo là tiếng Anh, ghi chú cho đội bằng tiếng Việt. Asset tương ứng: `asset-list.md`.

**Cách trình bày nhân vật:** mọi cảnh có nhân vật (1, 4, 5) dùng dạng **đoạn hội thoại**: chân dung nửa người đứng ở mép trái hoặc phải màn hình, bong bóng thoại bên cạnh, nền tiệm phía sau. Người nói đứng trước, người nghe mờ hoặc nhỏ hơn. Bố cục mẫu đã được duyệt: `concept-art/mockup-playable.html`.

> **v1.2 (2026-10-26), bản đang chạy trong `playable/`:** playable có **2 màn**, mỗi màn được **một nửa chìa khóa**. Màn 1 đồng hồ cho nửa trái và mẩu giấy *"Find the other half."*; màn 2 hộp nhạc gỗ cho nửa phải. Hai nửa ghép thành chìa, rồi mới đến *"It was no accident."*. Victor đòi mua chìa khóa thay vì đồng hồ. Chi tiết luồng ở `playable/README.md` (v0.6). Các mục dưới đây mô tả bản 1 màn (v1.1) và giữ lại để tham khảo.

## 1. Tóm tắt nhịp
| Thời gian | Nhịp | Người xem làm gì | Mục đích |
|---|---|---|---|
| 0–4s | **Hook**: ông Henry đưa chiếc đồng hồ vỡ | Xem | Gây tò mò, có cảm xúc ngay |
| 4–9s | **Merge 1** có tay hướng dẫn | Kéo bánh răng chồng lên bánh răng | Dạy cơ chế trong 1 thao tác |
| 9–20s | **Merge 2–4** tự làm | Kéo tiếp, có thể chạm máy sinh đồ | Cảm giác "mình đang sửa" |
| 20–27s | **Hé lộ**: đồng hồ bật nắp, rơi ra chìa khóa nhỏ và mẩu giấy *"It was no accident."* | Xem | Twist bí ẩn, điểm nhớ nhất |
| 27–35s | **Lựa chọn**: Victor đòi mua, chọn Bán hay Giữ. Giữ thì chìa khóa mở cửa gác mái | Chạm 1 nút | Cho thấy lớp quyết định, khác Travel Town và Merge & Mend |
| 35–42s | **End card**: câu hỏi bỏ ngỏ + nút cài | Bấm cài | Chuyển đổi |

## 2. Kịch bản chi tiết

### Cảnh 1: Hook (0–4s)
- **Hình:** gian tiệm đồ cổ buổi tối, mưa ngoài cửa kính, đèn bàn vàng. Chuông cửa leng keng. Ông **Henry** bước vào, ướt mưa, đặt lên quầy một **chiếc đồng hồ quả quýt vỡ nát**.
- **Bong bóng thoại (Henry):** *"It was hers... Can you fix it?"*
- **Chuyển cảnh:** camera đẩy xuống, chiếc đồng hồ "vỡ" thành các bộ phận nằm trên bàn ghép.
- **Âm thanh:** mưa, chuông cửa, nhạc piano nhẹ hơi buồn.

### Cảnh 2: Merge 1 có hướng dẫn (4–9s)
- **Bàn ghép 5×4 đã đặt sẵn đồ** (xem mục 3), mặt gỗ sáng, ô khay giấy da. Góc bàn có **hộp thiếc linh kiện của bà** (máy sinh đồ). Chuỗi item theo `merge-items.md` (chuỗi CLK, 6 cấp).
- **Tay hướng dẫn** kéo "vài bánh răng ăn khớp" (cấp 2) chồng lên món giống thứ hai.
- **Chữ:** *"Merge to restore!"*
- Người xem kéo, hai món nhập lại có hiệu ứng lóe sáng, ra **bộ máy trần** (cấp 3).

### Cảnh 3: Merge 2–4 tự làm (9–20s)
- Các cặp còn lại phát sáng nhẹ để gợi ý. Tay hướng dẫn chỉ hiện lại nếu người xem đứng yên quá 3 giây.
- Thứ tự merge:
  1. bộ máy trần + bộ máy trần → **bộ máy có mặt số** (cấp 4)
  2. bộ máy có mặt số + bộ máy có mặt số → **đồng hồ trong vỏ cũ, nứt kính** (cấp 5)
  3. đồng hồ vỏ cũ + đồng hồ vỏ cũ → **đồng hồ quả quýt đánh bóng, chạy lại** (cấp 6, món đặc biệt)
- Mỗi cấp nhìn như cùng một chiếc đồng hồ đang lành lại dần, người xem hiểu mà không cần chữ.
- Nếu thiếu đồ (người xem kéo nhầm), chạm **hộp thiếc** sinh thêm bánh răng. Mục này chỉ là đường lui, không bắt buộc.
- Mỗi lần merge, thanh **"Restoring... 25% → 50% → 75% → 100%"** chạy lên ở đầu màn hình.
- Món cấp 6 có viền **xanh ngọc** (màu manh mối) và rung nhẹ.

### Cảnh 4: Hé lộ (20–27s)
- Đồng hồ phóng to ra giữa màn hình. Tiếng tích tắc chạy lại, rồi nắp **bật mở**.
- Từ trong nắp rơi ra **một chiếc chìa khóa đồng nhỏ** và **một mẩu giấy gấp tư**. Mẩu giấy mở ra, nét chữ viết tay của bà: *"It was no accident. — E."*
- **Chân dung Clara** (sững người): *"Grandma...?"*
- **Chân dung Henry**: tái mặt, nhìn ra cửa. Gợi ý ông biết điều gì đó, hoặc đang sợ ai đó.
- **Âm thanh:** nhạc piano dừng đột ngột, một nốt trầm bí ẩn.
- **Lưu ý:** mẩu giấy chỉ có 4 chữ, cỡ lớn, để đọc được trong 1 giây.

### Cảnh 5: Lựa chọn (27–35s)
- Chuông cửa reo. **Victor Crane** đứng ở cửa, mỉm cười.
- **Victor:** *"I'll pay $5,000 for that watch. Tonight."*
- Hai nút lớn:
  - 🪙 **SELL — $5,000**
  - 🔍 **KEEP IT**
- **Chọn KEEP:** **chuyển cảnh** sang chiếu nghỉ cầu thang trước **cửa gác mái** (nền BG-04). Chìa khóa bay lên cầu thang, tra vào ổ, xoay "cạch". Cửa kẽo kẹt hé mở, ánh sáng vàng tràn ra (đổi sang bản BG-04 cửa mở). +1 🔍.
- **Chọn SELL:** Clara ngập ngừng, lá thư trong di chúc hiện lên *"Don't sell the clock."*, đồng xu rơi xuống nhưng màn hình mờ đi; Victor mỉm cười. Cả hai nhánh đều dẫn tới end card, không phạt.
- Nếu không chạm sau 5 giây, tự chọn KEEP.

### Cảnh 6: End card (35–42s)
- Nền: mặt tiền tiệm **Bell & Keys Antiques** dưới mưa, cửa sổ gác mái sáng đèn.
- Logo game.
- **Chữ lớn**, 2 phương án để test:
  - **E1 (bí mật):** *"What did Grandma hide?"*
  - **E2 (vụ án):** *"Who wanted Grandma gone?"*

  E2 khác Merge & Mend rõ hơn nhưng tối hơn. Số liệu sẽ cho biết tệp người chơi thích mức nào.
- Nút **PLAY NOW** nhấp nháy nhẹ. Chạm bất kỳ đâu trên end card đều mở store.

## 3. Bố trí bàn ghép ban đầu (5×4)
Đặt sẵn từ cấp 2 để chỉ cần đúng 4 lần merge là ra món cấp 6:

| Món (chuỗi CLK) | Cấp | Số lượng đặt sẵn |
|---|---|---|
| Vài bánh răng ăn khớp | 2 | 2 |
| Bộ máy trần | 3 | 1 |
| Bộ máy có mặt số | 4 | 1 |
| Đồng hồ trong vỏ cũ | 5 | 1 |
| Hộp thiếc linh kiện (máy sinh đồ) | – | 1 |
| Đồ nghề trang trí (giẻ lau, bàn chải, lọ dầu) | chuỗi TOOL | 3, để bàn trông đầy như game thật |
| Khăn phủ bụi / thùng các-tông | ô khóa | 3–4 |

Chuỗi: 2+2 → 3 (thành 2 bộ máy trần) → 4 (thành 2) → 5 (thành 2) → 6. Các ô còn lại để trống.

## 4. Biến thể để test A/B
Giữ nguyên cảnh 2–3 và end card, chỉ đổi hook và món hé lộ:

| Biến thể | Hook | Món merge | Hé lộ |
|---|---|---|---|
| **A (chính)** | Henry mang đồng hồ vỡ | chuỗi đồng hồ | chìa khóa + *"It was no accident."* |
| **B** | Mrs. Whitlow mang bình sứ nứt đến nhờ sửa | chuỗi gốm | trong lòng bình có trang sổ cái cuộn tròn, ghi tên **Victor Crane** và một số tiền lớn |
| **C** | Bức tranh cũ bị rách | chuỗi giấy | đèn UV lộ ra bản đồ vẽ tay sau tranh |

Không dùng ảnh cũ hay hộp nhạc làm điểm hé lộ trong quảng cáo, vì Merge & Mend đã dùng. Nên chạy A trước, kết hợp 2 end card E1/E2. Nếu ngân sách cho phép, chạy thêm B để xem hook "đối thủ là nghi phạm" có tốt hơn hook "lời nhắn của bà" không.

## 5. Thông số kỹ thuật
| Mục | Yêu cầu |
|---|---|
| Định dạng | HTML5 một file, nhúng toàn bộ asset (base64), không gọi mạng ngoài |
| Chuẩn | MRAID 2.0 cho các mạng AppLovin, Unity, ironSource, Mintegral; bản riêng theo yêu cầu của Meta và Google Ads |
| Dung lượng | Đặt mục tiêu **dưới 2MB** để dùng được cho nhiều mạng. Giới hạn từng mạng khác nhau và thay đổi theo thời gian (mạng ad network thường khoảng 5MB, Meta chặt hơn), cần kiểm tra lại tài liệu từng mạng trước khi build. |
| Hướng màn hình | Dọc là chính; bố cục tự co cho màn ngang |
| Thời gian tải | Dưới 3 giây trên 4G |
| Công cụ gợi ý | Phaser hoặc PixiJS (nhẹ, dễ tái dùng logic merge cho prototype); hoặc Luna Playworks nếu prototype làm bằng Unity |
| Âm thanh | Tắt mặc định trên một số mạng; game phải hiểu được khi không có tiếng |
| Chữ | Ít chữ, cỡ lớn, đọc được trong 1 giây |

**Sự kiện cần đo:**
`load` → `first_interaction` → `merge_1` → `merge_4` → `reveal_seen` → `choice_keep` / `choice_sell` / `choice_auto` → `endcard_seen` (ghi kèm E1 hay E2) → `cta_click`

Tỷ lệ rơi giữa `first_interaction` và `merge_4` cho biết cơ chế có dễ hiểu không. Tỷ lệ giữa `choice` và `cta_click` cho biết twist có đủ hấp dẫn không.

## 6. Quy tắc
- Playable phải giống game thật: cùng bàn ghép, cùng chuỗi đồ, cùng nhân vật. Không dùng cơ chế không có trong game.
- Asset vẽ cho playable phải dùng lại được trong game (xem cột "Dùng lại" trong `asset-list.md`).
- Ảnh AI chỉ dùng làm concept nội bộ, không đưa vào playable chạy thật.
