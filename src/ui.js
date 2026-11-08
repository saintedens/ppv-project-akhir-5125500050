export function buatBarisMKHTML(mk, index) {
  return (
    '<tr data-id="' + mk.id + '">' +
      '<td>' + (index + 1) + '</td>' +
      '<td><strong>' + mk.nama + '</strong></td>' +
      '<td>' + mk.sks + ' SKS</td>' +
      '<td><span class="badge badge-nilai">' + mk.nilai + '</span></td>' +
      '<td>' +
        '<button type="button" class="btn-hapus" data-aksi="hapus" data-id="' + mk.id + '" title="Hapus MK">&times;</button>' +
      '</td>' +
    '</tr>'
  );
}

export function renderTabelMK(daftarMK) {
  const tbody = document.querySelector('tbody') || document.getElementById('tabel-mk-body');
  const pesanKosong = document.getElementById('pesan-kosong') || document.querySelector('.pesan-kosong');

  if (!tbody) return;

  if (daftarMK.length === 0) {
    tbody.innerHTML = '';
    if (pesanKosong) pesanKosong.style.display = 'block';
    return;
  }

  if (pesanKosong) pesanKosong.style.display = 'none';

  let html = '';
  daftarMK.forEach((mk, index) => {
    html += buatBarisMKHTML(mk, index);
  });
  tbody.innerHTML = html;
}

export function renderRingkasan(totalSKS, totalMatkul, ipk) {
  // 1. Cari elemen teks angka IPK utama (yang menampilkan "0.00")
  const elemenTeks = document.querySelectorAll('h1, div, span, p');
  elemenTeks.forEach((el) => {
    // Jika elemen berisi angka format IPK (misal 0.00 atau nilai sebelumnya)
    if (el.children.length === 0 && (el.textContent.trim() === '0.00' || /^\d\.\d{2}$/.test(el.textContent.trim()))) {
      el.textContent = ipk;
    }
  });

  // 2. Cari elemen Total SKS dan Mata Kuliah di bawah teks IPK
  const allElements = document.querySelectorAll('*');
  allElements.forEach((el) => {
    if (el.children.length === 0) {
      const parentText = el.parentElement ? el.parentElement.textContent : '';
      if (el.previousElementSibling && el.previousElementSibling.textContent.includes('Total SKS')) {
        el.textContent = totalSKS;
      } else if (el.previousElementSibling && el.previousElementSibling.textContent.includes('Mata Kuliah')) {
        el.textContent = totalMatkul;
      }
    }
  });

  // 3. Update Badge Navigasi Transkrip di kanan atas header
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