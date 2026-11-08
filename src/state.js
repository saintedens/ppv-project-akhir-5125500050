const STORAGE_KEY = 'kalkulator-ipk-data';

let daftarMK = muatData();

export function muatData() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function simpanData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(daftarMK));
}

export function ambilSemuaMK() {
  return daftarMK;
}

export function tambahMK(matkul) {
  const mkBaru = {
    id: Date.now(),
    nama: matkul.nama,
    sks: Number(matkul.sks) || 3,
    nilai: matkul.nilai,          // Contoh: "D"
    bobot: Number(matkul.bobot)   // Contoh: 1.0
  };
  daftarMK.push(mkBaru);
  simpanData();
  return mkBaru;
}

export function hapusMK(id) {
  daftarMK = daftarMK.filter((mk) => mk.id !== id);
  simpanData();
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