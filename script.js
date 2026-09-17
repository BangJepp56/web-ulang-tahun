document.addEventListener('DOMContentLoaded', () => {
  initGiftOpening()
  fillStaticText()
  initHeroBackgroundSlider()
  initFloaties()
  initLetter()
  initPhotoSlider()
  initPhotoGallery()
  initLightbox()
  initLikeCards()
  initCake()
  initHiddenMessage()
  initMusicPlayer()
  initScrollReveal()
  initAOS()
})

/* ---------------------------------------------------------
   AOS (Animate On Scroll) setup
--------------------------------------------------------- */
function initAOS() {
  if (typeof AOS === 'undefined') return
  AOS.init({
    duration: 750,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60,
    anchorPlacement: 'top-bottom',
  })
}

/* ---------------------------------------------------------
   Helper: buat elemen floaty (hati/bintang/sparkle) mengambang
--------------------------------------------------------- */
function spawnFloaties(container, { symbol = '💗', count = 6, colorClass = '' } = {}) {
  for (let i = 0; i < count; i++) {
    const el = document.createElement('span')
    el.className = 'floaty-item'
    el.textContent = symbol
    const left = Math.round(Math.random() * 90) + 2
    const size = 14 + Math.round(Math.random() * 16)
    const duration = 6 + Math.random() * 5
    const delay = Math.random() * 4
    el.style.left = left + '%'
    el.style.fontSize = size + 'px'
    el.style.animationDuration = duration + 's'
    el.style.animationDelay = delay + 's'
    container.appendChild(el)
  }
}

function initFloaties() {
  const giftFloaties = document.getElementById('gift-floaties')
  if (giftFloaties) {
    spawnFloaties(giftFloaties, { symbol: '💗', count: 6 })
    spawnFloaties(giftFloaties, { symbol: '✨', count: 4 })
  }

  document.querySelectorAll('.hero-section .floaty-layer').forEach((layer) => {
    spawnFloaties(layer, { symbol: '💗', count: 5 })
    spawnFloaties(layer, { symbol: '⭐', count: 4 })
    spawnFloaties(layer, { symbol: '✨', count: 4 })
  })

  const finalFloaties = document.getElementById('final-floaties')
  if (finalFloaties) {
    spawnFloaties(finalFloaties, { symbol: '💗', count: 6 })
    spawnFloaties(finalFloaties, { symbol: '✨', count: 5 })
    spawnFloaties(finalFloaties, { symbol: '⭐', count: 4 })
  }
}

/* ---------------------------------------------------------
   Confetti helpers (pakai library canvas-confetti dari CDN)
--------------------------------------------------------- */
const THEME_COLORS = ['#ff87b0', '#c39ff2', '#ffb87d', '#ffd1e2', '#f45f93']

function burstConfetti(opts = {}) {
  if (typeof confetti !== 'function') return
  confetti({
    particleCount: 90,
    spread: 75,
    origin: { y: 0.6 },
    colors: THEME_COLORS,
    disableForReducedMotion: true,
    ...opts,
  })
}

function heartConfettiBurst() {
  if (typeof confetti !== 'function') return
  try {
    const heart = confetti.shapeFromText({ text: '💗', scalar: 2 })
    confetti({
      particleCount: 26,
      spread: 70,
      scalar: 2,
      shapes: [heart],
      origin: { y: 0.6 },
      disableForReducedMotion: true,
    })
  } catch (e) {
    burstConfetti({ particleCount: 40 })
  }
}

function fireworksBurst() {
  if (typeof confetti !== 'function') return
  const duration = 1800
  const end = Date.now() + duration
  ;(function frame() {
    confetti({
      particleCount: 4, angle: 60, spread: 60,
      origin: { x: 0, y: 0.6 }, colors: THEME_COLORS, disableForReducedMotion: true,
    })
    confetti({
      particleCount: 4, angle: 120, spread: 60,
      origin: { x: 1, y: 0.6 }, colors: THEME_COLORS, disableForReducedMotion: true,
    })
    if (Date.now() < end) requestAnimationFrame(frame)
  })()
}

/* ---------------------------------------------------------
   Gift Opening screen
--------------------------------------------------------- */
function initGiftOpening() {
  const screen = document.getElementById('gift-screen')
  const box = document.getElementById('gift-box')
  const icon = document.getElementById('gift-icon')
  const openBtn = document.getElementById('gift-open-btn')
  const greeting = document.getElementById('gift-greeting')
  const subtext = document.getElementById('gift-subtext')
  const mainContent = document.getElementById('main-content')

  greeting.textContent = birthdayData.opening.greeting
  subtext.textContent = birthdayData.opening.subtext
  openBtn.textContent = birthdayData.opening.buttonLabel

  let opened = false
  function handleOpen() {
    if (opened) return
    opened = true
    const audio = document.getElementById('bg-audio')
    if (audio) audio.play().catch(() => {})
    box.classList.add('opening')
    icon.classList.add('swapped')
    setTimeout(() => { icon.textContent = '❤️'; icon.classList.remove('swapped') }, 300)
    openBtn.disabled = true

    burstConfetti({ origin: { y: 0.5 } })
    setTimeout(() => heartConfettiBurst(), 250)

    setTimeout(() => {
      screen.classList.add('closing')
      mainContent.classList.remove('hidden')
      document.getElementById('music-player').classList.remove('hidden')
      // Elemen dalam main-content baru punya ukuran/posisi nyata setelah
      // class "hidden" dilepas, jadi AOS perlu dihitung ulang di sini.
      if (typeof AOS !== 'undefined') AOS.refreshHard()
      setTimeout(() => { screen.style.display = 'none' }, 650)
    }, 1200)
  }

  box.addEventListener('click', handleOpen)
  openBtn.addEventListener('click', handleOpen)
}

/* ---------------------------------------------------------
   Isi teks statis dari data.js ke berbagai section
--------------------------------------------------------- */
function fillStaticText() {
  document.getElementById('hero-title').textContent = birthdayData.hero.title
  document.getElementById('hero-subtitle').textContent = birthdayData.hero.subtitle
  document.getElementById('hero-next-btn').textContent = birthdayData.hero.buttonLabel
  document.getElementById('hero-next-btn').addEventListener('click', () => {
    document.getElementById('letter-anchor').scrollIntoView({ behavior: 'smooth', block: 'start' })
  })

  document.getElementById('cake-title').textContent = birthdayData.cake.title
  document.getElementById('blow-btn').textContent = birthdayData.cake.buttonLabel
  document.getElementById('cake-after-msg').textContent = birthdayData.cake.afterMessage

  document.getElementById('hidden-msg-btn').textContent = birthdayData.hiddenMessageButton
  document.getElementById('hidden-modal-text').textContent = birthdayData.hiddenMessage

  document.getElementById('final-title').textContent = birthdayData.final.title
  document.getElementById('final-message').textContent = birthdayData.final.message
  document.getElementById('final-submessage').textContent = birthdayData.final.subMessage
  document.getElementById('final-footer').textContent = birthdayData.final.footer

  document.title = `Happy Birthday, ${birthdayData.nickname} 💗`
}

/* ---------------------------------------------------------
   Hero background: parallax + auto-fading photo slider + gradient
--------------------------------------------------------- */
function initHeroBackgroundSlider() {
  const wrap = document.getElementById('hero-bg-slider')
  const heroSection = document.getElementById('hero-section')
  if (!wrap || !heroSection) return

  // Pakai birthdayData.heroBackgrounds kalau ada, kalau tidak pakai foto
  // dari birthdayData.memories sebagai fallback supaya tetap jalan tanpa
  // perlu nambah field baru di data.js.
  const images = (birthdayData.heroBackgrounds && birthdayData.heroBackgrounds.length)
    ? birthdayData.heroBackgrounds
    : (birthdayData.memories || []).map((m) => m.image).filter(Boolean)

  if (!images.length) return // cukup pakai gradient polos kalau belum ada foto

  // Gunakan hanya satu foto sebagai background hero.
  const src = images[0]
  {
    const slide = document.createElement('div')
    slide.className = 'hero-bg-slide active'
    slide.style.backgroundImage = `url("${src}")`
    wrap.appendChild(slide)
  }

  // Efek parallax: layer foto bergerak lebih lambat dari scroll.
  let ticking = false
  function updateParallax() {
    const rect = heroSection.getBoundingClientRect()
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      const offset = rect.top * -0.22
      wrap.style.transform = `translateY(${offset}px)`
    }
    ticking = false
  }
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax)
      ticking = true
    }
  }, { passive: true })
  updateParallax()
}

/* ---------------------------------------------------------
   Surat ulang tahun
--------------------------------------------------------- */
function initLetter() {
  const btn = document.getElementById('envelope-btn')
  const card = document.getElementById('letter-card')
  card.classList.add('glass-card')
  card.textContent = birthdayData.letter

  btn.addEventListener('click', () => {
    btn.classList.add('hidden')
    card.classList.remove('hidden')
    if (typeof AOS !== 'undefined') AOS.refresh()
  })
}

/* ---------------------------------------------------------
   Auto photo slider (crossfade carousel dengan panah + dots)
--------------------------------------------------------- */
function initPhotoSlider() {
  const section = document.querySelector('.slider-section')
  const track = document.getElementById('photo-slider-track')
  const caption = document.getElementById('slider-caption')
  const dotsWrap = document.getElementById('slider-dots')
  const prevBtn = document.getElementById('slider-prev')
  const nextBtn = document.getElementById('slider-next')
  if (!track) return

  const photos = birthdayData.memories || []
  if (!photos.length) {
    if (section) section.classList.add('hidden')
    return
  }

  let current = 0
  let timer = null

  photos.forEach((photo, i) => {
    const slide = document.createElement('div')
    slide.className = 'slider-slide' + (i === 0 ? ' active' : '')
    const img = document.createElement('img')
    img.src = photo.image
    img.alt = photo.caption || ''
    img.loading = 'lazy'
    slide.appendChild(img)
    track.appendChild(slide)

    const dot = document.createElement('button')
    dot.type = 'button'
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '')
    dot.setAttribute('aria-label', `Foto ${i + 1}`)
    dot.addEventListener('click', () => goTo(i))
    dotsWrap.appendChild(dot)
  })

  function render() {
    track.querySelectorAll('.slider-slide').forEach((el, i) => {
      el.classList.toggle('active', i === current)
    })
    dotsWrap.querySelectorAll('.slider-dot').forEach((el, i) => {
      el.classList.toggle('active', i === current)
    })
    caption.textContent = photos[current].caption || ''
  }

  function goTo(index) {
    current = (index + photos.length) % photos.length
    render()
    restartTimer()
  }

  function next() { goTo(current + 1) }
  function prev() { goTo(current - 1) }

  function restartTimer() {
    if (timer) clearInterval(timer)
    if (photos.length > 1) {
      timer = setInterval(next, 4000)
    }
  }

  prevBtn.addEventListener('click', prev)
  nextBtn.addEventListener('click', next)

  // pause auto-play saat pointer di atas slider, lanjut lagi saat pointer keluar
  const sliderCard = document.getElementById('photo-slider')
  sliderCard.addEventListener('mouseenter', () => { if (timer) clearInterval(timer) })
  sliderCard.addEventListener('mouseleave', restartTimer)

  render()
  restartTimer()
}

/* ---------------------------------------------------------
   Galeri foto (polaroid grid)
--------------------------------------------------------- */
const ROTATIONS = [-4, 3, -2, 4, -3, 2, -5, 5]
let currentLightboxIndex = null

function initPhotoGallery() {
  const grid = document.getElementById('photo-grid')
  birthdayData.memories.forEach((photo, index) => {
    const cell = document.createElement('div')
    cell.className = 'photo-cell'
    cell.setAttribute('data-aos', 'fade-up')
    cell.setAttribute('data-aos-delay', String((index % 4) * 100))

    const card = document.createElement('button')
    card.type = 'button'
    card.className = 'polaroid'
    card.style.transform = `rotate(${ROTATIONS[index % ROTATIONS.length]}deg)`

    const photoWrap = document.createElement('div')
    photoWrap.className = 'polaroid-photo'
    const img = document.createElement('img')
    img.src = photo.image
    img.alt = photo.caption || ''
    img.loading = 'lazy'
    img.onerror = () => { photoWrap.style.display = 'none' }
    photoWrap.appendChild(img)

    const caption = document.createElement('p')
    caption.className = 'polaroid-caption'
    caption.textContent = photo.caption || ''

    card.appendChild(photoWrap)
    card.appendChild(caption)
    card.addEventListener('click', () => openLightbox(index))
    cell.appendChild(card)
    grid.appendChild(cell)
  })
}

/* ---------------------------------------------------------
   Lightbox foto fullscreen
--------------------------------------------------------- */
function initLightbox() {
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox)
  document.getElementById('lightbox-prev').addEventListener('click', (e) => {
    e.stopPropagation()
    navigateLightbox(-1)
  })
  document.getElementById('lightbox-next').addEventListener('click', (e) => {
    e.stopPropagation()
    navigateLightbox(1)
  })
  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox()
  })
  document.addEventListener('keydown', (e) => {
    if (currentLightboxIndex === null) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') navigateLightbox(1)
    if (e.key === 'ArrowLeft') navigateLightbox(-1)
  })
}

function openLightbox(index) {
  currentLightboxIndex = index
  renderLightbox()
  document.getElementById('lightbox').classList.remove('hidden')
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  currentLightboxIndex = null
  document.getElementById('lightbox').classList.add('hidden')
  document.body.style.overflow = ''
}

function navigateLightbox(dir) {
  const total = birthdayData.memories.length
  currentLightboxIndex = (currentLightboxIndex + dir + total) % total
  renderLightbox()
}

function renderLightbox() {
  const photo = birthdayData.memories[currentLightboxIndex]
  document.getElementById('lightbox-img').src = photo.image
  document.getElementById('lightbox-img').alt = photo.caption || ''
  document.getElementById('lightbox-caption').textContent = photo.caption || ''
}

/* ---------------------------------------------------------
   Things I Like About You
--------------------------------------------------------- */
function initLikeCards() {
  const grid = document.getElementById('like-grid')
  birthdayData.thingsILike.forEach((item, index) => {
    const card = document.createElement('button')
    card.type = 'button'
    card.className = 'like-card glass-card'
    card.setAttribute('data-aos', 'fade-up')
    card.setAttribute('data-aos-delay', String((index % 4) * 100))

    const icon = document.createElement('span')
    icon.className = 'like-icon'
    icon.textContent = item.icon

    const title = document.createElement('p')
    title.className = 'like-title'
    title.textContent = item.title

    const message = document.createElement('p')
    message.className = 'like-message'
    message.textContent = item.message

    const heart = document.createElement('span')
    heart.className = 'like-heart-pop'
    heart.textContent = '💗'

    card.appendChild(icon)
    card.appendChild(title)
    card.appendChild(message)
    card.appendChild(heart)

    card.addEventListener('click', () => {
      const alreadyActive = card.classList.contains('active')
      // tutup kartu lain, buka/tutup kartu ini
      grid.querySelectorAll('.like-card').forEach((c) => c.classList.remove('active', 'bounced'))
      if (!alreadyActive) {
        card.classList.add('active', 'bounced')
      }
    })

    grid.appendChild(card)
  })
}

/* ---------------------------------------------------------
   Birthday Cake
--------------------------------------------------------- */
function initCake() {
  const wrap = document.getElementById('cake-svg-wrap')
  wrap.innerHTML = cakeSvg(true)

  const blowBtn = document.getElementById('blow-btn')
  const afterMsg = document.getElementById('cake-after-msg')
  let blown = false

  function handleBlow() {
    if (blown) return
    blown = true
    wrap.innerHTML = cakeSvg(false)
    wrap.classList.add('blown-anim')
    blowBtn.classList.add('hidden')
    afterMsg.classList.remove('hidden')

    fireworksBurst()
    setTimeout(() => heartConfettiBurst(), 400)

    const cakeFloaties = document.getElementById('cake-floaties')
    spawnFloaties(cakeFloaties, { symbol: '✨', count: 6 })
    spawnFloaties(cakeFloaties, { symbol: '💗', count: 5 })
  }

  wrap.addEventListener('click', handleBlow)
  blowBtn.addEventListener('click', handleBlow)
}

function cakeSvg(lit) {
  const candleX = [105, 130, 155]
  const flames = lit
    ? candleX
        .map(
          (cx) => `
      <g class="flame">
        <path d="M${cx} 40 C ${cx - 6} 50, ${cx - 6} 58, ${cx} 60 C ${cx + 6} 58, ${cx + 6} 50, ${cx} 40 Z" fill="#ffb84d"/>
        <path d="M${cx} 47 C ${cx - 3} 52, ${cx - 3} 56, ${cx} 58 C ${cx + 3} 56, ${cx + 3} 52, ${cx} 47 Z" fill="#fff4d6"/>
      </g>`
        )
        .join('')
    : ''

  return `
  <svg viewBox="0 0 260 220" width="220" height="186" style="filter: drop-shadow(0 10px 25px rgba(0,0,0,0.15));">
    <ellipse cx="130" cy="205" rx="100" ry="10" fill="#f5d9e6" />
    <rect x="40" y="140" width="180" height="55" rx="14" fill="#ffb0cd" />
    <rect x="40" y="140" width="180" height="14" rx="7" fill="#ff9ac0" />
    <rect x="65" y="95" width="130" height="50" rx="14" fill="#fff2f7" />
    <rect x="65" y="95" width="130" height="14" rx="7" fill="#ffe1ec" />
    <circle cx="85" cy="122" r="4" fill="#c39ff2" />
    <circle cx="110" cy="122" r="4" fill="#ff87b0" />
    <circle cx="135" cy="122" r="4" fill="#c39ff2" />
    <circle cx="160" cy="122" r="4" fill="#ff87b0" />
    <circle cx="185" cy="122" r="4" fill="#c39ff2" />
    ${candleX.map((cx) => `<rect x="${cx - 3}" y="60" width="6" height="35" rx="2" fill="#8a52d4" />`).join('')}
    ${flames}
  </svg>`
}

/* ---------------------------------------------------------
   Hidden Message + Easter Egg
--------------------------------------------------------- */
function initHiddenMessage() {
  const btn = document.getElementById('hidden-msg-btn')
  const modal = document.getElementById('hidden-modal')
  const closeBtn = document.getElementById('hidden-modal-close')
  const easterDot = document.getElementById('easter-egg-dot')
  const toast = document.getElementById('easter-toast')

  btn.addEventListener('click', () => {
    modal.classList.remove('hidden')
    heartConfettiBurst()
  })
  closeBtn.addEventListener('click', () => modal.classList.add('hidden'))
  modal.addEventListener('click', (e) => {
    if (e.target.id === 'hidden-modal') modal.classList.add('hidden')
  })

  let clickCount = 0
  let clickTimer = null
  easterDot.addEventListener('click', () => {
    clickCount += 1
    clearTimeout(clickTimer)
    clickTimer = setTimeout(() => { clickCount = 0 }, 1500)

    if (clickCount >= birthdayData.easterEgg.triggerCount) {
      clickCount = 0
      toast.textContent = birthdayData.easterEgg.message
      toast.classList.remove('hidden')
      burstConfetti()
      setTimeout(() => heartConfettiBurst(), 250)
      setTimeout(() => toast.classList.add('hidden'), 2600)
    }
  })
}

/* ---------------------------------------------------------
   Music Player (tanpa autoplay)
--------------------------------------------------------- */
function initMusicPlayer() {
  const audio = document.getElementById('bg-audio')
  const toggle = document.getElementById('music-toggle')
  const icon = document.getElementById('music-icon')
  audio.src = birthdayData.music

  let isPlaying = false
  let hasError = false

  audio.addEventListener('error', () => {
    hasError = true
    toggle.disabled = true
    toggle.title = 'Musik belum tersedia'
  })

  toggle.addEventListener('click', async () => {
    if (hasError) return
    try {
      if (isPlaying) {
        audio.pause()
        isPlaying = false
        icon.textContent = '🎵'
        toggle.classList.remove('playing')
      } else {
        await audio.play()
        isPlaying = true
        icon.textContent = '⏸'
        toggle.classList.add('playing')
      }
    } catch (e) {
      hasError = true
      toggle.disabled = true
      toggle.title = 'Musik belum tersedia'
    }
  })
}

/* ---------------------------------------------------------
   Scroll reveal fallback untuk elemen dengan class .reveal
   (dipakai kalau AOS gagal load; kalau AOS aktif, class ini
   praktis tidak dipakai lagi karena elemen baru pakai data-aos)
--------------------------------------------------------- */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  )

  const attach = () => {
    document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => observer.observe(el))
  }
  attach()
  setTimeout(attach, 50)
}