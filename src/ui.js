import { BarisMK } from './komponen.js';
import { cekStorageTersedia } from './storage.js';

export function renderTabelMK(daftarMK) {
  const tbody = document.querySelector('tbody') || document.getElementById('tabel-mk-body');
  const pesanKosong = document.getElementById('pesan-kosong') || document.querySelector('.pesan-kosong');

  if (!tbody) return;

  if (daftarMK.length === 0) {
    tbody.replaceChildren();
    if (pesanKosong) {
      pesanKosong.style.display = 'block';
      if (!cekStorageTersedia()) {
        pesanKosong.textContent = 'Peringatan: Penyimpanan lokal rusak/diblokir. Aplikasi berjalan dalam mode sementara.';
      }
    }
    return;
  }

  if (pesanKosong) pesanKosong.style.display = 'none';

  const barisElemen = daftarMK.map((mk, index) => BarisMK(mk, index));
  tbody.replaceChildren(...barisElemen);
}

export function renderRingkasan(totalSKS, totalMatkul, ipk) {
  const elemenTeks = document.querySelectorAll('h1, div, span, p');
  elemenTeks.forEach((el) => {
    if (el.children.length === 0 && (el.textContent.trim() === '0.00' || /^\d\.\d{2}$/.test(el.textContent.trim()))) {
      el.textContent = ipk;
    }
  });

  const allElements = document.querySelectorAll('*');
  allElements.forEach((el) => {
    if (el.children.length === 0) {
      if (el.previousElementSibling && el.previousElementSibling.textContent.includes('Total SKS')) {
        el.textContent = totalSKS;
      } else if (el.previousElementSibling && el.previousElementSibling.textContent.includes('Mata Kuliah')) {
        el.textContent = totalMatkul;
      }
    }
  });

  const badgeTranskrip = document.querySelector('.pill-btn span, #total-mk-badge, nav .badge');
  if (badgeTranskrip) {
    badgeTranskrip.textContent = totalSKS + ' SKS';
  }
}

export function gantiTampilanTab(targetId) {
  if (!targetId) return;
  const cleanId = targetId.replace('#', '');

  const views = document.querySelectorAll('main > section, main > div > section, .view-section, [id^="view-"]');
  const tabs = document.querySelectorAll('.pill-btn, nav button, nav a');

  views.forEach((view) => {
    if (view.id === cleanId || view.dataset.view === cleanId) {
      view.classList.add('active');
      view.style.display = 'grid';
    } else {
      view.classList.remove('active');
      view.style.display = 'none';
    }
  });

  tabs.forEach((tab) => {
    const target = tab.dataset.target || tab.getAttribute('href');
    if (target && target.replace('#', '') === cleanId) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
}