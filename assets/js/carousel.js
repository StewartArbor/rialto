document.addEventListener("DOMContentLoaded", () => {

  const slides = document.querySelectorAll(".carousel-slide");
  const dotsBox = document.querySelector(".carousel-dots");

  if (!slides.length || !dotsBox) return;

  let index = 0;

  /* Create dots */

  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "carousel-dot";

    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      index = i;
      render();
    });

    dotsBox.appendChild(dot);
  });

  const dots = document.querySelectorAll(".carousel-dot");


  function render() {

    slides.forEach((slide, i) => {

      slide.classList.remove("active", "prev", "next");

      if (i === index) {
        slide.classList.add("active");
      }

      if (i === (index - 1 + slides.length) % slides.length) {
        slide.classList.add("prev");
      }

      if (i === (index + 1) % slides.length) {
        slide.classList.add("next");
      }

    });

    dots.forEach(d => d.classList.remove("active"));
    dots[index].classList.add("active");
  }


  render();


  /* Auto play */

  setInterval(() => {
    index = (index + 1) % slides.length;
    render();
  }, 6000);

});
