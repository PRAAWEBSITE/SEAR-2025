// Toggle menu mobile
const burger = document.getElementById('burger');
const navMenu = document.getElementById('nav-menu');
burger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Tahun otomatis
document.getElementById('year').textContent = new Date().getFullYear();

// Link pendaftaran
const REG_LINK = "https://link-pendaftaranmu.com"; // ganti nanti
document.getElementById('register-btn').href = REG_LINK;

// Animasi fade saat scroll
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight / 1.3;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.classList.add('visible');
  });
});
