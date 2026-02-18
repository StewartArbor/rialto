document.addEventListener("DOMContentLoaded", function () {

  console.log("main.js loaded");

  /* =====================
     FILTER
  ===================== */

  const buttons = document.querySelectorAll(".filter-section button");
  const deals = document.querySelectorAll(".deal");

  console.log("buttons:", buttons.length);
  console.log("deals:", deals.length);

  if (buttons.length && deals.length) {

    buttons.forEach(function (btn) {

      btn.addEventListener("click", function () {

        const cat = btn.dataset.cat;

        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        deals.forEach(function (deal) {

          const dealCat = deal.dataset.cat;

          if (cat === "all" || dealCat === cat) {
            deal.style.display = "";
          } else {
            deal.style.display = "none";
          }

        });

      });

    });

  }


  /* =====================
     RANDOM PICK
  ===================== */

  const pickBtn = document.getElementById("randomPick");

  if (pickBtn) {

    pickBtn.addEventListener("click", function () {

      const links = document.querySelectorAll(".deal a");

      if (!links.length) return;

      const i = Math.floor(Math.random() * links.length);

      window.open(links[i].href, "_blank");

    });

  }


  /* =====================
     CAROUSEL (BASIC)
  ===================== */

  const slides = document.querySelectorAll(".carousel-slide");
  const dotsBox = document.querySelector(".carousel-dots");

  if (slides.length && dotsBox) {

    let index = 0;

    slides.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.className = "carousel-dot";

      if (i === 0) dot.classList.add("active");

      dot.onclick = () => {
        index = i;
        render();
      };

      dotsBox.appendChild(dot);
    });

    const dots = document.querySelectorAll(".carousel-dot");

    function render() {

      slides.forEach((slide, i) => {

        slide.classList.remove("active","prev","next");

        if (i === index) slide.classList.add("active");

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

    setInterval(() => {
      index = (index + 1) % slides.length;
      render();
    }, 6000);

  }

});
