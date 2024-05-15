const loadingOverlay = document.getElementById("loading-overlay");

const prefaceAbout = document.getElementById("preface__about");
/* prefaceAbout.style.transform = "translateY(2rem)"; */

document.addEventListener("DOMContentLoaded", () => {
  loadingOverlay.style.opacity = "0";
  document.body.classList.remove("overflow-none");
  prefaceAbout.style.opacity = "1";
});
