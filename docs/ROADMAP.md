# Roadmap Pengembangan Project Akhir — Kalkulator IPK

| Minggu | Deliverable Proyek | Fitur MVP / Bukti Output |
| :--- | :--- | :--- |
| **P09** | Project Charter, Roadmap, & Gaya UI | Repositori dibuka, Charter & Roadmap terbit, tampilan Form dan Tabel Perhitungan dibangun dengan `style.css` kustom. |
| **P10** | Debugging & Git Branching | Memperbaiki minimal 2 bug nyata pada kalkulasi bobot SKS & validasi form menggunakan alur pemanduan cabang (`feature/calculator-fix`). |
| **P11** | Modularisasi Kode (ES Modules) | Memecah kode JavaScript monolithic menjadi modul terpisah (`src/state.js`, `src/ui.js`, `src/main.js`). |
| **P12** | Reusable Component & Storage | Komponen baris input matkul reusable, integrasi `localStorage` untuk simpan riwayat IPK, penerbitan Rilis/Tag `v0.1.0` & CHANGELOG. |
| **P13** | Pemantapan Konsep Produk (Tugas 7) | Penyempurnaan fitur simulasi target IPK dan finalisasi dokumen presentasi konsep produk. |
| **P14** | Demo Akhir Proyek | Presentasi & demo aplikasi interaktif rilis final. |
## Sprint 3
- [x] Refactoring ES Modules (Memecah app.js ke modul state.js, ui.js, main.js)
## Sprint 4
- [x] Implementasi komponen DOM reusable (`src/komponen.js`) dengan perlindungan XSS (`textContent`)
- [x] Implementasi penyimpanan aman berversi `kalkulator-ipk:v1` (`src/storage.js`) dan pengujian ketangguhan data rusak
- [x] Pembaruan `README.md`, `CHANGELOG.md`, dan rilis tag `v0.4.0`