const loadingOverlay = document.getElementById("loading-overlay");

const preface = document.getElementById("preface");
const prefaceAbout = document.getElementById("preface__about");
preface.style.height = `${prefaceAbout.clientHeight}px`;

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
  const ph = prefaceAbout.clientHeight;

  const wv = Math.min(100, Math.max(90, (1 - rect.top / h) * 30 + 70));
  const tv = Math.max(0, (rect.top / ph) * 20);
  const pTv = Math.min(innerHeight, window.scrollY / 2);
  const ov = Math.min(1, (1 - rect.top / h) * 3);
  const pOv = Math.min(1, (rect.top / h) * 0.75);
  const bv = (rect.top / h) * 20;
  const hv = Math.max(50, (1 - window.scrollY / h) * 30 + 70);

  content.style.transform = `translateY(${tv}vh)`;
  content.style.opacity = `${ov}`;
  prefaceAbout.style.transform = `translateY(-${pTv}px)`;
  prefaceAbout.style.opacity = pOv;

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

  const c = Math.random() * 2;
  const trace = document.createElement("span");
  trace.className = "cursor-trace";
  const r = Math.random() * 0.2;
  const offsetY = Math.random() * 25 - 12;
  const offsetX = Math.random() * 25 - 12;
  trace.style.width = `${r}rem`;
  trace.style.height = `${r}rem`;
  trace.style.top = `${event.clientY + offsetY}px`;
  trace.style.left = `${event.clientX + offsetX}px`;

  if (c > 0) {
    document.body.appendChild(trace);
    setTimeout(() => {
      document.body.removeChild(trace);
    }, 1000);
  } else {
  }
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

const menuButton = document.getElementById("menu-btn");
const menuDropdown = document.getElementById("menu-dropdown");

const menuOpen = function () {
  if (!menuDropdown.classList.contains("menu-dropdown--active")) {
    menuDropdown.classList.toggle("menu-dropdown--active");
    menuButton.innerHTML = `Back&thinsp;`;
    menuButton.title = "Back";
    menuButton.ariaLabel = "Back";
  } else {
    menuDropdown.classList.toggle("menu-dropdown--active");
    menuButton.innerHTML = `Menu`;
    menuButton.title = "Menu";
    menuButton.ariaLabel = "Menu";
  }
};

menuButton.onclick = menuOpen;
menuDropdown.onclick = menuOpen;
