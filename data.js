const birthdayData = {
  // Nama yang akan tampil di berbagai bagian website
  name: 'Zaskia Arifa Cahyani',
  nickname: 'Zaskia',

  // Tanggal ulang tahun (bebas format, ini cuma teks tampilan)
  birthday: '20 September',

  // --- OPENING / GIFT BOX SCREEN ---
  opening: {
    greeting: 'Hi, Zaskia! 💗',
    subtext: 'Ada sesuatu buat kamu...',
    buttonLabel: 'Buka Hadiahnya 🎁',
  },

  // --- HERO SECTION ---
  hero: {
    title: 'Happy Birthday,\nSayangggkuuuu 🎂💗',
    subtitle:
      'Selamat ulang tahun yaa sayang,\nUdah 19 tahun nih yee🤗🤗.',
    buttonLabel: 'Lanjut ➜',
  },

  // --- SURAT ULANG TAHUN ---
  // Ganti isi surat di sini. Boleh pakai baris baru untuk paragraf baru.
  letter: `Haii sayanggg,

Kamu tau sendiri Aku nggak jago merangkai kata-kata yang bagus, tapi aku mau coba nulis sesuatu yang tulus buat kamu hari ini.

Makasih ya, udah jadi bagian dari hari-hariku.

Semoga di umur yang baru ini, kamu makin sering ketawa lepas, makin jarang overthinking, dan semua hal baik nemuin jalannya ke kamu.

Aku bersyukur banget bisa kenal dan sayang sama kamu.

Selamat ulang tahun, sayang. 🎉

Semoga kita bisa segera bertemu ya sayanggg🥰

— Orang yang selalu bangga punya kamu`,

  memories: [
    { image: 'photos/zaskia-01.jpg',},
    { image: 'photos/zaskia-02.jpg',},
    { image: 'photos/zaskia-03.jpg',},
    { image: 'photos/zaskia-04.jpg',},
    { image: 'photos/zaskia-05.jpg',},
    { image: 'photos/zaskia-06.jpg',},
    { image: 'photos/zaskia-07.jpg',},
    { image: 'photos/zaskia-08.jpg',},
    { image: 'photos/zaskia-09.jpg',},
    { image: 'photos/zaskia-10.jpg',},
    { image: 'photos/zaskia-11.jpg',},
    { image: 'photos/zaskia-12.jpg',},
    
  ],

  // --- THINGS I LIKE ABOUT YOU ---
  thingsILike: [
    { title: 'Senyumanmu', icon: '😊', message: 'Aku seneng banget liat kamu kalo senyum.' },
    { title: 'Kerandomanmu', icon: '😭', message: 'Kerandomanmu kadang agak bikin panik.' },
    { title: 'Sisi imutmu', icon: '🥹', message: 'Pas kamu mode manja sumpah itu bikin aku saltink parah.' },
  ],

  // --- MINI GAME / QUIZ ---
  // "answer" adalah index (dimulai dari 0) dari array "options".
  quiz: [
    { question: 'Makanan favorit Zaskia adalah...', options: ['Seblak', 'Sushi', 'Bakso', 'Pizza'], answer: 0 },
    { question: 'Kalau lagi bete, Zaskia biasanya...', options: ['Diem aja', 'Curhat panjang lebar', 'Tidur', 'Makan'], answer: 1 },
    { question: 'Warna favorit Zaskia?', options: ['Biru', 'Hitam', 'Pink', 'Hijau'], answer: 2 },
    { question: 'Hal yang paling bikin Zaskia ketawa ngakak?', options: ['Video kucing', 'Meme receh', 'Cerita random aku', 'Semuanya juga bisa'], answer: 3 },
    { question: 'Kalau liburan, Zaskia lebih suka ke...', options: ['Pantai', 'Gunung', 'Mall', 'Rebahan di rumah'], answer: 0 },
  ],

  // Pesan hasil quiz
  quizResult: {
    high: 'Wihhh, ternyata kamu kenal banget sama aku 😭💗',
    low: 'Gapapa, masih ada waktu buat belajar tentang aku 😹💗',
  },

  // --- BIRTHDAY CAKE ---
  cake: {
    title: 'Make a wish, Sayanggg ✨',
    buttonLabel: 'Tiup Lilinnya 🕯️',
    afterMessage: 'Semoga wish kamu terkabul. 💗',
  },

  // --- HIDDEN MESSAGE (easter egg pesan tersembunyi) ---
  hiddenMessageButton: 'Psst... ada sesuatu 👀',
  hiddenMessage: `Kalau kamu pencet tombol ini...

Maaf ya aku belum bisa ke semarang dalam waktu dekat

Tapi gapapa.

Aku cuma mau bilang...

I love you, Sayanggg. 🥰🥰`,

  // --- FINAL SECTION ---
  final: {
    title: 'Happy Birthday, Sayangkuuuu 💗🎂',
    message: 'Semoga tahun ini menjadi salah satu tahun terbaik dalam hidup kamu.',
    subMessage: 'Keep smiling, keep being you.',
    footer: 'Dibuat dengan 💗 oleh orang yang selalu sayang sama kamu.Inisial Jefry😹',
  },

  music: 'music/birthday-song.mp3',

  // --- EASTER EGG ---
  // Muncul kalau elemen tertentu diklik beberapa kali berturut-turut
  easterEgg: {
    triggerCount: 5,
    message: 'HAHA KEPONYA KELIATAN 😭',
  },
}
