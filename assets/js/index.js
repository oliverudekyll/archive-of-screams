const loadingOverlay = document.getElementById("loading-overlay");

const prefaceAbout = document.getElementById("preface__about");
/* prefaceAbout.style.transform = "translateY(2rem)"; */

document.addEventListener("DOMContentLoaded", () => {
  loadingOverlay.style.opacity = "0";
  document.body.classList.remove("overflow-none");
});

const prefaceParagraphs = document.querySelectorAll(".preface__about__p");

prefaceParagraphs.forEach((p) => {
  const c = p.dataset.column;
  const s = p.dataset.span;

  p.style.gridColumn = `${c} / span ${s}`;
});

window.addEventListener("scroll", () => {
  const content = document.getElementById("content");
  let rect = content.getBoundingClientRect();
  const h = window.innerHeight;

  const wv = Math.min(100, Math.max(90, (1 - rect.top / h) * 30 + 70));
  const tv = (rect.top / h) * 20;
  const pTv = Math.min(innerHeight, window.scrollY / 1.7);
  const ov = 1 - rect.top / h;
  const bv = (rect.top / h) * 20;
  const hv = Math.max(50, (1 - window.scrollY / h) * 30 + 70);

  content.style.transform = `translateY(${tv}vh)`;
  content.style.opacity = `${ov}`;
  /* content.style.filter = `blur(${bv}px)`; */
  /* prefaceAbout.style.minHeight = `${hv}vh`; */
  prefaceAbout.style.transform = `translateY(-${pTv}px)`;

  contentImages.forEach(function (image) {
    let rect = image.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      image.style.transform = "translate(0)";
    }
  });
});

const cursorCaption = document.getElementById("cursor-caption");
const cursor = document.getElementById("cursor-caption__cursor");
const caption = document.getElementById("cursor-caption__caption");
const date = document.getElementById("cursor-caption__date");

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
    const imageDate = event.target.dataset.date;

    caption.innerText = imageCaption;
    caption.style.opacity = "1";
    date.innerText = imageDate;
    date.style.opacity = "1";
    cursor.style.width = "0";
    cursor.style.height = "0";
    cursor.style.opacity = "0";
    onmouseout = (event) => {
      caption.style.opacity = "0";
      date.style.opacity = "0";
      cursor.style.width = "";
      cursor.style.height = "";
      cursor.style.opacity = "";
    };
  });
});

const preface = document.getElementById("preface");

/* window.addEventListener("scroll", () => {
  let prefaceRect = preface.getBoundingClientRect();
  if (
    prefaceRect.bottom <= window.innerHeight / 2 ||
    prefaceAbout.clientHeight >= prefaceRect.bottom
  ) {
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
    }
  });
}); */

const menuButton = document.getElementById("menu-btn");
const menuDropdown = document.getElementById("menu-dropdown");

const menuOpen = function () {
  if (!menuDropdown.classList.contains("menu-dropdown--active")) {
    menuDropdown.classList.toggle("menu-dropdown--active");
    menuButton.innerHTML = `Back&thinsp;`;
  } else {
    menuDropdown.classList.toggle("menu-dropdown--active");
    menuButton.innerHTML = `Menu`;
  }
};

menuButton.onclick = menuOpen;
menuDropdown.onclick = menuOpen;
