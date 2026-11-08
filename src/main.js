import * as state from './state.js';
import * as ui from './ui.js';

function perbaruiAplikasi() {
  const daftarMK = state.ambilSemuaMK();
  const ringkasan = state.hitungIPK();
  
  ui.renderTabelMK(daftarMK);
  ui.renderRingkasan(ringkasan.totalSKS, daftarMK.length, ringkasan.ipk);
}

// 1. Klik Chip Rekomendasi Mata Kuliah
document.addEventListener('click', (e) => {
  const chip = e.target.closest('button, .chip, [class*="chip"]');
  if (chip && !chip.classList.contains('pill-btn') && chip.type !== 'submit') {
    const inputNama = document.querySelector('input[placeholder*="Pilih rekomendasi"]') || 
                      document.querySelector('input[type="text"]');
    if (inputNama && chip.textContent) {
      inputNama.value = chip.textContent.trim();
      inputNama.focus();
    }
  }
});

// 2. Fungsi Ekstraksi Nilai & Bobot dari Select Dropdown
function ambilBobotDanNilai(teksSelect) {
  const teks = (teksSelect || '').trim();
  
  // Tabel kamus konversi nilai jika teks hanya berupa huruf
  const petaBobot = {
    'A': 4.0, 'AB': 3.5, 'B': 3.0, 'BC': 2.5, 'C': 2.0, 'D': 1.0, 'E': 0.0
  };

  // 1. Coba ekstrak angka dari dalam tanda kurung, contoh: "D (1.0)" -> 1.0
  const matchAngka = teks.match(/\(([\d\.]+)\)/);
  if (matchAngka && matchAngka[1]) {
    const bobotEkstrak = parseFloat(matchAngka[1]);
    const hurufEkstrak = teks.split(' ')[0].trim();
    return { nilai: hurufEkstrak, bobot: bobotEkstrak };
  }

  // 2. Jika opsi berupa nilai huruf murni (A, AB, B, D, dll)
  const hurufClean = teks.toUpperCase().split(' ')[0];
  if (petaBobot[hurufClean] !== undefined) {
    return { nilai: hurufClean, bobot: petaBobot[hurufClean] };
  }

  // Default jika tidak terdeteksi
  return { nilai: 'A', bobot: 4.0 };
}

// 3. Handling Form Submit (+ Simpan Ke Transkrip)
const form = document.querySelector('form') || document.querySelector('.card form');
const btnSimpan = document.querySelector('button[type="submit"]') || 
                  Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Simpan Ke Transkrip'));

function prosesTambahMK(e) {
  if (e) e.preventDefault();

  const inputNama = document.querySelector('input[placeholder*="Pilih rekomendasi"]') || document.querySelector('input[type="text"]');
  const selects = document.querySelectorAll('select');
  
  let selectSKS = selects[0];
  let selectNilai = selects[1];

  if (!inputNama || !inputNama.value.trim()) return;

  const nama = inputNama.value.trim();
  
  // Ambil angka SKS (contoh: "3 SKS" -> 3)
  const rawSKS = selectSKS ? selectSKS.value : '3';
  const sks = parseInt(rawSKS) || 3;

  // Ambil teks opsi nilai yang dipilih (contoh: "D (1.0)")
  const rawNilaiTeks = selectNilai ? (selectNilai.options[selectNilai.selectedIndex]?.text || selectNilai.value) : 'A (4.0)';
  
  const { nilai, bobot } = ambilBobotDanNilai(rawNilaiTeks);

  state.tambahMK({ nama, sks, nilai, bobot });

  // Reset Input Form
  inputNama.value = '';
  inputNama.focus();

  perbaruiAplikasi();
}

if (form) {
  form.addEventListener('submit', prosesTambahMK);
} else if (btnSimpan) {
  btnSimpan.addEventListener('click', prosesTambahMK);
}

// 4. Handling Navigasi Tab
document.addEventListener('click', (e) => {
  const btnTab = e.target.closest('.pill-btn, nav button, nav a');
  if (btnTab) {
    const target = btnTab.dataset.target || btnTab.getAttribute('href');
    if (target) {
      e.preventDefault();
      ui.gantiTampilanTab(target);
    }
  }
});

// 5. Handling Hapus MK
document.addEventListener('click', (e) => {
  const btnHapus = e.target.closest('.btn-hapus, [data-aksi="hapus"]');
  if (!btnHapus) return;

  const id = Number(btnHapus.dataset.id);
  if (id) {
    state.hapusMK(id);
    perbaruiAplikasi();
  }
});

// Inisialisasi awal
perbaruiAplikasi();