# Peta Modul (MODULE_MAP.md) — Kalkulator IPK PENS

## 1. Diagram Dependensi Impor (Satu Arah)
index.html ──> src/main.js ──> src/ui.js
                           └──> src/state.js

## 2. Tanggung Jawab Modul
- `src/state.js`: Mengelola data mata kuliah in-memory, konversi bobot nilai, kalkulasi statistik IPK/SKS, dan penyelarasan ke `localStorage`.
- `src/ui.js`: Bertanggung jawab penuh terhadap manipulasi DOM, peracikan elemen baris tabel transkrip, pembaruan teks IPK, dan pergantian tampilan tab.
- `src/main.js`: Titik masuk (entry point) aplikasi yang mendaftarkan seluruh event listener (submit form, klik chip rekomendasi, hapus MK, dan navigasi tab) serta mengoordinasikan modul state dan ui.

## 3. Bagian yang Belum Dimodulkan & Alasannya
- `index.html`: Merupakan penyusun struktur dokumen awal halaman web.
- `style.css`: Berkas stylesheet eksternal untuk penataan gaya UI visual.