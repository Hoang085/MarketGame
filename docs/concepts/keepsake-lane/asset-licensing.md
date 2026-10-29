# Giấy phép asset AI: Keepsake Lane
Kiểm ngày 2026-10-26. Đây là đọc điều khoản công khai, **không phải tư vấn pháp lý**. Trước khi phát hành game hoặc chạy quảng cáo lớn, nên nhờ người làm sở hữu trí tuệ xem lại.

## 1. fal (nền tảng mình gọi model qua)
Nguồn: [Terms of Service, cập nhật 08/09/2026](https://fal.ai/legal/terms-of-service), [FAQ thương mại](https://fal.ai/docs/documentation/model-apis/faq#can-i-use-generated-files-for-commercial-purposes)

- **Mỗi model có giấy phép riêng.** Trang model gắn nhãn `Commercial use` thì dùng thương mại được; nhãn `Research only` thì không.
- Tất cả model dự án đã dùng đều có `licenseType: commercial` trên trang model của fal:

| Model | Dùng cho | Giấy phép trên fal |
|---|---|---|
| `fal-ai/elevenlabs/sound-effects/v2` | 16 hiệu ứng âm thanh + tiếng mưa | Commercial use |
| `elevenlabs/music/v2.5` | nhạc nền | Commercial use |
| `fal-ai/flux-pro/v1.1` | nền, chân dung, concept | Commercial use |
| `google/nano-banana-2.1/edit` | icon v3, cửa gác mái mở | Commercial use |
| `fal-ai/recraft/v3/text-to-image` | icon v2 (đã loại) | Commercial use |
| `fal-ai/birefnet/v2` | tách nền chân dung | Commercial use |

- **Điều fal không cam kết:** không bảo đảm output là duy nhất, không vi phạm quyền bên thứ ba, hay có quyền sở hữu trí tuệ. Người khác có thể nhận output giống hoặc tương tự. Người dùng tự chịu trách nhiệm không dùng output vi phạm quyền của ai.
- Bản điều khoản hiện tại **không có câu nào nói rõ "khách hàng sở hữu output"**. Chỉ có câu khách hàng sở hữu Input, và Output được xếp vào thông tin mật của khách hàng.
- **Model của bên thứ ba** (như ElevenLabs) "có thể chịu thêm điều khoản của nhà cung cấp".
- **Cấm:** dùng output để huấn luyện hoặc làm sản phẩm cạnh tranh với model đó; tạo nội dung sao chép tài sản đã dùng để huấn luyện model.

## 2. ElevenLabs: hiệu ứng âm thanh
Nguồn: [ElevenLabs Sound Effects, FAQ thương mại](https://elevenlabs.io/sound-effects/commercial)

- Hiệu ứng âm thanh **miễn phí bản quyền (royalty free), dùng được cho dự án thương mại**.
- Gói Free bắt buộc ghi nguồn elevenlabs.io; gói trả phí không cần.
- Không được bán hoặc cấp phép lại công cụ, không dùng output để làm sản phẩm cạnh tranh.
- **Với dự án mình:** dùng trong playable ad và trong game được. Vẫn còn một câu hỏi: gọi qua fal thì áp quy tắc ghi nguồn của gói nào (xem mục 4).

## 3. ElevenLabs: nhạc (Eleven Music), có giới hạn quan trọng
Nguồn: [ElevenLabs Music Terms, cập nhật 09/10/2026](https://elevenlabs.io/music-terms), Phụ lục A "Music Commercial Rights"

- Với mọi gói **trừ "Enterprise Music"**: *"All online and offline commercial use permitted, except film, TV, radio, and Studio Games"*. Tức là được dùng thương mại, trừ phim, TV, radio và **Studio Game**.
- **Studio Game** là game phát hành công khai và kiếm tiền (bán, quảng cáo hay hình thức khác), **trừ Indie Game**.
- **Indie Game** là game có tổng doanh thu **dưới 500.000 USD** kể từ lần phát hành thương mại đầu tiên, **và** do một đơn vị có doanh thu từ tất cả game **dưới 1.000.000 USD** trong năm tài chính gần nhất (tính sau phí store, đã gồm công ty liên kết).
- Khi game hết là Indie Game, có **60 ngày** để chuyển sang gói cho phép Studio Game. Quá hạn thì phải ngừng dùng nhạc đó trong game. Các bản đã phát hành trước thời hạn được giữ nguyên.
- Gói Free: chỉ dùng cá nhân, phi thương mại. Gói Starter trở lên mới được dùng thương mại.
- Không được đưa nhạc lên nền tảng nghe nhạc ở gói Free và Starter. Không được gom nhạc thành thư viện cho người khác dùng.
- Không được dùng tên nghệ sĩ, tên bài hát, tên hãng đĩa trong prompt. Prompt nhạc của mình không vi phạm điều này.

**Với dự án mình:**
- **Playable ad và quảng cáo online:** nằm trong phạm vi "online commercial use", không phải TV hay radio, nên **được dùng**.
- **Nhạc trong game phát hành thật:** đội 3–6 người, chưa có doanh thu, nên lúc đầu game thuộc **Indie Game**. Nhưng merge-2 nếu thành công **rất dễ vượt 500.000 USD**. Khi đó nhạc này phải đổi sang gói Enterprise Music, hoặc thay nhạc, trong 60 ngày.
- **Đi với publisher:** nếu publisher phát hành và họ có doanh thu game từ 1 triệu USD/năm trở lên thì **ngay từ đầu đã không còn là Indie Game**. Đây là trường hợp khả năng cao nhất theo kế hoạch hiện tại.
- **Khuyến nghị:** giữ nhạc ElevenLabs cho playable và quảng cáo test. Nhạc trong game thật nên **thuê nhạc sĩ hoặc mua nhạc có license**, tránh phải đổi gói hay đổi nhạc sau này.

## 4. Còn chưa rõ: mua qua fal thì áp gói nào của ElevenLabs?
Điều khoản ElevenLabs tính quyền theo gói của tài khoản ElevenLabs. Mình gọi model qua fal, không có tài khoản ElevenLabs, và cả fal lẫn ElevenLabs đều không ghi rõ trường hợp này áp gói nào. fal ghi model là "Commercial use", nhưng cũng nói model bên thứ ba có thể chịu thêm điều khoản của nhà cung cấp.

**Nên làm:** gửi email hỏi fal (support@fal.ai) và xin trả lời bằng văn bản cho 3 câu:
1. Output của ElevenLabs Sound Effects v2 và Music v2.5 gọi qua fal có cần ghi nguồn ElevenLabs không?
2. Nhạc từ Music v2.5 qua fal dùng trong game di động thương mại (có thể vượt ngưỡng Indie Game) có được không?
3. Áp hạng mục nào trong bảng Music Commercial Rights của ElevenLabs?

## 5. Ảnh: lưu ý riêng
- Model ảnh đều có nhãn thương mại, nhưng **icon v3 được sinh bằng ảnh chụp Travel Town làm mẫu phong cách**. Điều khoản fal cấm *"tạo nội dung sao chép hoặc bắt chước sát tài sản gốc"*. Ngoài ra còn rủi ro bị cho là giống tài sản của Moon Active.
- **Giữ nguyên quy tắc cũ:** ảnh AI chỉ dùng nội bộ và cho quảng cáo test; asset game thật do họa sĩ vẽ lại.
- Nếu dùng icon v3 trong quảng cáo test chạy thật thì cần cân nhắc kỹ. An toàn hơn là sinh lại icon **không dùng ảnh Travel Town làm mẫu**, chỉ mô tả phong cách bằng chữ, hoặc để họa sĩ vẽ.
