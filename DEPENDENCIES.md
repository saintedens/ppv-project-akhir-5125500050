# Pustaka Terpasang (Dependencies)

* **Nama & Versi Pustaka:** Bootstrap v5.3.3
* **Sumber:** CDN jsDelivr (`https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/`)
* **Ukuran Transfer (DevTools Network Tab):**
  * CSS (`bootstrap.min.css`): ~31 kB
  * JS (`bootstrap.bundle.min.js`): ~23 kB
* **Komponen yang Digunakan:**
  1. Navbar (Header Aplikasi & Navigasi)
  2. Card / Form Input (Wadah Form Input Matkul & Nilai SKS)
  3. Modal (Pop-up Rincian / Ringkasan Hasil Kalkulasi IPK)

---

### Jawaban Pertanyaan Pemilihan Pustaka (Deck P09)
1. **Mengapa memilih pustaka ini?**
   Bootstrap memiliki komponen form dan tabel yang rapi serta responsif, mempermudah pembuatan UI kalkulator yang bersih dan nyaman digunakan di HP maupun laptop.
2. **Apakah ukurannya sesuai dengan kebutuhan produk?**
   Ya, dengan total ukuran transfer sekitar ~54 kB via CDN, muatan ini sangat ringan dan tidak membebani performa browser.
3. **Bagaimana lisensi dan keaktifan pengembangannya?**
   Berlisensi MIT (bebas digunakan) dan dikembangkan secara aktif oleh komunitas open-source global.
4. **Seberapa sulit mengganti pustaka ini di kemudian hari?**
   Mudah, karena seluruh pemanggilan API JavaScript pustaka diisolasi secara khusus di dalam satu berkas pembungkus (`src/ui-pustaka.js`).