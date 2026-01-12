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
const track = document.querySelector(".carousel-track");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let position = 0;

next.addEventListener("click", () => {
  position -= 220;
  track.style.transform = `translateX(${position}px)`;
});

prev.addEventListener("click", () => {
  position += 220;
  track.style.transform = `translateX(${position}px)`;
});
