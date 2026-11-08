const STORAGE_KEY = 'kalkulator-ipk-data';

// State aplikasi in-memory
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
    sks: Number(matkul.sks),
    nilai: matkul.nilai,
    semester: Number(matkul.semester) || 1
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
  if (daftarMK.length === 0) return { totalSKS: 0, ipk: '0.00' };

  const konversiNilai = {
    'A': 4.0,
    'AB': 3.5,
    'B': 3.0,
    'BC': 2.5,
    'C': 2.0,
    'D': 1.0,
    'E': 0.0
  };

  let totalSKS = 0;
  let totalBobot = 0;

  daftarMK.forEach((mk) => {
    const bobot = konversiNilai[mk.nilai] !== undefined ? konversiNilai[mk.nilai] : 0;
    totalSKS += mk.sks;
    totalBobot += bobot * mk.sks;
  });

  const ipk = totalSKS > 0 ? (totalBobot / totalSKS).toFixed(2) : '0.00';
  return { totalSKS, ipk };
}