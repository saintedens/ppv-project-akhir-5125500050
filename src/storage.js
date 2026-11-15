export const KUNCI = 'kalkulator-ipk:v1';
const KUNCI_LAMA = 'kalkulator-ipk-data';

let memoriCadangan = [];
let storageTersedia = true;

function saringMKSah(data) {
  if (!Array.isArray(data)) return [];
  return data.filter(
    (item) =>
      item !== null &&
      typeof item === 'object' &&
      typeof item.nama === 'string' &&
      item.nama.trim() !== '' &&
      typeof item.sks === 'number' &&
      !isNaN(item.sks) &&
      typeof item.bobot === 'number' &&
      !isNaN(item.bobot)
  );
}

export function muat() {
  try {
    const mentah = localStorage.getItem(KUNCI);

    // Migrasi otomatis data lama dari Sprint 3 ('kalkulator-ipk-data')
    if (mentah === null) {
      const dataLama = localStorage.getItem(KUNCI_LAMA);
      if (dataLama !== null) {
        const sahLama = saringMKSah(JSON.parse(dataLama));
        simpan(sahLama);
        localStorage.removeItem(KUNCI_LAMA);
        return sahLama;
      }
      return [];
    }

    const hasil = saringMKSah(JSON.parse(mentah));
    memoriCadangan = [...hasil];
    storageTersedia = true;
    return hasil;
  } catch (err) {
    console.warn('Data penyimpanan rusak atau diblokir:', err.message);
    storageTersedia = false;
    return [...memoriCadangan];
  }
}

export function simpan(daftarMK) {
  const dataSah = saringMKSah(daftarMK);
  memoriCadangan = [...dataSah];
  try {
    localStorage.setItem(KUNCI, JSON.stringify(dataSah));
    storageTersedia = true;
    return true;
  } catch (err) {
    console.warn('Gagal menyimpan ke localStorage:', err.message);
    storageTersedia = false;
    return false;
  }
}

export function cekStorageTersedia() {
  return storageTersedia;
}