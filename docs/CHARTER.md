# Project Charter — Kalkulator IPK Mahasiswa

## 1. Masalah yang Diselesaikan
Mahasiswa sering kesulitan menghitung, memprediksi, dan melacak Indeks Prestasi Kumulatif (IPK) secara akurat karena rumus bobot SKS yang rumit, serta tidak adanya gambaran jelas berapa nilai mata kuliah yang harus dicapai di semester depan untuk merealisasikan target IPK kelulusan.

## 2. Pengguna Sasaran & Persona
* **Nama Persona:** Mikhael (20 tahun)
* **Profil:** Mahasiswa D3 Teknologi Multimedia dan Broadcasting yang sedang menempuh semester 3.
* **Keseharian:** Memiliki banyak mata kuliah praktikum dengan bobot SKS bervariasi.
* **Kendala:** Bingung menghitung simulasi nilai IPK jika ada mata kuliah yang diulang, serta ingin tahu minimal nilai semester ini agar IPK tetap aman di atas target.

## 3. Fitur MVP (Prioritas MoSCoW)
* **Must Have (Wajib):**
  1. Input data mata kuliah (Nama Matkul, Jumlah SKS, dan Nilai Huruf/Angka).
  2. Kalkulasi otomatis IP Semester (IPS) dan IP Kumulatif (IPK).
  3. Reset dan hapus baris mata kuliah.
* **Should Have (Penting):**
  1. Fitur simulasi/target IPK (menghitung butuh nilai berapa di semester depan).
* **Could Have (Tambahan jika sempat):**
  1. Fitur ubah tema tampilan (gelap/terang).
* **Won't Have (Sengaja tidak dibuat pada Sprint ini):**
  1. Fitur integrasi otomatis dengan SIAKAD / sistem kampus (semua input data dilakukan secara mandiri/lokal oleh mahasiswa untuk menjaga kesederhanaan aplikasi).

## 4. Kriteria Sukses Terukur
* Pengguna baru dapat memasukkan data 5 mata kuliah dan melihat hasil perhitungan IPK dalam waktu **≤ 1 menit** tanpa panduan.

## 5. Risiko & Antisipasi
1. **Risiko:** Data nilai yang sudah diinput hilang saat halaman tidak sengaja di-refresh.
   * **Antisipasi:** Menyimpan draf input sementara ke `localStorage` peramban.
2. **Risiko:** Input SKS atau nilai berupa teks invalid (misal huruf pada kolom SKS) yang merusak perhitungan.
   * **Antisipasi:** Validasi ketat pada form input dengan indikator pesan error komponen UI Bootstrap.
3. **Risiko:** Tampilan tabel input berantakan saat diakses melalui smartphone.
   * **Antisipasi:** Menggunakan komponen tabel responsif dan layout grid dari Bootstrap 5.3.