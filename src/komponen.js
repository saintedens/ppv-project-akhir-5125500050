export function BarisMK(mk, index) {
  const tr = document.createElement('tr');
  tr.dataset.id = mk.id;

  const tdNo = document.createElement('td');
  tdNo.textContent = index + 1;

  const tdNama = document.createElement('td');
  const strong = document.createElement('strong');
  strong.textContent = mk.nama; // Aman: tag HTML pengguna tampil sebagai teks biasa
  tdNama.appendChild(strong);

  const tdSks = document.createElement('td');
  tdSks.textContent = `${mk.sks} SKS`;

  const tdNilai = document.createElement('td');
  const badge = document.createElement('span');
  badge.className = 'badge badge-nilai';
  badge.textContent = mk.nilai || '-';
  tdNilai.appendChild(badge);

  const tdAksi = document.createElement('td');
  const btnHapus = document.createElement('button');
  btnHapus.type = 'button';
  btnHapus.className = 'btn-hapus';
  btnHapus.dataset.aksi = 'hapus';
  btnHapus.dataset.id = mk.id;
  btnHapus.title = 'Hapus MK';
  btnHapus.textContent = '×';
  tdAksi.appendChild(btnHapus);

  tr.append(tdNo, tdNama, tdSks, tdNilai, tdAksi);
  return tr;
}