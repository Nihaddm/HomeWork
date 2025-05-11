const slider = document.getElementById("slider");

// Mövcud slaydları klonlayıb sona əlavə edirik
const slides = [...slider.children];
slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  slider.appendChild(clone);
});

// Mouse ilə sürüşdürmə
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseup", () => isDown = false);
slider.addEventListener("mouseleave", () => isDown = false);
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX;
  const walk = (startX - x);
  slider.scrollLeft = scrollLeft + walk;

  // Sonsuz dövr: sona çatanda başa qayıt
  if (slider.scrollLeft >= slider.scrollWidth / 2) {
    slider.scrollLeft = 0;
  }
});