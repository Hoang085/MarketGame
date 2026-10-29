# Playable demo A (bản test nội bộ)
Phiên bản: v0.1, 2026-10-26. Theo `../playable-script.md` (v1.1) và `../merge-items.md`.

> **Chỉ dùng nội bộ.** Ảnh trong demo là ảnh AI concept, và icon được sinh theo mẫu phong cách Travel Town. Không đưa bản này lên mạng quảng cáo. Bản chạy thật cần asset do họa sĩ vẽ và đóng gói thành một file HTML theo chuẩn MRAID.

## Cách mở
Demo đọc ảnh từ `../concept-art/`, nên phải mở qua một server tĩnh, không mở thẳng file:

```bash
npx http-server docs/concepts/keepsake-lane -p 8765
```

Sau đó mở `http://localhost:8765/playable/index.html`. Muốn thử trên điện thoại cùng mạng Wi-Fi thì thay `localhost` bằng IP của máy.

- `?end=2`: dùng end card E2 (*"Who wanted Grandma gone?"*). Mặc định là E1 (*"What did Grandma hide?"*).

## Luồng chơi
1. **Hook:** Henry đưa đồng hồ. Chạm để vào bàn ghép.
2. **Bàn ghép 5×4:** tay hướng dẫn chỉ cặp đầu tiên. Kéo món chồng lên món giống để merge: Lv2 → Lv3 → Lv4 → Lv5 → Lv6 (4 lần). Ghép cạnh khăn phủ bụi thì khăn lật ra. Chạm hộp thiếc để sinh bánh răng Lv1 (tốn 1 ⚡); chạm thùng các-tông để mở. Kéo vào ô có món khác thì hai món đổi chỗ. Đứng yên 3 giây thì cặp ghép được sẽ phát sáng.
3. **Hé lộ:** đồng hồ Lv6, chìa khóa, mẩu giấy *"It was no accident."*, Clara.
4. **Lựa chọn:** Victor trả 5.000 USD. KEEP thì chìa khóa bay vào cửa gác mái; SELL thì hiện lá thư *"Don't sell the clock."*. Không chọn sau 5 giây thì tự chọn KEEP.
5. **End card:** nút PLAY NOW (hiện thông báo thay cho việc mở store) và "Play again".

## Sự kiện đo
Ghi ra console và `window.__events`:
`load`, `first_interaction`, `spawn`, `merge_1`…`merge_4`, `reveal_seen`, `choice_keep` / `choice_sell` / `choice_auto`, `endcard_seen` (kèm E1/E2), `cta_click`.

## Thay đổi v0.2 (2026-10-26)
- Khi kéo, chỉ có item đi theo tay. Lúc tải trang, mỗi icon được cắt khỏi tấm sprite và nền ô kem được tô trong suốt bằng canvas.
- Ô khóa dễ nhận ra hơn: khay tối màu, món bên dưới hiện mờ màu xám dưới tấm vải sọc, viền nét đứt và biểu tượng 🔒. Thả item vào ô khóa thì ô rung, có tiếng báo và lần đầu hiện gợi ý *"Merge next to it to uncover!"*. Thêm 2 ô khóa cạnh chuỗi đồng hồ để người chơi thấy cơ chế mở khăn sớm.
- Âm thanh tổng hợp bằng WebAudio, không cần file: mưa nền, nhấc/thả, merge (nốt cao dần theo cấp), mở khăn, sinh đồ, tích tắc và hợp âm khi hé lộ, nốt trầm lúc hiện mẩu giấy, chuông cửa, chìa khóa, cửa kẽo kẹt, tiền xu. Âm thanh bắt đầu sau lần chạm đầu tiên; nút 🔊 ở giữa trên cùng để tắt/bật.

## Thay đổi v0.3 (2026-10-26)
- Từ cảnh hé lộ trở đi, bàn ghép được ẩn hẳn, không chỉ phủ lớp tối.
- Nhánh KEEP chuyển sang cảnh riêng: chiếu nghỉ cầu thang trước cửa gác mái (BG-04). Chìa khóa bay vào ổ, ảnh cửa đóng chuyển dần sang ảnh cửa hé mở có ánh sáng tràn ra, rồi đến end card. Bỏ cái cửa vẽ bằng CSS nằm đè lên thẻ order.

## Thay đổi v0.4 (2026-10-26)
**Âm thanh thật thay cho âm tổng hợp.** 16 hiệu ứng + tiếng mưa lặp + nhạc nền piano 32 giây, sinh bằng ElevenLabs qua fal (`fal-ai/elevenlabs/sound-effects/v2`, `elevenlabs/music/v2.5`), nằm trong `audio/` (tổng khoảng 516KB, mp3 64kbps). Merge cấp 2–3 và 4–5 dùng 2 tiếng khác nhau, cao dần theo cấp; merge ra Lv6 có tiếng riêng.

| File | Dùng khi |
|---|---|
| `pick`, `drop`, `deny` | nhấc món, thả/đổi chỗ, thả vào ô khóa |
| `merge1`, `merge2`, `merge6` | merge cấp thấp, cấp cao, ra đồng hồ Lv6 |
| `spawn`, `cloth` | sinh đồ từ hộp thiếc, lật khăn / mở thùng |
| `tick`, `lid`, `sting` | đồng hồ chạy lại, nắp bật, nốt trầm khi hiện mẩu giấy |
| `bell`, `key`, `creak`, `coin`, `tap` | chuông cửa (Victor), chìa xoay ổ, cửa gác mái, tiền xu, bấm nút |
| `rain`, `music` | tiếng mưa và nhạc nền, lặp liên tục |

**FX và glow** (hệ hạt vẽ bằng canvas + CSS, không thêm thư viện):
- Nhấc món: món phóng to, nghiêng, có bóng đổ; ô gốc sáng viền. Kéo qua ô ghép được thì ô sáng xanh ngọc nhịp đập; qua ô khóa thì viền đỏ.
- Merge: chớp sáng, vòng sóng, hạt lấp lánh, sao; món mới nảy co giãn. Lv5–6 dùng màu vàng và to hơn; ra Lv6 thì rung màn hình kèm vòng sáng lớn.
- Sinh đồ: hộp thiếc lắc, món bay theo đường cong ra ô trống, bụi nhỏ khi chạm ô. Lật khăn và mở thùng: bụi bung ra.
- Thanh tiến độ: vệt sáng quét qua, hạt và sao bật ra ở đầu thanh.
- Hé lộ: đồng hồ bật to ra, tia sáng xoay chậm phía sau, bụi lơ lửng, chìa rơi có vệt lấp lánh.
- Lựa chọn: hai nút phát sáng nhịp thở. Cửa gác mái: chìa bay để lại vệt sáng, ổ khóa chớp, cửa mở có tia sáng tỏa và hạt vàng.
- End card: mưa rơi, sao lấp lánh quanh logo, vệt sáng quét qua nút PLAY NOW.

**Bản quyền:** đã kiểm ngày 2026-10-26, xem `../asset-licensing.md`. Tóm tắt: hiệu ứng âm thanh và nhạc dùng được cho playable và quảng cáo online. Nhạc ElevenLabs **không** dùng được cho "Studio Game" (game kiếm tiền vượt ngưỡng Indie: 500.000 USD doanh thu game hoặc đơn vị phát hành từ 1 triệu USD/năm), nên nhạc trong game thật nên thuê làm riêng.

## Thay đổi v0.5 (2026-10-26)
- Màn mở đầu chỉ có Henry trên nền tiệm; bàn ghép ẩn và chỉ hiện sau lần chạm đầu.
- Sửa lỗi khó cầm item: tấm khăn lật ra vẫn nằm đè lên item và chặn thao tác chạm. Giờ khăn bỏ qua thao tác chạm và tự xóa sau hiệu ứng.
- Sửa tiếng rè/vỡ: vài clip có đỉnh gần mức tối đa (pick, cloth, merge6, tap) cộng với nhạc nền bị clipping. Giờ mọi clip được chuẩn hóa về cùng mức đỉnh khi giải mã, và tổng âm đi qua bộ giới hạn (compressor). Tiếng tích tắc vốn quá nhỏ giờ nghe rõ.
- Nhạc nền mới chỉ có piano và celesta, 40 giây, bỏ dàn dây; lặp bỏ qua đoạn fade cuối. Bản cũ giữ ở `audio/music-v1-strings.mp3`.
- Artifact để xem trên điện thoại: https://claude.ai/artifact/H5XQbhYdrjcYsQAbpfs8m3 (riêng tư, chia sẻ qua menu Share).

## Thay đổi v0.6 (2026-10-26): 2 màn, mỗi màn nửa chìa khóa
- **Luồng mới:** hook (Henry) → **màn 1** đồng hồ → hé lộ 1: nửa trái chìa khóa + *"Find the other half." — E.*, Clara: *"Half a key...? Grandma's music box!"* → **màn 2** hộp nhạc gỗ (bàn lật ngang, máy sinh đồ là rương gỗ, thẻ order là Clara) → hé lộ 2: nửa phải chìa, 2 nửa trượt vào nhau và chớp sáng thành chìa hoàn chỉnh + *"It was no accident." — E.* → Victor đòi mua **chìa khóa** → KEEP: chìa bay vào ổ cửa gác mái / SELL: *"Don't sell the key."* → end card.
- **HUD:** thay ô tiền xu bằng 2 ô nửa chìa khóa; nửa nào lấy được thì sáng lên.
- **Cảnh hé lộ:** bỏ ô nền kem sau món đồ. Món đồ nổi trên quầng sáng vàng–xanh ngọc có nhịp thở, tia sáng xoay phía sau, món nhấp nhô nhẹ.
- **Asset mới** (Nano Banana, mẫu phong cách là tấm icon đồng hồ của mình, **không** dùng ảnh Travel Town): `concept-art/icons-v3/BOX-sheet-1.png` (chuỗi hộp nhạc 6 cấp), `KEY-sheet-1.png` (rương gỗ, chìa hoàn chỉnh, nửa trái, nửa phải, thư niêm phong, kính lúp). Bản 2 của mỗi tấm cũng dùng được.
- Sự kiện đo: thêm `reveal1_seen`, `level2_start`, `reveal2_seen` (thay `reveal_seen`). Merge đánh số liên tục qua 2 màn (`merge_1`…`merge_8`).
- Độ dài: khoảng 50–60 giây nếu chơi liền. Playable ad thường 30–60 giây, nên cần đo tỷ lệ người xem đi hết màn 2.

## Thay đổi v0.7 (2026-10-26)
- Hai nửa chìa khóa bỏ quầng sáng (lọc pixel xanh ngọc và đốm trắng khi cắt icon), nên khi ghép không còn đè lên nhau.
- Bàn tay hướng dẫn mới: găng tay trắng kiểu hoạt hình (`concept-art/ui/hand-pointer.png`, sinh lại bằng Nano Banana từ ảnh tham khảo người dùng gửi). Nền trắng được tách khi tải trang.
- HUD bỏ ô năng lượng và ô xu, chỉ còn 2 ô nửa chìa và nút âm thanh. Nút SELL bỏ icon xu.
- **SELL thành nhánh "thua nhẹ":** phát âm thanh buồn (`audio/lose.mp3`), hiện *"Don't sell the key."*, nút SELL mờ đi và bàn tay gõ vào KEEP. Không đến end card cho tới khi bấm KEEP; sau 6 giây không bấm thì tự chọn KEEP.
- Cửa gác mái: chìa khóa mờ dần ngay khi chạm tới ổ (chớp sáng tại ổ), thay vì nằm đè lên cửa, vì art 2D không thể hiện được chìa "cắm vào" ổ.

## Thay đổi v0.8 (2026-10-26)
- Lọc màu ở v0.7 chưa xóa hết quầng xanh quanh nửa chìa. Đã sinh lại tấm chìa khóa **không quầng sáng, không đốm lấp lánh**: `concept-art/icons-v3/KEY-sheet-3.png` (cùng bố cục 6 ô). Bỏ bước lọc màu.
- Bỏ vòng sáng FX khi nửa chìa rơi vào ô.

## Thay đổi v0.9 (2026-10-26)
- Ghép chìa: khi cắt icon, đo phần có hình của mỗi nửa; lúc ghép, 2 nửa trượt tới đúng chỗ mép gãy chạm nhau ở giữa, không còn đè lên nhau.
- Nút lựa chọn chỉ còn chữ ("SELL $5,000", "KEEP IT"); SELL không phát sáng, chỉ KEEP có nhịp sáng.
- Tay hướng dẫn đầu tiên hiện sau 2 giây (trước là 0,6 giây), để người chơi nhìn bàn ghép trước.

## Thay đổi v0.10 (2026-10-26)
- Ghép chìa thẳng hàng: đo độ cao trục chìa ở mép gãy của mỗi nửa, nửa phải được dịch lên/xuống cho khớp với nửa trái.
- Tay hướng dẫn: hiện mờ dần (0,45 giây) ngay trên item cần kéo, đứng yên khoảng 0,9 giây rồi mới chạy động tác kéo lặp lại như trước.

## Thay đổi v0.11 (2026-10-27): tải nhanh hơn
- Demo dùng ảnh đã nén trong `playable/assets/` (tạo bằng `optimize-assets.ps1` trong scratchpad, PowerShell + System.Drawing): nền JPEG 576×1024, chân dung PNG 480×640, tấm icon JPEG 60% kích thước (icon vẫn cắt nền lúc chạy). Tổng ảnh giảm từ khoảng 9MB xuống **khoảng 1,65MB**. Ảnh gốc vẫn nằm trong `concept-art/`.
- Thêm màn chờ tải có thanh phần trăm. Game chỉ hiện khi đã tải đủ ảnh, không còn cảnh hiện nửa vời. Thêm sự kiện `ready`.
- Demo giờ chỉ cần thư mục `playable/`, không phụ thuộc `concept-art/` nữa.
- Tunnel localhost.run gói miễn phí chỉ đạt khoảng **24KB/giây** (file 380KB mất 16 giây), nên dù đã nén vẫn chậm. Đã chuyển sang **Cloudflare quick tunnel**: cùng file chỉ mất khoảng 0,5 giây; toàn bộ ảnh cộng 3 file âm thanh tải lần lượt hết khoảng 7 giây.

## Test public qua Cloudflare quick tunnel
`cloudflared.exe` bản chính thức (chữ ký số Cloudflare, Inc.) nằm trong scratchpad của phiên. Chạy server demo ở cổng 8765, rồi:

```bash
cloudflared.exe tunnel --no-autoupdate --url http://localhost:8765
```

Server demo phải chạy độc lập (ví dụ `npx http-server docs/concepts/keepsake-lane -p 8765` trong một cửa sổ terminal riêng). Nếu server tắt mà tunnel còn chạy, link public báo lỗi 502 Bad gateway.

Lệnh in ra một địa chỉ `https://<tên-ngẫu-nhiên>.trycloudflare.com`; mở `<địa chỉ>/playable/index.html`. Địa chỉ đổi mỗi lần chạy lại và chỉ sống khi máy bật, lệnh còn chạy. Ai có link đều xem được cả thư mục `keepsake-lane`, nên chỉ gửi trong đội.

## Chưa có
- Hiệu ứng nắp đồng hồ bật mở (đang hiện thẳng icon Lv6).
- Chân dung khách nhỏ trên thẻ order dùng tạm chân dung hội thoại của Henry.
- Đóng gói một file và MRAID cho mạng quảng cáo.
