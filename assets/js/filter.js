document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".filter-section button");
  const deals = document.querySelectorAll(".deal");

  if (!buttons.length || !deals.length) return;

  buttons.forEach(btn => {

    btn.addEventListener("click", () => {

      const cat = btn.dataset.cat;

      // Highlight active button
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      deals.forEach(deal => {

        const dealCat = deal.dataset.cat;

        if (cat === "all" || dealCat === cat) {
          deal.style.display = "";
        } else {
          deal.style.display = "none";
        }

      });

    });

  });

});
