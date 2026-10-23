# Game Market Tracker

Theo dõi bảng xếp hạng game mobile (App Store + Google Play) ở nhiều quốc gia mỗi ngày, lưu lịch sử vào SQLite, rồi tạo báo cáo so sánh chéo giữa các thị trường kèm danh sách game cần kiểm tra trên AppMagic / Sensor Tower.

Thị trường mặc định: **VN, US, GB (Anh), IN, BR, MX, TR**. Lưu ý mã của Anh là `gb`, không phải `uk`.

## Báo cáo có gì

1. **Game có mặt ở nhiều thị trường**: nằm trong top 30 ở ít nhất 3 nước.
2. **Leo hạng mạnh nhất**: so với 7 ngày trước, theo từng nước.
3. **Mới lọt bảng xếp hạng**: lọt mới ở nhiều nước cùng lúc là tín hiệu xu hướng.
4. **Tăng lượt cài nhanh nhất** (Android): dựa trên `maxInstalls`, là số **toàn cầu**, không tách theo nước.
5. **Hồ sơ kiếm tiền theo thị trường**: tỷ lệ game top Free cũng ở top Grossing. Cao = thị trường chịu nạp IAP, thấp = thiên về quảng cáo.
6. **Tỷ trọng thể loại theo thị trường**: mỗi thể loại chiếm bao nhiêu % top 100 Free (lượt tải) và Grossing (doanh thu) ở từng nước, gộp iOS + Android, kèm thể loại dẫn đầu từng nước và mức thay đổi so với 7 ngày trước.
7. **Danh sách cần kiểm tra** + file CSV, có link mở thẳng store / AppMagic / Sensor Tower.

Mục 2–4 và cột thay đổi ở mục 6 chỉ xuất hiện khi đã có từ 2 ngày dữ liệu trở lên.

### Thể loại được lấy thế nào

Bảng xếp hạng không kèm thể loại, nên `collect` tra thêm và lưu vào bảng `app_genres` (mỗi game chỉ tra một lần):

- **iOS**: dùng API lookup của iTunes, 100 game một lần gọi. Apple không chỉ rõ thể loại chính, nên game khai hai thể loại con (ví dụ Puzzle + Casual) được xếp theo thể loại đứng trước; danh sách đầy đủ nằm ở cột `sub_genres`.
- **Android**: gọi trang chi tiết của từng game. Lần chạy đầu có thể có 500–800 game mới, nên mỗi lần chỉ tra tối đa `genreLookupMaxPerRun` game (mặc định 400, khoảng 10 phút). Phần còn lại được tra ở các lần sau, và trong lúc đó báo cáo ghi rõ có bao nhiêu game chưa có thể loại.
- Mã thể loại được chuẩn hóa chung cho hai store (`PUZZLE`, `ROLE_PLAYING`...). `ARCADE` chỉ có trên Android; `DICE`, `FAMILY` chỉ có trên iOS.

Ví dụ truy vấn: `npm run query -- "SELECT g.genre_key, COUNT(*) FROM chart_snapshots c JOIN app_genres g USING (store, app_id) WHERE c.date = (SELECT MAX(date) FROM chart_snapshots) AND c.country = 'vn' AND c.collection = 'TOP_FREE' GROUP BY 1 ORDER BY 2 DESC"`

## Cài đặt

Cần Node.js 18 trở lên.

```bash
npm install
npm run demo        # xem thử báo cáo với dữ liệu giả lập: reports/demo/
npm run collect     # thu thập dữ liệu thật hôm nay (khoảng 5–10 phút)
npm run report      # tạo báo cáo vào reports/
```

## Chạy tự động mỗi ngày

macOS / Linux (`crontab -e`), chạy 8h sáng:

```
0 8 * * * cd /duong/dan/game-market-tracker && npm run collect && npm run report >> logs.txt 2>&1
```

Windows: dùng Task Scheduler, tạo tác vụ hằng ngày chạy `cmd /c "cd /d C:\duong\dan\game-market-tracker && npm run collect && npm run report"`.

Dữ liệu càng nhiều ngày, báo cáo xu hướng càng có giá trị. Sau 2–4 tuần bạn sẽ thấy rõ chu kỳ của từng thị trường.

## Cấu hình (`config.json`)

| Mục | Ý nghĩa |
|---|---|
| `countries` | Mã quốc gia ISO 2 ký tự. Thêm `id`, `th`, `jp`, `kr`... tùy ý |
| `topN` | Số game lấy mỗi bảng xếp hạng (mặc định 100) |
| `delayMs` | Khoảng nghỉ giữa các lần gọi store. Tăng lên nếu bị lỗi chặn |
| `apple.categories` / `google.categories` | Mặc định là toàn bộ game. Có thể thêm thể loại con, xem danh sách bên dưới |
| `googleDetailsTopN` | Lấy `maxInstalls` cho top N game grossing mỗi nước |
| `genreLookupMaxPerRun` | Số game Android tối đa được tra thể loại mỗi lần chạy (mặc định 400) |
| `watchlist` | Danh sách đối thủ luôn theo dõi, kể cả khi họ rớt khỏi bảng xếp hạng. Google: package name (`com.abc.game`) |
| `report.trendRankCutoff` | Ngưỡng hạng cho mục "nhiều thị trường" |
| `report.genreRankCutoff` | Tính tỷ trọng thể loại trong top N (mặc định 100) |

Thể loại con, ví dụ chỉ theo dõi game giải đố: Apple `GAMES_PUZZLE`, Google `GAME_PUZZLE`. Các mã khác: `ACTION, ADVENTURE, ARCADE, BOARD, CARD, CASINO, CASUAL (chỉ Google), EDUCATIONAL, MUSIC, RACING, ROLE_PLAYING, SIMULATION, SPORTS, STRATEGY, TRIVIA, WORD`. Mỗi thể loại thêm vào sẽ nhân số lượt gọi lên, nên chỉ chọn những gì cần.

## Thêm link AppMagic / Sensor Tower

Cấu trúc link của hai trang này có thể thay đổi, nên bạn tự lấy mẫu một lần:

1. Đăng nhập AppMagic, mở trang của một game Android bất kỳ, copy URL trên thanh địa chỉ.
2. Trong URL, thay package name (ví dụ `com.abc.game`) bằng `{id}` và mã nước (nếu có) bằng `{country}`.
3. Dán vào `links.appmagic_google` trong `config.json`.
4. Làm tương tự cho game iOS (thay số App Store ID bằng `{id}`) và cho Sensor Tower.

Nếu URL có thêm phần tên game (slug) mà không bỏ đi được, hãy dùng URL trang tìm kiếm của site đó với `{id}` làm từ khóa.

Không nên viết script tự động lấy dữ liệu từ AppMagic / Sensor Tower: việc đó thường vi phạm điều khoản sử dụng. Hãy mở link để xem thủ công, hoặc dùng API/MCP chính thức nếu có gói trả phí.

## Dùng cùng Claude Code (CCGS)

Đặt thư mục này cạnh dự án game, sau đó có thể yêu cầu Claude Code:

- "Đọc báo cáo mới nhất trong reports/ và tóm tắt 5 cơ hội đáng chú ý nhất cho game puzzle."
- "Truy vấn data/market.db: game nào lên top grossing ở BR và MX nhưng chưa có ở VN?"
- "So sánh hồ sơ kiếm tiền của IN và US qua 4 tuần gần nhất."

## Giới hạn cần biết

- **Không có doanh thu, không có lượt tải theo quốc gia.** Thứ hạng chỉ cho biết vị trí tương đối. Con số tuyệt đối cần AppMagic / Sensor Tower.
- `maxInstalls` là tổng toàn cầu; iOS không có số lượt cài công khai nào.
- Bảng xếp hạng Google Play lấy bằng scraping, có thể hỏng khi Google thay đổi trang. Khi đó cập nhật thư viện: `npm update google-play-scraper`.
- Gọi quá dày có thể bị store chặn tạm thời. Mặc định đã nghỉ 1,5 giây giữa các lần gọi và tự thử lại 3 lần.

## Công cụ cho agent

| Lệnh | Mục đích |
|---|---|
| `npm run query -- --status` | Dữ liệu đã có bao nhiêu ngày, nước nào |
| `npm run query -- "SELECT ..."` | Truy vấn chỉ-đọc |
| `npm run dive -- reviews google com.abc.game --country br --lang pt` | Đào sâu một game: `app`, `reviews`, `similar`, `developer`, `search`, `suggest` |
| `npm run estimate -- add --source appmagic --store google --id com.abc.game --country vn --period 30d --downloads 120000 --revenue 45000` | Ghi số đọc từ AppMagic |
| `npm run estimate -- list --id com.abc.game` | Xem lại số đã ghi |
