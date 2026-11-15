# Changelog

## [0.4.0] - 2026-11-15
### Added
- Komponen DOM reusable `BarisMK(mk, index)` di `src/komponen.js` untuk merender daftar mata kuliah.
- Modul penyimpanan aman `src/storage.js` dengan kunci berversi `kalkulator-ipk:v1`, validasi struktur data, cadangan memori, dan migrasi otomatis dari kunci lama.
### Security & Fixed
- Mencegah HTML injection pada nama mata kuliah dengan menggunakan `textContent` menggantikan string `innerHTML`.
- Aplikasi tetap berjalan normal tanpa crash saat data `localStorage` rusak atau terblokir.

## [0.3.0] - 2026-11-08
### Changed
- Refactoring kode JavaScript monolitik menjadi modul ES terpisah (`src/main.js`, `src/state.js`, `src/ui.js`).

## [0.2.0] - 2026-11-01
### Fixed
- Perbaikan perhitungan bobot SKS dan validasi input form pada cabang `feature/calculator-fix`.

## [0.1.0] - 2026-10-25
### Added
- Inisiasi proyek Kalkulator IPK, penyusunan Project Charter & Roadmap, serta integrasi pustaka UI.