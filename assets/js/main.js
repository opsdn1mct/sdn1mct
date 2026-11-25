var guru = [
  ["Yati Hasanah, S.Pd.", "Kepala Sekolah", true],
  ["Dewi Anggraeni, S.Pd.", "Guru Kelas I-A"],
  ["Titi Sumiyati, S.Pd.I", "Guru Kelas I-B"],
  ["Reni Endriyani, S.Pd.", "Guru Kelas II-A"],
  ["Novia Intan Solihati, S.Pd.", "Guru Kelas II-B"],
  ["Ismayani, S.Pd.", "Guru Kelas III-A"],
  ["Suryadi, S.Pd.", "Guru Kelas III-B"],
  ["Siska Andarwati, S.Pd.", "Guru Kelas IV-A"],
  ["Ati Sulastri, S.Pd.", "Guru Kelas IV-B"],
  ["Ayzhi Rizhyalita, S.Pd.", "Guru Kelas V-A"],
  ["Siti Hodijah, S.Pd.", "Guru Kelas V-B"],
  ["Yungyun Lestari, S.Pd.", "Guru Kelas VI"],
  ["Ahmid Hasan, S.Pd.", "Guru PJOK (I–VI)"],
  ["Jamaludin, S.Pd.I", "Guru PAI-BP (I–VI)"],
  ["Cahya Retdiansyah", "Tenaga Administrasi / Operator Sekolah"],
  ["Andris Yudhiyanto", "Tenaga Kebersihan"],
  ["Sudarma", "Penjaga Sekolah"]
];
var grid = document.getElementById('guruGrid');
if (grid) guru.forEach(function(g){
  var d = document.createElement('div');
  d.className = 'guru' + (g[2] ? ' kepsek-card' : '');
  var nm = document.createElement('div'); nm.className = 'g-nm'; nm.textContent = g[0];
  var rl = document.createElement('div'); rl.className = 'g-rl'; rl.textContent = g[1];
  d.appendChild(nm); d.appendChild(rl);
  grid.appendChild(d);
});

var burger = document.getElementById('burger');
var navlinks = document.getElementById('navlinks');
burger.addEventListener('click', function(){
  var open = navlinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
});
navlinks.addEventListener('click', function(e){
  if (e.target.tagName === 'A') navlinks.classList.remove('open');
});

document.querySelectorAll('.readmore').forEach(function(btn){
  btn.addEventListener('click', function(){
    var card = document.getElementById(btn.getAttribute('data-target'));
    var expanded = card.classList.toggle('expanded');
    btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    btn.textContent = expanded ? 'Tutup ringkasan ↑' : 'Baca selengkapnya ↓';
  });
});
