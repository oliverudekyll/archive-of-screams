const loadingOverlay = document.getElementById("loading-overlay");

const prefaceAbout = document.getElementById("preface__about");
/* prefaceAbout.style.transform = "translateY(2rem)"; */

document.addEventListener("DOMContentLoaded", () => {
  loadingOverlay.style.opacity = "0";
  document.body.classList.remove("overflow-none");
  prefaceAbout.style.opacity = "1";
});

const cursorCaption = document.getElementById("cursor-caption");
const cursor = document.getElementById("cursor-caption__cursor");
const pointerElements = document.querySelectorAll(".pointer");

pointerElements.forEach((e) => {
  e.addEventListener("mouseover", () => {
    cursor.classList.add("highlight");
    onmouseout = (event) => {
      cursor.classList.remove("highlight");
    };
  });
});

const cursorMove = function (event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  cursorCaption.style.left = `${mouseX - cursorCaption.clientWidth / 2}px`;
  cursorCaption.style.top = `${mouseY - cursorCaption.clientHeight / 2}px`;
};

document.addEventListener("DOMContentLoaded", cursorMove);
document.addEventListener("mousemove", cursorMove);
