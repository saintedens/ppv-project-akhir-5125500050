import * as state from './state.js';
import * as ui from './ui.js';

function perbaruiAplikasi() {
  const daftarMK = state.ambilSemuaMK();
  const ringkasan = state.hitungIPK();
  
  ui.renderTabelMK(daftarMK);
  ui.renderRingkasan(ringkasan.totalSKS, ringkasan.ipk);
}

// Handler Form Tambah Mata Kuliah
const formMK = document.getElementById('form-mk');
if (formMK) {
  formMK.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputNama = document.getElementById('nama-mk');
    const inputSKS = document.getElementById('sks-mk');
    const inputNilai = document.getElementById('nilai-mk');

    const nama = inputNama.value.trim();
    const sks = inputSKS.value;
    const nilai = inputNilai.value;

    if (!nama || !sks || !nilai) return;

    state.tambahMK({ nama, sks, nilai });
    
    // Reset Form
    inputNama.value = '';
    inputSKS.value = '3';
    inputNama.focus();

    perbaruiAplikasi();
  });
}

// Event Delegation Tombol Hapus Mata Kuliah
const tabelBody = document.getElementById('tabel-mk-body');
if (tabelBody) {
  tabelBody.addEventListener('click', (e) => {
    const btnHapus = e.target.closest('button[data-aksi="hapus"]');
    if (!btnHapus) return;

    const id = Number(btnHapus.dataset.id);
    state.hapusMK(id);
    perbaruiAplikasi();
  });
}

// Handler Navigasi Tab
const navPills = document.querySelectorAll('.pill-btn');
navPills.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const targetView = e.currentTarget.dataset.target;
    if (targetView) {
      ui.gantiTampilanTab(targetView);
    }
  });
});

// Inisialisasi awal saat halaman dimuat
perbaruiAplikasi();