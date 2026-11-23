const KONSEP = {
  nama: 'Kalkulator IPK',
  tagline: 'Tahu IPK sementaramu dalam hitungan detik, tanpa rumus manual.',
  persona: {
    nama: 'Naya, 20 tahun (persona rekaan)',
    siapa: 'Mahasiswa semester 3 D3 Teknologi Multimedia dan Broadcasting yang mengambil sekitar 10 mata kuliah per semester, sebagian besar berpasangan dengan praktikum.',
    keseharian: 'Hari-harinya diisi kuliah dan praktikum, lalu laporan dan proyek di malam hari. Nilai tiap mata kuliah ia catat di ponsel dan baru terbayang IPK-nya saat nilai resmi terbit.',
    masalah: 'Setiap ingin tahu IPK sementara, ia menghitung nilai dikali SKS satu per satu secara manual dan sering ragu apakah hasilnya benar.',
  },
  masalah: 'Mahasiswa menghitung IPK dengan mengalikan nilai tiap mata kuliah dengan SKS-nya, lalu membaginya dengan total SKS. Perhitungan manual ini memakan waktu dan mudah salah, apalagi saat mata kuliah teori dan praktikum memiliki SKS berbeda. Akibatnya mahasiswa tidak yakin dengan IPK sementaranya dan sulit menentukan target semester berikutnya.',
  solusi: 'Aplikasi web yang menghitung IPK otomatis setelah mahasiswa memasukkan nama mata kuliah, SKS, dan nilai huruf. Daftar mata kuliah tersimpan di peramban sehingga tidak perlu diketik ulang. Simulasi target IPK untuk semester berikutnya ditambahkan pada tahap berikutnya.',
  fitur: [
    { nama: 'Input mata kuliah (nama, SKS, nilai huruf)', prioritas: 'wajib', alasan: 'Tanpa data tidak ada yang bisa dihitung. Sudah jadi: tag v0.4.0.' },
    { nama: 'Hitung IPK dan total SKS otomatis', prioritas: 'wajib', alasan: 'Inti masalah persona. Sudah jadi: state.js, commit d99d131, tag v0.4.0.' },
    { nama: 'Simpan otomatis di peramban', prioritas: 'wajib', alasan: 'Data tidak hilang saat halaman dimuat ulang. Sudah jadi: storage.js, commit 3ce7090, tag v0.4.0.' },
    { nama: 'Hapus mata kuliah', prioritas: 'wajib', alasan: 'Perlu untuk membetulkan salah input. Sudah jadi: komponen BarisMK, commit 3ce7090.' },
    { nama: 'Simulasi target IPK semester depan', prioritas: 'sebaiknya', alasan: 'Menjawab pertanyaan butuh nilai berapa, tetapi IPK saat ini harus akurat dulu. Belum jadi, target P13.' },
    { nama: 'Pilihan cepat nama mata kuliah', prioritas: 'sebaiknya', alasan: 'Mempercepat pengisian, bukan penentu hasil. Sudah jadi: tag v0.4.0.' },
    { nama: 'Impor otomatis dari SIAKAD', prioritas: 'belum', alasan: 'Butuh akses ke sistem kampus, bertentangan dengan tujuan aplikasi yang sederhana dan mandiri.' },
    { nama: 'Tema gelap dan terang', prioritas: 'belum', alasan: 'Tidak menguji nilai utama produk.' },
  ],
  pembanding: [
    { nama: 'Spreadsheet (Google Sheets / Excel)', kelebihan: 'Fleksibel dan gratis.', kekurangan: 'Pengguna harus menyusun rumus bobot SKS sendiri dan rentan salah rumus.' },
    { nama: 'SIAKAD / portal akademik kampus', kelebihan: 'Data nilai resmi.', kekurangan: 'Hanya menampilkan IPK yang sudah terbit, tidak untuk menghitung sementara.' },
  ],
  pembeda: 'Memakai skala nilai A sampai E yang dikenal mahasiswa PENS, langsung menghitung tanpa rumus, dan tanpa login.',
};