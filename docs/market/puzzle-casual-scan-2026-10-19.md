# Thể loại con puzzle/casual nào đang nổi ở từng thị trường (VN, US, GB, IN, BR, MX, TR)?
Ngày: 2026-10-19 | Thị trường: VN, US, GB, IN, BR, MX, TR (iOS + Google Play) | Dữ liệu bảng xếp hạng: từ 2026-10-19 đến 2026-10-19 (**1 ngày**)

> **Hạn chế lớn nhất:** database mới có 1 ngày chụp bảng xếp hạng, nên báo cáo này **không đo được đà tăng/giảm hạng**. "Đang nổi" ở đây được suy ra từ: (1) mức độ hiện diện của sub-genre trong top 100 hôm nay, (2) ngày phát hành của game (game ra 2025–2026 mà đã vào top ở nhiều nước), (3) tổng lượt cài đặt toàn cầu trên Google Play (`maxInstalls`, là số **ước tính** của store). Chưa có số AppMagic nào (xem mục AppMagic).

## Kết luận chính

1. **"Jam / tap-away / escape" (xếp xe bus, mũi tên, trượt khối) là sub-genre puzzle đang chiếm nhiều chỗ nhất trong top Free ở phương Tây và IN/TR**, và đã chuyển sang kiếm tiền được ở US/GB. US: 19 lượt xuất hiện top 100 Free (8 trong top 20), GB 16 (8), IN 17, TR 13. Ở Grossing US/GB có 13/18 lượt. Game dẫn: Block Out! (Free #2 ở US/GB/BR/MX, #3 IN, ra 31/10/2025), Amaze GO! (Google: ~123 triệu cài đặt từ 13/02/2026), Bus Fever Party (top 20 Free cả 7 nước iOS), Bus Traffic Fever (~26 triệu cài đặt từ 19/02/2026). Tin cậy: **Trung bình**. Hiện diện rộng và game rất mới là bằng chứng mạnh, nhưng chưa có trend nhiều ngày.
2. **Sub-genre mới nhất có tín hiệu kiếm tiền là "pixel-art clear / conveyor" (Pixel Flow-like: Pixel Flow!, Colony Flow!, Food Hunt, Yarn Loop, Loop Sort)**. Game ra từ 08/2025 đến 06/2026 đã vào Grossing US (Pixel Flow #16, Colony Flow #17) và GB (#21–23), Food Hunt có mặt ở Grossing 6 nước. Đây là cụm duy nhất trong nhóm "puzzle mới" có số lượt Grossing ngang Free (US 8/8, GB 9/10). Tin cậy: **Trung bình**. Lượt cài còn nhỏ (4–14 triệu) và review phàn nàn quảng cáo, nhưng khớp mô hình hybrid IAP + ads.
3. **Doanh thu puzzle vẫn do Match-3 và Merge nắm** ở mọi nước trừ VN và TR: Match-3 có 18–26 lượt Grossing mỗi nước (8–11 game trong top 20), Merge 17–27. Hầu hết là game cũ (Candy Crush 2012, Royal Match 2021, Gossip Harbor 2022). Ngoại lệ mới: Royal Kingdom (11/2024), Tasty Travels (02/2024), Hotel Legacy, Jelly Busters (Moon Active). Tin cậy: **Cao** về hiện trạng, **Thấp** về khả năng một studio mới chen vào.
4. **Khác biệt lớn theo nước:** VN thiên về brain/tricky (15 lượt Free, 4 trong top 20), hyper-casual và pet/dress-up; Grossing VN gần như không có puzzle (5%), mà là RPG/SLG cộng Coin Master #1. TR có Grossing bị **okey/board xã hội** chiếm (24 lượt, 6 trong top 20), còn Word mạnh ở Free (Word Tiles #6). IN có hyper-casual/.io và Ludo áp đảo. BR/MX nghiêng về party/mini-game nhiều người, offline games và pet ảo. Tin cậy: **Trung bình**.
5. **Các cụm nhỏ nhưng mới và đang lan nhanh:** (a) *Physics smash* (Smash Fest! #1 Free iOS TR, top 21 cả 7 nước; Royal Smash ~12 triệu cài đặt chỉ từ 24/06/2026); (b) *logic hybrid* (Meowdoku: #1 Free iOS US/GB, ~26,6 triệu cài đặt từ 04/2026; Rotate Rings ~6,4 triệu từ 31/07/2026). Hai cụm này chủ yếu có ở top Free, Grossing gần như không có, tức là đang kiếm tiền chủ yếu bằng quảng cáo. Tin cậy: **Trung bình–Thấp**. Clone đã xuất hiện rất nhanh (search "smash fest" trên Google cho ra 3 game cùng tên).

## Bằng chứng

### Cách phân loại sub-genre
`app_genres` chỉ có mã thể loại lớn (PUZZLE/CASUAL...), nên sub-genre được **gán bằng luật theo tên game** (regex, kèm kiểm tra tay mô tả store của khoảng 25 game chính). Đây là **suy luận của tôi**, sai số chừng vài lượt mỗi ô. Một game có cả bản iOS và Android được đếm 2 lần, nên mỗi nước có tối đa 200 lượt (100 iOS + 100 Android) cho mỗi loại bảng xếp hạng. Script ở scratchpad (`classify.cjs`), có thể chuyển vào `tools/` nếu muốn lặp lại.

### Bức tranh bảng xếp hạng: số lượt xuất hiện trong top 100 (iOS + Android), [trong ngoặc: top 20]

**Top Free (lượt tải gần đây)**

| Sub-genre | VN | US | GB | IN | BR | MX | TR |
|---|---|---|---|---|---|---|---|
| Jam / tap-away / escape (bus, arrow, block out) | 4[1] | **19[8]** | **16[8]** | **17[3]** | 7[4] | 10[3] | 13[3] |
| Hyper-casual / .io / runner | **19[1]** | 17[2] | 12[2] | **19[6]** | 15[4] | 17[4] | 13[3] |
| Brain / tricky puzzle | **15[4]** | 5[2] | 8[3] | 6[2] | 6[2] | 9[2] | 3[0] |
| Logic / number (sudoku-like, Meowdoku) | 8[2] | 5[4] | 7[4] | 6[1] | 4[2] | 5[2] | 3[1] |
| Merge-2 + story | 2[0] | 7[2] | **16[3]** | 5[0] | 10[1] | 6[1] | 6[2] |
| Tile / mahjong / triple-match | 3[0] | 11[2] | 8[2] | 3[1] | 3[1] | 2[2] | 2[1] |
| Word | – | 8[3] | 13[2] | 3[0] | 3[0] | 2[0] | 7[2] |
| Pixel-art clear / conveyor | 2[0] | 8[2] | 10[0] | 2[0] | 1[0] | 1[0] | 3[1] |
| Match-3 / blast | 2[0] | 8[0] | 7[1] | 7[2] | 6[1] | 8[1] | 7[1] |
| Physics smash | 2[1] | 7[2] | 3[2] | 1[1] | 2[0] | 4[1] | 4[2] |
| Sort (water/ball/goods) | 1[0] | 6[2] | 6[2] | 1[1] | 4[0] | 3[1] | 2[0] |
| Block puzzle (Block Blast-like) | 6[2] | 4[2] | 4[2] | 4[1] | 5[3] | 5[3] | 3[3] |
| Solitaire-puzzle hybrid | 1[0] | 7[1] | 7[1] | – | – | – | 1[0] |
| Party / nhiều người / offline mini-games | 8[1] | 5[0] | 5[0] | 5[1] | **12[1]** | 8[2] | 5[0] |
| Pet ảo / dress-up | **11[1]** | 1[0] | 1[0] | 6[0] | 10[0] | 6[0] | 5[0] |
| ASMR / satisfying | 8[1] | 3[0] | 3[0] | 3[0] | 7[0] | 6[1] | 4[0] |
| Music / rhythm | 6[2] | 2[1] | 2[1] | 2[0] | 4[1] | 2[2] | 3[0] |
| Board/card xã hội (ludo, okey, bingo) | 9[1] | 3[1] | 4[1] | 5[2] | 4[0] | 3[0] | 8[1] |
| Screw / nut-bolt | – | 2[0] | 1[0] | – | 1[1] | 1[0] | 2[0] |
| Hidden object | 1[1] | 3[0] | 4[0] | – | 1[0] | 1[0] | – |

**Top Grossing (doanh thu)**

| Sub-genre | VN | US | GB | IN | BR | MX | TR |
|---|---|---|---|---|---|---|---|
| Match-3 / blast | 8[3] | **25[10]** | **26[11]** | **21[7]** | 21[8] | 21[8] | 18[8] |
| Merge-2 + story | 11[3] | 18[3] | **27[6]** | 20[4] | **24[6]** | 17[3] | 21[4] |
| Jam / tap-away / escape | – | 13[1] | 18[1] | 5[0] | 4[0] | 10[0] | 5[0] |
| Pixel-art clear / conveyor | 2[0] | 8[2] | 9[0] | 4[0] | 4[0] | 4[0] | 2[0] |
| Coin-looter / dice-board | 2[2] | 9[4] | 8[7] | 6[2] | 6[2] | 4[3] | 4[0] |
| Board/card xã hội | 2[0] | 9[0] | 10[1] | 16[1] | 9[0] | 2[0] | **24[6]** |
| Farm / town sim | 6[1] | 4[2] | 5[2] | 7[2] | 7[2] | 4[1] | 5[0] |
| Solitaire-puzzle hybrid | – | 5[0] | 6[2] | 1[0] | 2[0] | 2[0] | – |
| Word | – | 5[0] | 3[0] | – | 3[0] | 1[0] | 1[0] |
| Tile / mahjong | – | 3[1] | 2[0] | 3[0] | 2[0] | 2[0] | – |
| Sort / Screw | – | 4[0] | 5[0] | 2[0] | 5[0] | 2[0] | 1[0] |
| Block puzzle, brain/tricky, logic, coloring, music | – | – | – | – | – | – | – |

Đọc nhanh: Block puzzle, brain/tricky, logic và physics smash **không có mặt ở Grossing**, nghĩa là tiền đến từ quảng cáo. Jam và pixel-flow là hai nhóm puzzle "mới" duy nhất có mặt rộng ở Grossing.

### Game mới nổi đáng chú ý (ra 2025–2026, có mặt ở nhiều nước)

| Game (dev) | Sub-genre | Ra mắt | Cài đặt Google (ước tính, toàn cầu) | Vị trí nổi bật 19/10 |
|---|---|---|---|---|
| Amaze GO! (Oakever) | Arrow / tap-away | 13/02/2026 | ~123 triệu | Free Google US #6, GB #3; iOS 6 nước |
| Block Out! (Grand Games) | Jam / slide block | 31/10/2025 (iOS) | n/a (chưa lấy) | Free iOS #2 US/GB/BR/MX, #3 IN; Grossing US #18 |
| Bus Fever Party! (Lumi) | Bus jam | 04–06/2025 | ~16,6 triệu | Top 20 Free iOS cả 7 nước (TR #3, MX #5) |
| Bus Traffic Fever! (Goodroid) | Bus jam | 02–03/2026 | ~26,3 triệu | Free GB #5; Grossing US #26, GB #24 |
| Meowdoku! (Oakever) | Logic (sudoku + minesweeper) | 04–05/2026 | ~26,6 triệu | Free #1 iOS + Google ở US/GB, #4 BR |
| Brain Puzzle 3 (SmallStep/JoyGame) | Brain / tricky | 12/2025 | ~25,5 triệu | Free VN #8, MX #4, GB #9 |
| Pixel Flow! (Loom Games) | Pixel-art conveyor | 08/2025 | ~13,7 triệu | Grossing US #16, GB #23 |
| Colony Flow! (ABI) | Pixel-art conveyor | 06/2026 | ~4,4 triệu | Grossing US #17, GB #21, BR #25; vào cả Grossing VN (#50) |
| Food Hunt: Pixel Puzzle (Funfinity) | Pixel-art color sort | 05/2026 | ~5,9 triệu | Grossing 6 nước (#47–71), Free TR #15 |
| Smash Fest! (Flow Games) | Physics smash | 16/12/2025 (iOS) | iOS-only trên BXH | Free iOS TR #1, top 21 cả 7 nước |
| Royal Smash! (Cypher) | Physics smash | 24/06/2026 | ~12 triệu | Free Google US #4 |
| Rotate Rings (Nebula) | Logic / ring | 31/07/2026 | ~6,4 triệu | Free Google US #2, MX #5 |
| Word Tiles (Agave) | Word | 07/2026 | ~0,8 triệu | Free iOS TR #6, US #16 |

Số cài đặt là `maxInstalls` của Google Play: đây là **số ước tính toàn cầu** mà store công bố, không phải số đo theo nước. Thuộc tính "có IAP" lấy từ store: gần như tất cả đều bán IAP và có quảng cáo.

### Lượt tải & doanh thu ước tính (AppMagic)

| game | nước | kỳ | lượt tải | doanh thu USD | ngày ghi nhận |
|---|---|---|---|---|---|
| (chưa có số) | – | – | không có số liệu | không có số liệu | – |

- `market_estimates` trống, chưa có số AppMagic nào.
- Phiên này không kết nối được Claude in Chrome (trình duyệt đã đăng nhập của người dùng). Tôi chỉ mở được trang AppMagic công khai bằng trình duyệt nội bộ (chưa đăng nhập): trang Amaze GO! hiện ô Revenue với nút "Log in to unlock". Tôi dừng ở đó, không đăng nhập, không bấm chấp nhận cookie. Thông tin công khai duy nhất đọc được là các tag phân loại của AppMagic cho Amaze GO! (Hyper-casual, Puzzle, Block Puzzle, Slide, Arrow Puzzle).
- Danh sách link để người dùng tự mở xem có ở mục "Đề xuất".

### Người chơi nói gì (review Google Play mới nhất, khoảng 50 review/game)

- **Amaze GO! (US, điểm TB 3,84):** khen "thư giãn, giúp ngủ", "nghĩ trước 3–4 bước". Chê: quảng cáo dài, có quảng cáo không thoát được phải tắt app, màn chơi lặp lại, mũi tên khó nhìn với người loạn thị. Có dấu hiệu người chơi đến từ ứng dụng trả thưởng (nhắc tới "bux", tiền).
- **Pixel Flow! (US, 3,26, thấp nhất):** thích vòng chơi "gây nghiện", nhưng nhiều review 1–2 sao về quảng cáo sau *mỗi* màn, mua "no ads" mà vẫn thấy quảng cáo, khoảng level 65 có màn "phải trả tiền mới qua", màu ẩn biến thành may rủi. Nhiều review nhắc Freecash / coin Webtoon: **một phần thứ hạng có thể do UA trả thưởng (offerwall)**, nên thứ hạng Free có thể bị thổi phồng.
- **Royal Smash! (US, 4,34):** thích cảm giác phá hủy "giải stress", hợp mọi lứa tuổi. Chê: "không khác gì các game bắn đại bác khác", phải xem 4 quảng cáo để có bóng lớn. Cũng có người chơi mong "kiếm tiền thật" (offerwall).
- **Brain Puzzle 3 (VN, 3,58):** gần như mọi review tiếng Việt đều nói **quá nhiều quảng cáo**, cần mạng mới qua màn. Người chơi vẫn thích tình huống hài hước, và phần 3 được khen đã giảm quảng cáo so với phần 2.
- **Bus Fever Party! (BR, 3,88):** "nhẹ, kích thích tư duy", nhưng từ khoảng level 191 quảng cáo dày lên, có màn "không thể qua nếu không xem quảng cáo/tiêu coin", gói No Ads không giữ đúng hứa hẹn.

Mẫu số chung: **cơ chế lõi được khen, còn monetization bằng quảng cáo dày đặc là lý do số 1 khiến người chơi gỡ game** ở cả US, BR và VN. Đây là khoảng trống để khác biệt hóa.

### Khác biệt giữa các thị trường

- **US / GB:** đa dạng puzzle nhất. Jam, tile/mahjong (Vita Mahjong top 10), word, solitaire-hybrid, pixel-flow và merge (GB rất mạnh: 16 lượt Free, 27 lượt Grossing). Tỷ lệ Free→Grossing cao nhất (iOS GB 46%), người chơi nạp tiền.
- **VN:** top Free nghiêng về brain/tricky, hyper-casual, pet/dress-up và board địa phương (ZingPlay). Grossing VN gần như không có puzzle thuần (5%): Coin Master #1, Travel Town, Candy Crush, còn lại là RPG/SLG. Tỷ lệ Free→Grossing thấp nhất (Android 14%). Game online phát hành tại VN cần giấy phép G1 (Nghị định 147/2024).
- **IN:** hyper-casual/.io dẫn đầu Free (19 lượt, 6 trong top 20), jam đứng thứ hai (Block Out #3, Arrow Puzzle #5). Grossing có Ludo và Coin Master. Android 12% Free→Grossing nên gần như chỉ kiếm được bằng quảng cáo.
- **BR / MX:** party/mini-game nhiều người, offline games, pet ảo và merge (BR). Jam và brain/tricky lên top 5 Free MX. Grossing do Match-3, Merge, Coin Master nắm.
- **TR:** Grossing do okey/board xã hội chiếm. Free: jam (Bus Fever #3), physics smash (Smash Fest #1), word (Word Tiles #6), block puzzle (Block Blast #2). Nhiều studio puzzle hàng đầu là người Thổ (Dream, Peak, Grand Games, Loom, Flow Games, Rotatelab).

## Cơ hội

1. **Jam / tap-away có meta và monetization "dễ chịu" hơn** (arrow, bus, slide block). Hiện diện rộng nhất ở Free ở 6/7 nước và đã có chỗ ở Grossing US/GB. Production nhẹ, level-design là lợi thế cạnh tranh chính. Lý do chọn: nhu cầu đã được chứng minh xuyên văn hóa, và review cho thấy người chơi bỏ game vì quảng cáo chứ không phải vì chán cơ chế. Rủi ro: đông đối thủ, CPI phương Tây cao.
2. **Pixel-art clear / conveyor (Pixel Flow-like)**: cụm mới nhất (8/2025–6/2026) đã cho thấy khả năng IAP (vào Grossing US/GB, Food Hunt có mặt ở Grossing 6 nước). Mỗi màn là một bức tranh pixel nên dễ làm nội dung theo chủ đề và văn hóa từng nước. Lý do chọn: còn sớm, số người chơi chưa lớn (4–14 triệu cài/game) nên vẫn còn cửa. Rủi ro: cửa sổ ngắn, đối thủ tung clone nhanh (Colony Flow ra sau Pixel Flow 10 tháng đã ngang hạng).
3. **Logic hybrid "brain-casual" (Meowdoku-like) kết hợp tricky-puzzle cho VN/MX/IN**: Meowdoku lên #1 US/GB trong 6 tháng (~26,6 triệu cài), còn brain/tricky dẫn Free ở VN. Đây là thể loại phù hợp chi phí thấp, có thể địa phương hóa câu đố (văn hóa VN, LATAM), kiếm tiền chủ yếu bằng quảng cáo. Lý do chọn: chi phí sản xuất thấp, phù hợp để thử thị trường VN trước. Rủi ro: doanh thu/người dùng thấp, gần như không có IAP.

(Match-3 và merge là nơi có nhiều tiền nhất nhưng do các ông lớn nắm, chi phí UA/LiveOps rất cao. Tôi không xếp vào cơ hội cho studio nhỏ, nhưng creative-director cần cân nhắc.)

## Rủi ro
- **Thứ hạng Free bị thổi phồng bởi offerwall / UA trả thưởng** (review Pixel Flow, Royal Smash, Amaze GO), nên hạng cao chưa chắc là nhu cầu tự nhiên.
- **Clone rất nhanh** (Smash Fest có ít nhất 3 bản cùng tên trên Google), vòng đời xu hướng có thể chỉ vài tháng.
- **Monetization quảng cáo dày** là phàn nàn số 1, và Google/Apple đang siết chính sách quảng cáo khó thoát.
- **VN:** cần G1, doanh thu puzzle thấp; IN có ARPU rất thấp.
- Dữ liệu chỉ 1 ngày, phân loại sub-genre bằng luật tên có sai số.

## Đề xuất cho creative-director / producer
Các câu hỏi cần anh/chị quyết định:
1. Ưu tiên **thị trường mục tiêu** nào: phương Tây (US/GB, tiền nhiều, CPI cao, cần IAP) hay VN/LATAM/IN (rẻ, kiếm bằng quảng cáo)? Lựa chọn sub-genre phụ thuộc vào điều này.
2. Chọn hướng **nhanh-rẻ** (logic/brain, jam tap-away, prototype 4–6 tuần, test CPI) hay **đặt cược hybrid IAP** (pixel-flow hoặc jam có meta)?
3. Có chấp nhận chiến lược "ít quảng cáo hơn đối thủ" làm điểm khác biệt (ảnh hưởng ARPDAU)?
4. Có làm soft-launch test CPI ở 1–2 nước (ví dụ BR + PH/VN) cho 2–3 prototype trước khi chốt không?

Việc phân tích tiếp theo (market-analyst làm được):
- Chạy `npm run collect` **hằng ngày trong 2–3 tuần** để có trend thật (leo hạng, tuổi thọ trên top).
- Người dùng mở các link AppMagic sau (khi đã đăng nhập), xem lượt tải và doanh thu 30 ngày (toàn cầu + US + nước quan tâm), rồi dán số cho tôi ghi vào `market_estimates`. Nếu link không khớp, dùng ô tìm kiếm của AppMagic với tên game:
  1. Amaze GO!: https://appmagic.rocks/iphone/amaze-go/6758326278
  2. Block Out!: https://appmagic.rocks/iphone/block-out/6752672568
  3. Bus Fever Party!: https://appmagic.rocks/iphone/bus-fever-party/6746743297
  4. Bus Traffic Fever!: https://appmagic.rocks/iphone/bus-traffic-fever/6759763476
  5. Pixel Flow!: https://appmagic.rocks/iphone/pixel-flow/6751056652
  6. Colony Flow!: https://appmagic.rocks/iphone/colony-flow/6779167923
  7. Food Hunt: Pixel Puzzle: https://appmagic.rocks/iphone/food-hunt-pixel-puzzle/6769314786
  8. Meowdoku!: https://appmagic.rocks/iphone/meowdoku/6761760135
  9. Smash Fest!: https://appmagic.rocks/iphone/smash-fest/6748084174
  10. Royal Smash!: https://appmagic.rocks/iphone/royal-smash-physics-puzzle/6780891673
- Điền mẫu link AppMagic vào `config.json` → `links` (cần người dùng đồng ý) để báo cáo tự sinh link.

## Giới hạn của phân tích
- 1 ngày dữ liệu: không có trend, không có tuổi thọ trên top.
- Sub-genre gán bằng luật tên game (suy luận), không phải taxonomy chính thức. Một game được đếm cả iOS và Android.
- `maxInstalls` là số Google công bố, toàn cầu, làm tròn và có độ trễ. Không có số theo nước.
- Review: khoảng 50 review mới nhất/game cho 5 game, không đại diện thống kê.
- Chưa có số doanh thu/lượt tải AppMagic nào.

## Nguồn
- `tools/game-market-tracker/data/market.db` (chart_snapshots, app_genres, app_metrics), ngày 2026-10-19.
- `tools/game-market-tracker/reports/report-2026-10-19.md`.
- Google Play / App Store qua `deep-dive.js app|reviews|search` (ngày phát hành, maxInstalls, IAP, review US/VN/BR).
- AppMagic, trang công khai của Amaze GO! (chỉ thấy tag phân loại, doanh thu bị khóa sau đăng nhập).
