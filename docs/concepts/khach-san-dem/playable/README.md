# Playable demo "Khách sạn đêm" / *The Midnight Deed* (v0.1, 11/11/2026)

Dựng theo [../playable-script.md](../playable-script.md) (v1, biến thể S). Code ghép từ 2 playable cũ: bàn 7×7, kéo thả, FX, tay hướng dẫn của [demo clone Travel Town](../../keepsake-lane/concept-store/ads-clone-travel-town/playable/); luồng cảnh, hội thoại, ô khóa, máy sinh đồ, thanh tiến độ của [Bloom Corner](../../keepsake-lane/concept-store/playable/). HTML5, không dùng thư viện.

> **Chỉ dùng nội bộ.** Toàn bộ ảnh là ảnh AI concept (xem [../art/README.md](../art/README.md)). Không đưa lên mạng quảng cáo.

## Cách mở

- **Một file:** `dist/khach-san-dem-playable.html` (khoảng 6,7 MB, ảnh và âm thanh nhúng sẵn). Mở thẳng bằng trình duyệt hoặc gửi qua điện thoại. Font Playfair/Nunito tải từ Google Fonts, không có mạng thì dùng font dự phòng.
- **Bản để sửa code:** `index.html` cùng `assets/`, `audio/`. Chạy `node tools/docs-server.mjs` ở gốc repo, mở `http://localhost:8770/concepts/khach-san-dem/playable/index.html`.
- `?end=2`: end card E2 *"Your guests aren't human. Keep them happy."*. Mặc định là E1 *"Who sold you a monster hotel?"*.

Sửa art thì chạy `powershell -ExecutionPolicy Bypass -File cut-sprites.ps1` (cắt lại sprite từ `../art/`), sửa code thì chạy `node build.mjs` để tạo lại file trong `dist/`.

## Luồng chơi (khoảng 55 giây nếu chơi liền)

1. **Hook:** mặt tiền chiều tà, tin nhắn Victor Sterling rơi xuống như thông báo điện thoại: *"No refunds. Good luck with your 'hotel'."* Nora buồn, rơi nước mắt, cầm điện thoại đọc tin: *"It's all I have left."* (11/11: người dùng yêu cầu mặt buồn thay cho thất thần → quyết tâm) Chạm để vào bàn, hoặc tự vào sau 4,5 giây.
2. **Màn 1 (ngày, chuỗi ánh sáng):** sảnh đổ nát, thẻ order Nora *"Let there be light!"* cần đèn chùm cấp 6. Bàn 7×7: nến cấp 2, 2, đèn dầu 3, đèn bão 4, đèn tường 5 (4 lần merge ra cấp 6), hộp đồ cũ sinh mẩu nến, 2 mẩu nến lẻ, 20 ô khóa (hộp giấy cũ bám mạng nhện; kịch bản ghi 12–15, tăng thêm cho bàn kín), 13 đồ lấp bàn (ghế, chìa khóa cấp 1–2), 8 ô trống. Tay hướng dẫn chỉ cặp nến sau 1,8 giây. Merge cạnh ô khóa thì hộp phồng lên rồi bung ra thành bụi, lộ ghế hoặc chìa khóa ghép được. (11/11: đổi từ ghế phủ vải sang hộp giấy, vì hình ghế mà mở ra lại thành món khác thì không hợp lý.) Thanh **RESTORING 25→100%**. Nền giữ nguyên sảnh đổ nát suốt màn 1 (sửa 11/11 theo góp ý).
3. **Chuyển đêm (sửa 11/11 theo góp ý):** bàn trượt xuống, thấy trọn sảnh đổ nát; món đèn chùm vừa ghép bay theo đường cong lên đúng chỗ đèn chùm trên trần rồi tan vào; sau đó **ảnh sảnh đã sửa hiện dần lên trên ảnh đổ nát** (2,2 giây), đèn bàn và lò sưởi sáng lên (không có quầng sáng ở đèn chùm), chữ *"The Hollow Lantern is back."*. Sau đó cận cảnh đồng hồ quả lắc: **kim quay từ 9 giờ đến 12 giờ** (kim phút 3 vòng) kèm tiếng máy đồng hồ, phòng tối dần thành vignette tím, chỉ còn đèn và lò sưởi sáng; tới 12 giờ đồng hồ **điểm 3 tiếng chuông trầm** (*"Midnight."*), mỗi tiếng phòng tối thêm một nấc, rồi im lặng gần 1 giây. Đã bỏ câu *"Not bad... for a scam."* và ảnh Nora ở đoạn này (người dùng thấy biểu cảm và thoại chưa ổn); chưa có câu thay.
4. **Gõ cửa:** file `knock.mp3` đã có sẵn 3 tiếng gõ nên chỉ phát 1 lần; chữ *KNOCK.* hiện từng dòng khớp với từng tiếng gõ (0,06 / 0,28 / 0,50 giây), màn hình chỉ nhún nhẹ; dừng khoảng 1,2 giây rồi **hiện ngay 2 nút chữ OPEN / HIDE, không icon** (tự chọn OPEN sau 4 giây), không còn câu thoại của Nora trước lựa chọn.
   - OPEN: gió, nến chập chờn, Aldric cúi chào: *"A room, madam. For... a long stay."*, chú thích *"...he casts no shadow."*
   - HIDE: tiếng chuông quầy, Aldric đặt ngón tay lên môi: *"No need to hide. I only bite... my dinner."*
5. **Màn 2 (đêm, chuỗi phục vụ phòng):** cùng bàn, bản đêm (ô tím, item phát sáng). Order Aldric *"Room 13. Dinner at once."* cần xe đẩy cấp 6. Máy sinh đồ là xe đẩy bạc nhỏ. Còn đèn từ màn 1 làm trang trí. Không có tay hướng dẫn, chỉ phát sáng cặp gợi ý sau 3 giây. Thanh **SERVING**.
6. **Hé lộ:** xe đẩy nổi lên, Aldric nâng ly: *"Finally. Proper service."* Đồng vàng rơi xuống, 2 danh thiếp Victor Sterling (mới và bản ố 1923) bay lên. Aldric: *"Your agent sold this hotel to us too... in 1923."* Phóng to danh thiếp, Nora sững người: *"...Who ARE you, Victor?"*
7. **End card:** mặt tiền ban đêm, logo tên game *The Midnight Deed* (12/11 đổi từ *The Hollow Lantern*; khách sạn trong truyện vẫn tên Hollow Lantern), danh thiếp gài góc, câu E1/E2, nút PLAY NOW (chạm bất kỳ đâu cũng tính), "Play again".

Kéo một món vào ô trống hoặc ô khác loại thì đổi chỗ; không đổi chỗ được với ô khóa và máy sinh đồ. Chạm ô khóa thì rung và nhắc *"Merge next to it to open!"* (một lần).

## Sự kiện đo

Ghi ra console và `window.__events`, đúng danh sách ở mục 6 kịch bản: `load`, `ready`, `first_interaction`, `merge_1`…, `spawn`, `night_seen`, `door_open` / `door_hide` / `door_auto`, `monster_seen`, `level2_start`, `reveal_seen`, `endcard_seen` (kèm `variant` E1/E2), `cta_click`. Số merge đánh liên tục qua 2 màn và tính cả merge đồ lấp bàn, nên có thể lớn hơn 8. Nút PLAY NOW gọi `mraid.open` nếu có, không thì hiện thông báo.

## Asset

| Nguồn trong `../art/` | Sprite trong `assets/` |
|---|---|
| `ITEM-LGT-a.png`, `ITEM-SRV-a.png` | `lgt1`–`lgt6`, `srv1`–`srv6` (160 px) |
| `ITEM-FILLER-a.png` | `chr1`–`chr3` (ghế), `key1`–`key3` (chìa khóa) |
| `v2/PROPS-a4-lockbox.png` | `lockbox`: ô khóa hộp giấy bám mạng nhện |
| `v2/src/cards-sterling-a.png` | `cards`: 2 danh thiếp VICTOR STERLING (480 px; 12/11 đổi tên từ Victor Crane) |
| `v2/PROPS-a2.png` | `genbox`, `gencart`, `coin` (220 px); `sheet` (ghế phủ vải, không dùng nữa); `clock` cắt ra nhưng không dùng nữa |
| `v2/PROPS-a3-nohands.png` | `clock-face`: mặt đồng hồ không kim, kim vẽ bằng CSS để quay được |
| `CH-nora-sad-a.png` | `nora-sad` (hook; ảnh vẽ tới hông nên hiển thị cao hơn, 380 px) |
| `v2/CH-nora-a.png` | `nora-main`: mặt cười trên thẻ order màn 1 (11/11, thay mặt cau mày của bản quyết tâm) |
| `CH-nora-expr-a.png` | `nora-dazed`, `nora-determined` (chưa dùng), `nora-surprised`, `nora-frozen` |
| `v2/CH-aldric-expr-c.png` | `aldric-bow`, `aldric-toast` (mặt trên thẻ order màn 2), `aldric-secret` |
| `v4/BG-exterior-dusk-b2.png`, `v3/BG-lobby-ruined-nomark.png`, `v2/BG-lobby-restored-nomark.png` (12/11: đã xóa chữ lồng HL trên thảm), `v4/BG-exterior-night.png` | `bg-dusk`, `bg-ruined`, `bg-restored`, `bg-night` (JPEG 576×1032) |

Tay hướng dẫn lấy từ demo Travel Town. Âm thanh dùng lại bộ của Bloom Corner (bỏ tiếng chim và màn trập). Thêm 3 tiếng sinh bằng ElevenLabs SFX v3 qua fal (11/11): `knock.mp3` (3 tiếng gõ cửa gỗ trong một file, phát 1 lần), `clockspin.mp3` (máy đồng hồ chạy nhanh), `clockbell.mp3` (một tiếng chuông đồng hồ trầm, phát 3 lần). Tiếng gió lúc mở cửa vẫn tổng hợp bằng WebAudio. **Nhạc nền (sửa 11/11):** màn 1 dùng bản piano của Bloom Corner. Xong màn 1 (bàn trượt xuống) nhạc tắt dần trong khoảng 1 giây; **cả đoạn đèn chùm, đồng hồ và gõ cửa không có nhạc nền**, chỉ có tiếng hiệu ứng. Khi Aldric xuất hiện (cả OPEN lẫn HIDE), nhạc đêm `nightmusic.mp3` hiện dần lên trong 1,5 giây và chạy tới end card: waltz chậm, celesta và hộp nhạc giọng thứ, pizzicato, cello trầm (ElevenLabs Music v2.5 qua fal, 40 giây, lặp từ giây 1 đến 35,5 để bỏ đoạn tắt dần cuối file). Bản thay thế `audio-alt/nightmusic-b.mp3` (piano giọng thứ, dây trầm, hợp xướng xa, kiểu tình cảm gothic, to hơn) không đóng gói vào playable.

Chữ trên điện thoại, logo, câu hỏi end card, nút và bong bóng thoại đều làm bằng HTML/CSS.

## Đã kiểm tra (11/11/2026, trình duyệt máy tính, khung 360×640)

- Chạy hết luồng từ hook đến end card, cả nhánh OPEN (tự chọn sau 4 giây) và HIDE; đủ sự kiện đo theo đúng thứ tự, không lỗi console.
- Kéo thả merge bằng chuột, ô khóa mở khi merge cạnh bên, máy sinh đồ sinh item cấp 1, thanh tiến độ và nền sảnh chuyển dần.
- Bản một file `dist/` mở và chơi được.

## Chưa làm / chưa kiểm tra

- Chưa thử trên điện thoại thật, chưa nghe thử âm thanh (gõ cửa, chuông tổng hợp có thể cần chỉnh âm lượng).
- File 6,7 MB, vượt mục tiêu 2 MB của kịch bản: 7 ảnh nhân vật PNG chiếm phần lớn. Khi làm bản thật cần nén (WebP hoặc PNG 8-bit) và dùng art vẽ tay.
- Biến thể M (thừa kế, không bị lừa) và R (romance) chưa dựng; mới đổi được end card bằng `?end=2`.
- Đoạn chuyển đêm chưa có câu thoại/biểu cảm của Nora (đã bỏ bản cũ, chờ chốt câu mới).
- Trong khung Browser của app, trang bị coi là ẩn nên canvas hạt sáng không vẽ lại; thứ tự và thời gian các cảnh đã kiểm tra qua log sự kiện, còn chuyển động cần xem trên trình duyệt thường.
- Chưa đóng gói MRAID đầy đủ cho từng mạng quảng cáo.
