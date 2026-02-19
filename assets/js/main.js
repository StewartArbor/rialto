console.log("main.js loaded");

document.addEventListener("DOMContentLoaded", function () {

  /* ===== FILTER ===== */

  const buttons = document.querySelectorAll("[data-cat]");
  const deals = document.querySelectorAll(".deal");

  console.log("Buttons:", buttons.length);
  console.log("Deals:", deals.length);

  buttons.forEach(btn => {

    btn.addEventListener("click", () => {

      const cat = btn.dataset.cat;

      console.log("Filter:", cat);

      deals.forEach(deal => {

        if (cat === "all") {
          deal.style.display = "block";
          return;
        }

        if (deal.dataset.cat === cat) {
          deal.style.display = "block";
        } else {
          deal.style.display = "none";
        }

      });

    });

  });


  /* ===== RANDOM PICK ===== */

  const pickBtn = document.getElementById("randomPick");

  if (pickBtn) {

    pickBtn.addEventListener("click", () => {

      const links = document.querySelectorAll(".deal a");

      if (!links.length) return;

      const i = Math.floor(Math.random() * links.length);

      window.open(links[i].href, "_blank");

    });

  }

});
