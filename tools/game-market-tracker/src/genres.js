// Chuan hoa the loai game giua App Store va Google Play ve chung 1 bo ma (theo kieu Google: PUZZLE, ROLE_PLAYING...).

// App Store: genreId 7xxx la the loai con cua Games (6014).
export const APPLE_GAME_GENRES = {
  7001: 'ACTION', 7002: 'ADVENTURE', 7003: 'CASUAL', 7004: 'BOARD', 7005: 'CARD', 7006: 'CASINO',
  7007: 'DICE', 7008: 'EDUCATIONAL', 7009: 'FAMILY', 7011: 'MUSIC', 7012: 'PUZZLE', 7013: 'RACING',
  7014: 'ROLE_PLAYING', 7015: 'SIMULATION', 7016: 'SPORTS', 7017: 'STRATEGY', 7018: 'TRIVIA', 7019: 'WORD',
};

export const GENRE_LABEL = {
  ACTION: 'Hành động', ADVENTURE: 'Phiêu lưu', ARCADE: 'Arcade', BOARD: 'Board', CARD: 'Bài', CASINO: 'Casino',
  CASUAL: 'Casual', DICE: 'Xúc xắc', EDUCATIONAL: 'Giáo dục', FAMILY: 'Gia đình', MUSIC: 'Âm nhạc',
  PUZZLE: 'Giải đố', RACING: 'Đua xe', ROLE_PLAYING: 'Nhập vai', SIMULATION: 'Mô phỏng', SPORTS: 'Thể thao',
  STRATEGY: 'Chiến thuật', TRIVIA: 'Đố vui', WORD: 'Chữ',
};
export const genreLabel = (k) => (k ? GENRE_LABEL[k] ?? k : 'Chưa rõ');

// Google: genreId dang GAME_PUZZLE -> PUZZLE.
export const googleGenreKey = (genreId) => (genreId?.startsWith('GAME_') ? genreId.slice(5) : null);

// App Store: lay the loai con dau tien. Apple khong noi ro the loai chinh, nen game khai 2 the loai con
// (vd Puzzle + Casual) co the bi xep vao 1 trong 2; danh sach day du nam o sub_genres.
export function appleGenre(genreIds = [], genres = []) {
  const subs = genreIds.map((id, i) => ({ key: APPLE_GAME_GENRES[id], name: genres[i] })).filter((g) => g.key);
  return { key: subs[0]?.key ?? null, name: subs[0]?.name ?? null, subs: subs.map((g) => g.key).join(',') || null };
}
