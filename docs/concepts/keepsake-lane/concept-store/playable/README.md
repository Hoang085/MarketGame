# Playable demo Bloom Corner (bản test nội bộ)
Phiên bản: v0.1, 2026-10-27. Theo `../playable-script.md` (v1). Code dựng lại từ playable Keepsake (`../../playable/`, v0.11): giữ bàn ghép, kéo thả, ô khóa, FX, âm thanh, màn chờ tải; đổi art, chuỗi item và luồng cảnh.

> **Chỉ dùng nội bộ.** Toàn bộ ảnh là ảnh AI concept. Không đưa bản này lên mạng quảng cáo. Bản chạy thật cần asset do họa sĩ vẽ và đóng gói thành một file HTML theo chuẩn MRAID.

## Cách mở
Demo chỉ cần thư mục `playable/`. Mở qua một server tĩnh, ví dụ:

```bash
npx http-server docs/concepts/keepsake-lane/concept-store -p 8769
```

Rồi mở `http://localhost:8769/playable/index.html`.

- `?end=2`: end card E2 *"Save Grandma's flower shop!"* (cozy, không bí mật). Mặc định là E1 *"Who was Grandma's secret love?"*.

## Luồng chơi
1. **Hook:** tiệm héo, tờ thông báo *"BREWLINE COFFEE — Coming soon to this corner."*, Clara buồn. Chạm để vào bàn ghép.
2. **Màn 1 (hoa):** thẻ order là Clara (*"Let's make it bloom again!"*), cần giỏ hoa. Leo chỉ xuất hiện trên thẻ order từ màn 2, sau khi đã bước vào ở cảnh chuyển màn. Tay hướng dẫn chỉ cặp chậu mầm. Chậu mầm Lv2 → hoa hồng → bó nhỏ → bó lớn → giỏ hoa Lv6 (4 lần). Mỗi lần merge, nền tiệm chuyển dần từ héo sang nở hoa (25/50/75/100%). Hộp hạt giống sinh gói hạt Lv1; gói kraft mở ra hạt café; ô khóa là giấy kraft buộc dây, merge cạnh bên thì giấy bay đi.
3. **Hé lộ 1:** giỏ hoa nổi lên, rơi ra nửa ảnh có bà lúc trẻ, *"Bloom Corner, 1968."*, Clara: *"Grandma...? Who tore this?"*. Nửa ảnh có chàng trai được giữ cho cuối.
4. **Leo bước vào:** *"Wow. Let me shoot you for the reopening!"*
5. **Màn 2 (thời trang, bàn lật ngang):** nơ → mũ cói → túi → bộ phụ kiện → váy hè. Máy sinh đồ là giỏ ruy băng. Ly café, cupcake chỉ để trang trí.
6. **Phối đồ:** chọn Sundress hoặc Evening (không chạm sau 4 giây thì tự chọn Sundress). Leo: *"Perfect. Say 'bloom'!"*, tiếng màn trập, flash, ra polaroid đúng bộ đã chọn.
7. **Hé lộ 2:** hộp mũ của bà cho nửa ảnh còn lại, hai nửa trượt khớp theo mép xé, ra tấm ảnh 1968 đầy đủ (bà và chàng trai cầm máy ảnh). Polaroid hôm nay đặt cạnh. Leo: *"That's... my grandfather's camera."* Clara: *"Grandma never told me about him."*
8. **End card:** mặt tiền tiệm buổi chiều, logo, ảnh 1968 gài góc, câu hỏi E1/E2, PLAY NOW (hiện thông báo thay cho mở store), "Play again".

Độ dài khoảng 55–65 giây nếu chơi liền.

## Sự kiện đo
Ghi ra console và `window.__events`:
`load`, `ready`, `first_interaction`, `spawn`, `merge_1`…, `reveal1_seen`, `level2_start`, `outfit_sundress` / `outfit_evening` / `outfit_auto`, `photo_taken`, `reveal2_seen`, `endcard_seen` (kèm E1/E2), `cta_click`.

Merge đánh số liên tục qua 2 màn và tính cả merge phụ (gói hạt, café), nên số cuối có thể lớn hơn 8.

## Asset
Ảnh nén nằm trong `assets/` (khoảng 3,1MB), tạo từ `../concept-art/` bằng script PowerShell + System.Drawing (nền JPEG 576×1032, ảnh 464×576, tấm icon JPEG 60%, chân dung PNG 420×562). Icon được cắt khỏi tấm 3×2 và xóa nền ô kem lúc chạy.

**Asset mới sinh cho playable** (`google/nano-banana-2.1/edit`, tách nền `fal-ai/birefnet/v2`), nằm trong `../concept-art/`:
| File | Nội dung |
|---|---|
| `BG-store-wilted-1.png` | Tiệm héo, cùng bố cục BG-store-day-2 để chuyển dần |
| `PHOTO-1968-1.png` | Ảnh sepia: bà lúc trẻ ôm hoa + chàng trai cầm máy ảnh |
| `UI-sheet-1.png` | Hộp hạt giống, giỏ ruy băng, gói kraft, hộp mũ, album ảnh, máy ảnh |
| `CH-heroine-sad-1.png`, `CH-heroine-surprised-1.png`, `CH-leo-moved-1.png` | Biểu cảm mới (bản tách nền trong `cutout/`). Leo cuối màn 2 là bản cảm động, cười nhẹ; bản `CH-leo-stunned-1` trông hoảng hốt nên đã bỏ |
| `CH-heroine-full-1.png`, `CH-heroine-sundress-full-1.png`, `CH-heroine-evening-full-1.png` | Clara toàn thân (có chân) cho màn chọn đồ; polaroid vẫn dùng bản nửa người |
| `BG-storefront-1.png` | Mặt tiền tiệm buổi chiều cho end card, bảng hiệu trống |

Tờ thông báo Brewline, chữ trên bảng hiệu và hai nửa ảnh xé được làm bằng CSS (clip-path dùng chung một đường xé), không cần ảnh riêng.

**Âm thanh** (`audio/`): dùng lại 11 hiệu ứng của Keepsake; sinh mới bằng ElevenLabs qua fal: `birds` (nền, lặp), `shutter`, `sparkle`, `paper`, và `music` (piano + celesta + pizzicato, 40 giây). Bản quyền như ghi ở `../../asset-licensing.md`: dùng được cho playable và quảng cáo online; nhạc trong game thật nên thuê làm riêng.

## Chưa có
- Chân dung trên thẻ order dùng tạm chân dung hội thoại (Clara ở màn 1, Leo ở màn 2).
- Ảnh polaroid ghép từ nền tiệm + chân dung bộ đồ đã chọn, chưa phải ảnh vẽ riêng.
- Biến thể B (bỏ ảnh cũ) và R (nhấn romance) trong kịch bản chưa dựng; hiện chỉ đổi end card bằng `?end=2`.
- Đóng gói một file và MRAID cho mạng quảng cáo.
