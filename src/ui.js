export function buatBarisMKHTML(mk) {
  return (
    '<tr data-id="' + mk.id + '">' +
      '<td>' + mk.nama + '</td>' +
      '<td>' + mk.sks + ' SKS</td>' +
      '<td><span class="badge badge-nilai">' + mk.nilai + '</span></td>' +
      '<td>' +
        '<button type="button" class="btn-hapus" data-aksi="hapus" data-id="' + mk.id + '" aria-label="Hapus MK">&times;</button>' +
      '</td>' +
    '</tr>'
  );
}

export function renderTabelMK(daftarMK) {
  const tbody = document.getElementById('tabel-mk-body');
  const pesanKosong = document.getElementById('pesan-kosong');

  if (!tbody) return;

  if (daftarMK.length === 0) {
    tbody.innerHTML = '';
    if (pesanKosong) pesanKosong.style.display = 'block';
    return;
  }

  if (pesanKosong) pesanKosong.style.display = 'none';

  let html = '';
  daftarMK.forEach((mk) => {
    html += buatBarisMKHTML(mk);
  });
  tbody.innerHTML = html;
}

export function renderRingkasan(totalSKS, ipk) {
  const elTotalSKS = document.getElementById('total-sks');
  const elIPK = document.getElementById('total-ipk');
  const badgeTotal = document.getElementById('total-mk-badge');

  if (elTotalSKS) elTotalSKS.textContent = totalSKS;
  if (elIPK) elIPK.textContent = ipk;
  if (badgeTotal) badgeTotal.textContent = totalSKS > 0 ? totalSKS + ' SKS' : '0';
}

export function gantiTampilanTab(targetId) {
  const views = document.querySelectorAll('.view-section');
  const tabs = document.querySelectorAll('.pill-btn');

  views.forEach((view) => {
    if (view.id === targetId) {
      view.classList.add('active');
    } else {
      view.classList.remove('active');
    }
  });

  tabs.forEach((tab) => {
    if (tab.dataset.target === targetId) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
}