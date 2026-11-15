import { muat, simpan } from './storage.js';

let daftarMK = muat();

export function ambilSemuaMK() {
  return daftarMK;
}

export function tambahMK(matkul) {
  const mkBaru = {
    id: Date.now(),
    nama: String(matkul.nama),
    sks: Number(matkul.sks) || 3,
    nilai: String(matkul.nilai || 'A'),
    bobot: typeof matkul.bobot === 'number' && !isNaN(matkul.bobot) ? matkul.bobot : 4.0,
  };
  daftarMK.push(mkBaru);
  simpan(daftarMK);
  return mkBaru;
}

export function hapusMK(id) {
  daftarMK = daftarMK.filter((mk) => mk.id !== id);
  simpan(daftarMK);
}

export function hitungIPK() {
  if (daftarMK.length === 0) {
    return { totalSKS: 0, totalMatkul: 0, ipk: '0.00' };
  }

  let totalSKS = 0;
  let totalBobot = 0;

  daftarMK.forEach((mk) => {
    const sks = Number(mk.sks) || 0;
    const bobot = typeof mk.bobot === 'number' && !isNaN(mk.bobot) ? mk.bobot : 4.0;

    totalSKS += sks;
    totalBobot += bobot * sks;
  });

  const ipk = totalSKS > 0 ? (totalBobot / totalSKS).toFixed(2) : '0.00';
  return { totalSKS, totalMatkul: daftarMK.length, ipk };
}