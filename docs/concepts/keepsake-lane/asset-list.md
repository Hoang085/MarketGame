# Danh sách asset: playable ad Keepsake Lane (bản A)
Phiên bản: v1.1, 2026-10-26 | Đi kèm: `playable-script.md` (v1.1), `concept-brief.md`

> **Thay đổi ở v1.1:** cảnh hé lộ đổi từ ảnh cũ sang chìa khóa và mẩu giấy. Ảnh Edith hạ xuống P3. Thêm chìa khóa (IT-KEY), mẩu giấy (UI-NOTE-2) và cửa gác mái có ổ khóa. Biến thể B đổi sang bình sứ và trang sổ cái.

Khung thiết kế: **1080×1920** (dọc). Xuất PNG nền trong suốt, giữ file gốc nhiều lớp (PSD hoặc tương đương) làm bằng chứng tự sáng tác. Phong cách theo mục 7 của `concept-brief.md`: 2D vẽ tay bán chi tiết, ánh đèn vàng ấm, điểm nhấn xanh ngọc cho manh mối.

**Ưu tiên:** P1 = bắt buộc cho bản A · P2 = cần để playable trông hoàn chỉnh · P3 = cho biến thể B/C
**Dùng lại:** ✅ dùng thẳng trong game · 🔁 dùng lại sau khi chỉnh · ❌ chỉ cho quảng cáo

## 1. Nền và cảnh
| ID | Asset | Mô tả | Kích thước gợi ý | Ưu tiên | Dùng lại |
|---|---|---|---|---|---|
| BG-01 | Gian tiệm buổi tối, mưa | Quầy gỗ, kệ đồ cổ mờ phía sau, cửa kính có mưa, đèn bàn vàng. Phần giữa để trống cho nhân vật và bàn ghép | 1080×1920 | P1 | 🔁 |
| BG-02 | Nền bàn ghép | Mặt bàn xưởng gỗ cũ, dùng làm nền cho lưới 5×5 | 1080×1080 | P1 | ✅ |
| BG-03 | Mặt tiền tiệm dưới mưa (end card) | Bảng hiệu "Bell & Keys Antiques", gác mái sáng đèn | 1080×1920 | P1 | 🔁 |
| BG-04 | Chiếu nghỉ trước cửa gác mái (cảnh riêng của nhánh KEEP) | Cầu thang gỗ dẫn lên cửa gác mái ở giữa khung, ổ khóa đồng nhìn rõ. 2 bản cùng bố cục: **cửa đóng** (ánh sáng lọt khe dưới) và **cửa hé mở** (ánh vàng tràn ra). Concept: `concept-art/BG04-attic-door-1.jpg`, `BG04-attic-door-open.png` | 1080×1920 | P1 | 🔁 |
| FX-RAIN | Lớp mưa trên kính | Vệt mưa có thể lặp, dùng trên BG-01 và BG-03 | 1080×1920, lặp | P2 | ✅ |

## 2. Nhân vật (chân dung hội thoại, nửa người)
| ID | Nhân vật | Biểu cảm cần vẽ | Kích thước gợi ý | Ưu tiên | Dùng lại |
|---|---|---|---|---|---|
| CH-HEN | Henry Alder | buồn (đưa đồng hồ), tái mặt (nhìn ra cửa) | 700×1000 | P1 | ✅ |
| CH-CLA | Clara Bell | tò mò/bình thường, sững người | 700×1000 | P1 | ✅ |
| CH-VIC | Victor Crane | mỉm cười khó đoán | 700×1000 | P1 | ✅ |
| CH-WHI | Mrs. Whitlow | kiêu kỳ (biến thể B) | 700×1000 | P3 | ✅ |
| CH-EDI | Edith thời trẻ (trong ảnh) | ảnh đen trắng, dùng trong game, không dùng trong playable A | 400×500 | P3 | ✅ |
| CH-BIS | Mèo Biscuit | ngồi trên quầy, liếm chân (2–3 frame) | 300×300 | P3 | ✅ |

Nhân vật chính phải do họa sĩ vẽ, không dùng ảnh AI. Vẽ theo bộ phận (đầu, mắt, miệng, thân) để thêm biểu cảm sau mà không vẽ lại.

## 3. Đồ vật trên bàn ghép (icon)
Mỗi icon: **256×256**, có thêm bản viền phát sáng khi được gợi ý. Danh sách chuỗi đầy đủ: `merge-items.md`. Icon có viền rõ, tương phản cao, chút ánh bóng, để đọc được trên bàn gỗ sáng.

| ID | Món | Cấp | Ghi chú | Ưu tiên | Dùng lại |
|---|---|---|---|---|---|
| IT-CLK-1 | Bánh răng rời, gỉ sét | 1 | chỉ máy sinh đồ trong playable mới sinh ra | P2 | ✅ |
| IT-CLK-2 | Vài bánh răng ăn khớp | 2 | đồng thau | P1 | ✅ |
| IT-CLK-3 | Bộ máy trần | 3 | bánh răng + dây cót, chưa có mặt số | P1 | ✅ |
| IT-CLK-4 | Bộ máy có mặt số, chưa có vỏ | 4 | mặt số men trắng, kim xanh | P1 | ✅ |
| IT-CLK-5 | Đồng hồ trong vỏ cũ, nứt kính | 5 | vỏ xỉn màu; cũng dùng cho cảnh hook (Henry đưa đồng hồ vỡ) | P1 | ✅ |
| IT-CLK-6 | Đồng hồ quả quýt đánh bóng, chạy lại | 6 | món đặc biệt, viền xanh ngọc. Cần 2 trạng thái: **đóng**, **nắp mở** (khoang trong trống, chỗ chìa khóa và mẩu giấy vừa rơi ra) | P1 | ✅ |
| IT-KEY | Chìa khóa đồng nhỏ | – | kiểu cổ, đầu chìa có hoa văn, khớp với ổ khóa ở BG-04 | P1 | ✅ |
| IT-TOOL-1 | Giẻ lau | 1 | đồ trang trí cho bàn đầy | P2 | ✅ |
| IT-TOOL-2 | Bàn chải nhỏ | 2 | | P2 | ✅ |
| IT-TOOL-3 | Lọ dầu đánh bóng | 3 | | P2 | ✅ |
| GEN-TIN | Hộp thiếc linh kiện của bà (máy sinh đồ) | – | 2 trạng thái: nghỉ / đang sinh đồ | P1 | ✅ |
| IT-BOX-1…6 | Chuỗi hộp nhạc gỗ (màn 2) | 1–6 | mảnh gỗ vụn → thanh gỗ → khung hộp → hộp có nắp → hộp chạm hoa văn → hộp nhạc có ngăn bí mật (đặc biệt). Concept: `icons-v3/BOX-sheet-1.png` | P1 | ✅ |
| GEN-CHEST | Rương gỗ cũ (máy sinh đồ màn 2) | – | góc đồng, nắp hé, mảnh gỗ thò ra | P1 | ✅ |
| IT-KEY-FULL | Chìa khóa đồng hoàn chỉnh | – | đầu hình trái tim, thay cho IT-KEY. Concept: `icons-v3/KEY-sheet-3.png` (bản không quầng sáng) | P1 | ✅ |
| IT-KEY-L / IT-KEY-R | Nửa trái / nửa phải chìa khóa | – | vết gãy khớp nhau, không quầng sáng; mỗi màn rơi ra một nửa | P1 | ✅ |
| TILE-CLOTH | Khăn phủ bụi | – | phủ trên ô khóa, có trạng thái lật ra | P2 | ✅ |
| TILE-BOX | Thùng các-tông cũ | – | ô chứa món ngẫu nhiên | P2 | ✅ |

**Biến thể B/C (P3):** chuỗi gốm 5 cấp kết thúc bằng bình sứ nứt; trang sổ cái cuộn tròn có tên Victor; chuỗi giấy 5 cấp kết thúc bằng bức tranh; bản đồ dưới đèn UV.

## 4. UI
| ID | Asset | Mô tả | Ưu tiên | Dùng lại |
|---|---|---|---|---|
| UI-BUB | Bong bóng thoại | khung giấy da, đuôi trái và phải | P1 | ✅ |
| UI-BAR | Thanh "Restoring..." | khung đồng, phần đầy màu xanh ngọc | P1 | 🔁 |
| UI-BTN-SELL | Nút SELL | nền gỗ đỏ rượu vang, icon đồng xu | P1 | ✅ |
| UI-BTN-KEEP | Nút KEEP IT | nền xanh ngọc, icon kính lúp | P1 | ✅ |
| UI-BTN-CTA | Nút PLAY NOW | to, nổi bật, có trạng thái nhấp nháy | P1 | ❌ |
| UI-HAND | Tay hướng dẫn | bàn tay chỉ, 2 trạng thái: chạm / kéo | P1 | ✅ |
| UI-ICON-COIN | Icon tiền 🪙 | | P1 | ✅ |
| UI-ICON-CLUE | Icon manh mối 🔍 | kính lúp phát sáng xanh ngọc | P1 | ✅ |
| UI-NOTE | Lá thư của bà | mảnh giấy viết tay *"Don't sell the clock."* (nhánh SELL) | P1 | ✅ |
| UI-NOTE-2 | Mẩu giấy trong đồng hồ | giấy gấp tư, 2 trạng thái: gấp / mở có chữ *"It was no accident. — E."*. Chữ viết tay nhưng phải đọc được trong 1 giây | P1 | ✅ |
| UI-BOOK | Cuốn sổ manh mối | đích bay tới của icon manh mối | P2 | ✅ |
| UI-LOGO | Logo "Keepsake Lane" | tên tạm. Làm bản đơn giản, chưa đầu tư nhiều đến khi chốt tên | P1 | 🔁 |

Font: chọn 1 font tiêu đề kiểu serif cổ điển và 1 font nội dung dễ đọc, có license dùng thương mại và nhúng web.

## 5. Hiệu ứng (FX)
| ID | Hiệu ứng | Mô tả | Ưu tiên | Dùng lại |
|---|---|---|---|---|
| FX-MERGE | Lóe sáng khi merge | vòng sáng + vụn lấp lánh, khoảng 0,4s | P1 | ✅ |
| FX-SPAWN | Đồ bật ra từ máy sinh | món nảy ra, có bụi nhỏ | P1 | ✅ |
| FX-HINT | Phát sáng gợi ý | viền nhịp thở quanh cặp có thể ghép | P1 | ✅ |
| FX-SPECIAL | Món đặc biệt | viền xanh ngọc + rung nhẹ | P1 | ✅ |
| FX-REVEAL | Bật nắp đồng hồ | nắp bật, chìa khóa và mẩu giấy rơi ra, bụi rơi | P1 | ✅ |
| FX-KEY | Chìa khóa bay vào ổ | chìa bay theo đường cong tới BG-04, xoay, cửa hé | P1 | ✅ |
| FX-CLUE | Manh mối bay | icon 🔍 bay theo đường cong vào sổ | P2 | ✅ |
| FX-COIN | Đồng xu rơi | nhánh SELL | P2 | ✅ |

Làm bằng code hoặc particle khi có thể, để nhẹ dung lượng.

## 6. Âm thanh
| ID | Âm thanh | Ưu tiên |
|---|---|---|
| SFX-BELL | Chuông cửa tiệm | P1 |
| SFX-RAIN | Mưa nền (lặp) | P1 |
| SFX-MERGE | Tiếng "tách" kim loại khi merge | P1 |
| SFX-SPAWN | Đồ bật ra | P2 |
| SFX-TICK | Tích tắc đồng hồ chạy lại | P1 |
| SFX-REVEAL | Nốt nhạc bí ẩn khi bật nắp | P1 |
| SFX-COIN | Tiếng xu | P2 |
| SFX-DOOR | Cửa gác mái kẽo kẹt | P2 |
| SFX-LOCK | Chìa khóa xoay "cạch" | P1 |
| MUS-01 | Nhạc nền piano nhẹ, hơi buồn, chuyển sang bí ẩn | P1 |

Âm thanh dùng thư viện có license thương mại, hoặc thuê làm. Nén nhỏ (mono, bitrate thấp) để giữ dung lượng playable.

## 7. Tổng khối lượng cho bản A (P1 + P2)
| Nhóm | Số lượng |
|---|---|
| Nền và cảnh | 5 |
| Chân dung nhân vật | 3 nhân vật, 6 biểu cảm |
| Icon đồ vật + máy sinh đồ + ô | 14 (6 cấp đồng hồ, cấp 6 có 2 trạng thái; chìa khóa; 3 đồ nghề; hộp thiếc; khăn phủ; thùng) |
| UI | 12 |
| FX | 8 (phần lớn làm bằng code) |
| Âm thanh | 10 |

Phần lớn asset (khoảng 80%) dùng lại được trong game thật. Nếu concept 2D ở bước 1 thất bại thì chưa vẽ bộ này. Ở bước 1 chỉ cần BG-01, BG-03, IT-CLK-6, IT-KEY, UI-NOTE-2 và 3 chân dung chính ở mức concept.
