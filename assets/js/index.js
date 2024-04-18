const loadingOverlay = document.getElementById("loading-overlay");

document.addEventListener("DOMContentLoaded", () => {
  loadingOverlay.style.opacity = "0";
});

const cursorCaption = document.getElementById("cursor-caption");
const cursor = document.getElementById("cursor-caption_cursor");
const caption = document.getElementById("cursor-caption_caption");

const cursorMove = function (event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  cursorCaption.style.left = `${mouseX - cursorCaption.clientWidth / 2}px`;
  cursorCaption.style.top = `${mouseY - cursorCaption.clientHeight / 2}px`;
};

document.addEventListener("DOMContentLoaded", cursorMove);
document.addEventListener("mousemove", cursorMove);

const contentImages = document.querySelectorAll(".content__img");

contentImages.forEach(function (image) {
  image.addEventListener("mouseover", function (event) {
    const imageCaption = event.target.dataset.caption;

    caption.innerText = imageCaption;
    caption.style.opacity = "1";
    cursor.style.width = "0";
    cursor.style.height = "0";
    cursor.style.opacity = "0";
    onmouseout = (event) => {
      caption.style.opacity = "0";
      cursor.style.width = "";
      cursor.style.height = "";
      cursor.style.opacity = "";
    };
  });
});

const preface = document.getElementById("preface");
const prefaceAbout = document.getElementById("preface__about");

window.addEventListener("scroll", () => {
  let prefaceRect = preface.getBoundingClientRect();
  /* prefaceAbout.style.opacity = `${prefaceRect.bottom / window.innerHeight}`; */
  if (prefaceAbout.clientHeight >= prefaceRect.bottom) {
    prefaceAbout.style.transform = `translateY(-${prefaceAbout.clientHeight}px)`;
    prefaceAbout.style.opacity = "0";
  } else {
    prefaceAbout.style.transform = "";
    prefaceAbout.style.opacity = "1";
  }

  contentImages.forEach(function (image) {
    let rect = image.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      image.style.transform = "translate(0)";
      /*       image.style.filter = "grayscale(0) contrast(1) brightness(1)"; */
    }
  });
});
