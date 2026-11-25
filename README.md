# SDN 1 Muara Ciujung Timur — Website (sdn1mct.sch.id)

Static site for SDN 1 Muara Ciujung Timur, Rangkasbitung, Lebak, Banten.
No build step, no framework: plain HTML + CSS + JS, served by Cloudflare Pages
from this repo. Every push to `main` deploys automatically.

## Pages
- `index.html` — Beranda
- `profil.html` — Sambutan Kepala Sekolah, Sejarah, Visi-Misi, Sarana
- `akademik.html` — Jam sekolah & kalender
- `guru.html` — Guru & Staff (17 orang, dari SK Mengajar 2026/2027)
- `berita.html` — Berita (Adipura, Upacara Bendera, Shalat Dzuhur Berjamaah)
- `spmb.html` — SPMB 2027/2028 (coming soon, menunggu juknis Dinas Lebak)
- `galeri.html` — placeholder, foto menyusul
- `kontak.html` — WA, email, alamat, peta

## Assets
- `assets/css/style.css` — one stylesheet for all pages (palette from the school logo)
- `assets/js/main.js` — mobile menu, guru grid, "Baca selengkapnya"
- `assets/img/` — logo, hero (Golden Cinematic), 3 Berita illustrations (3D)

## How to update
- Change a colour or font: edit `assets/css/style.css` once, all pages follow.
- Fix text on one page: edit only that page's `.html` file.
- New Berita: add a card in `berita.html` + drop the image in `assets/img/`.
- New photo: drop it in `assets/img/` and link it from the page.

## Rules (locked)
- Publish name + role/class only for guru & staff — never NIP/NIK, birth dates,
  personal emails or phone numbers.
- Akreditasi: show "Akreditasi A" with NO year/date until verified from an official doc.
- SPMB stays "coming soon" until Dinas Pendidikan Kab. Lebak publishes the 2027/2028 juknis.
