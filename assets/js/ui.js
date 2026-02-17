document.addEventListener("DOMContentLoaded", () => {

  /* RANDOM PICK */

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
