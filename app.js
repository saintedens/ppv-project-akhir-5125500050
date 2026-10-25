const state = {
  matkul: [],
  tampilan: 'view-input'
};

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const formMK = document.querySelector('#form-mk');
const namaInput = document.querySelector('#nama-mk');
const sksSelect = document.querySelector('#sks-mk');
const nilaiSelect = document.querySelector('#nilai-mk');
const pesanError = document.querySelector('#pesan-error');
const quickChips = document.querySelector('#quick-chips');

const ipkVal = document.querySelector('#ipk-val');
const totalSksVal = document.querySelector('#total-sks-val');
const countMkVal = document.querySelector('#count-mk-val');
const progressFill = document.querySelector('#progress-fill');
const badgeMK = document.querySelector('#total-mk-badge');
const listMK = document.querySelector('#list-mk');
const pesanKosong = document.querySelector('#pesan-kosong');

const inputNama = document.querySelector('#input-nama');
const inputNRP = document.querySelector('#input-nrp');
const dispNama = document.querySelector('#disp-nama');
const dispNRP = document.querySelector('#disp-nrp');

if (inputNama && inputNRP) {
  inputNama.addEventListener('input', (e) => {
    dispNama.textContent = e.target.value.trim() || 'Nama Mahasiswa';
  });
  inputNRP.addEventListener('input', (e) => {
    dispNRP.textContent = e.target.value.trim() || '-';
  });
}

if (quickChips) {
  quickChips.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;

    namaInput.value = chip.textContent;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('selected'));
    chip.classList.add('selected');
    namaInput.focus();
  });
}

document.querySelector('.nav-pills').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-target]');
  if (!btn || btn.dataset.target === state.tampilan) return;

  state.tampilan = btn.dataset.target;
  document.querySelectorAll('.pill-btn').forEach(b => b.classList.toggle('active', b === btn));

  document.querySelectorAll('.page-view').forEach(view => {
    if (view.id === state.tampilan) {
      view.hidden = false;
      requestAnimationFrame(() => view.classList.add('active'));
    } else {
      view.classList.remove('active');
      view.hidden = true;
    }
  });
});

function getarInput(el) {
  if (prefersReducedMotion()) return;
  el.animate([
    { transform: 'translateX(0)' },
    { transform: 'translateX(-6px)' },
    { transform: 'translateX(6px)' },
    { transform: 'translateX(-4px)' },
    { transform: 'translateX(4px)' },
    { transform: 'translateX(0)' }
  ], { duration: 280, easing: 'ease-in-out' });
}

formMK.addEventListener('submit', (e) => {
  e.preventDefault();
  const nama = namaInput.value.trim();
  const sks = Number(sksSelect.value);
  const nilai = Number(nilaiSelect.value);

  if (nama.length < 3) {
    pesanError.textContent = 'Tulis nama mata kuliah minimal 3 karakter.';
    namaInput.setAttribute('aria-invalid', 'true');
    getarInput(namaInput);
    namaInput.focus();
    return;
  }

  pesanError.textContent = '';
  namaInput.removeAttribute('aria-invalid');

  const itemBaru = { id: Date.now(), nama, sks, nilai };
  state.matkul.push(itemBaru);

  namaInput.value = '';
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('selected'));
  updateUI();
});

listMK.addEventListener('click', async (e) => {
  if (!e.target.matches('.btn-del')) return;
  const tr = e.target.closest('tr');
  const id = Number(tr.dataset.id);

  if (!prefersReducedMotion()) {
    const anim = tr.animate([
      { opacity: 1, transform: 'scale(1)' },
      { opacity: 0, transform: 'scale(0.95)' }
    ], { duration: 200, easing: 'ease-in' });
    await anim.finished;
  }

  state.matkul = state.matkul.filter(m => m.id !== id);
  updateUI();
});

function updateUI() {
  badgeMK.textContent = state.matkul.length;
  countMkVal.textContent = state.matkul.length;
  pesanKosong.hidden = state.matkul.length > 0;

  listMK.innerHTML = '';
  let totalBobot = 0;
  let totalSKS = 0;

  state.matkul.forEach(m => {
    totalSKS += m.sks;
    totalBobot += m.sks * m.nilai;

    const tr = document.createElement('tr');
    tr.dataset.id = m.id;
    tr.innerHTML = `
      <td><strong>${escapeHTML(m.nama)}</strong></td>
      <td>${m.sks} SKS</td>
      <td>${m.nilai.toFixed(1)}</td>
      <td><button type="button" class="btn-del">Hapus</button></td>
    `;
    listMK.appendChild(tr);
  });

  const ipk = totalSKS > 0 ? (totalBobot / totalSKS) : 0;

  ipkVal.textContent = ipk.toFixed(2);
  totalSksVal.textContent = totalSKS;

  const ratio = Math.min(ipk / 4.0, 1);
  if (prefersReducedMotion()) {
    progressFill.style.transform = `scaleX(${ratio})`;
  } else {
    progressFill.animate([
      { transform: progressFill.style.transform || 'scaleX(0)' },
      { transform: `scaleX(${ratio})` }
    ], { duration: 320, fill: 'forwards', easing: 'ease-out' });
    progressFill.style.transform = `scaleX(${ratio})`;
  }
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
}

updateUI();