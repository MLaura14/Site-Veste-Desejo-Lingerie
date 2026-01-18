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