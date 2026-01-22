// BANNER AUTOMÁTICO
const slides = document.querySelectorAll(".hero-slide");
let index = 0;

slides[index].classList.add("active");

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 4000);

// CARROSSEL
const cards = document.querySelectorAll('.lingerie-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});

//NAVBAR//

const nav = document.querySelector('.navbar');

  function ajustarNavbar() {
    document.documentElement.style.setProperty(
      '--nav-height',
      `${nav.offsetHeight}px`
    );
  }

  ajustarNavbar();
  window.addEventListener('resize', ajustarNavbar);

  //FRASES HOME//
  const frasesBox = document.querySelector('.frases-box');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        frasesBox.classList.add('ativo');
      }
    });
  },
  { threshold: 0.4 }
);

observer.observe(frasesBox);