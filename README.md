# Happy Birthday, Zaskia 💗 (versi HTML/CSS/JS)

Versi ini murni HTML + CSS + JavaScript. Tidak perlu Node.js, npm,
atau instalasi apapun.

## Cara menjalankan

Cara paling gampang: **klik dua kali file `index.html`**, nanti otomatis
kebuka di browser (Chrome/Edge/Firefox).

Kalau ada bagian yang terasa aneh dibuka langsung dari file (jarang
terjadi, biasanya semua fitur tetap jalan normal), kamu bisa jalankan
lewat local server sederhana supaya lebih mirip website beneran:

- **Kalau pakai VS Code:** install extension "Live Server", klik kanan
  `index.html` -> "Open with Live Server".
- **Kalau ada Python terinstall:** buka folder ini di terminal, jalankan
  `python -m http.server`, lalu buka `http://localhost:8000` di browser.

## Yang paling penting: `data.js`

Semua teks, foto, quiz, dan musik ada di **satu file ini**. Kamu tidak
perlu sentuh `index.html`, `style.css`, atau `script.js` sama sekali untuk:

- Ganti nama / tanggal ulang tahun
- Ganti isi surat
- Tambah / ganti foto kenangan
- Ganti isi "Things I Like About You"
- Ganti soal & jawaban quiz
- Ganti pesan tersembunyi (hidden message)
- Ganti pesan penutup
- Ganti musik

## Menambahkan foto

1. Taruh file foto (`.jpg`, `.jpeg`, `.png`, atau `.webp`) ke folder `photos/`.
2. Buka `data.js`, cari array `memories`, lalu tambahkan object baru:

```js
{ image: 'photos/nama-file-kamu.jpg', caption: 'Caption foto ini' },
```

Foto default yang ada sekarang (`zaskia-01.jpg` s/d `zaskia-06.jpg`) adalah
**placeholder** bertuliskan "Ganti dengan foto asli" — ganti dengan foto
asli kamu berdua kapan pun kamu mau. Selama nama file sama persis, kamu
tinggal timpa (overwrite) file-nya.

## Menambahkan musik

1. Taruh file `.mp3` di folder `music/`, misalnya `birthday-song.mp3`.
2. Pastikan path di `data.js` bagian `music` sesuai nama filenya.

Musik **tidak autoplay** — baru akan diputar setelah Zaskia menekan tombol
music player di pojok layar. Kalau file musiknya belum ada, tombolnya akan
otomatis nonaktif tanpa bikin error.

## Struktur folder

```
index.html   -> kerangka semua section
style.css    -> semua tampilan & animasi
script.js    -> semua interaksi (klik, quiz, lightbox, dst)
data.js      -> SEMUA KONTEN. Edit di sini.
photos/      -> semua foto kenangan
music/       -> file musik ulang tahun
assets/      -> file pendukung (ikon)
```

## Catatan

Website ini pakai koneksi internet hanya untuk 2 hal (font Google Fonts
dan library confetti dari CDN) — kalau internet mati saat dibuka, website
tetap jalan normal, cuma tampilan font & efek confetti akan pakai default
browser.

## Deploy (opsional)

Folder ini bisa langsung diupload ke hosting statis gratis seperti
Netlify, Vercel, atau GitHub Pages (drag & drop folder ini) supaya
Zaskia bisa buka linknya dari HP tanpa perlu install apapun.

Selamat memberi kejutan! 🎁💗
