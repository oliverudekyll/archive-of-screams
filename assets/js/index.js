const cursorCaption = document.getElementById("cursor-caption");

document.addEventListener("mousemove", function (event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  cursorCaption.style.left = `${mouseX - cursorCaption.clientWidth / 2}px`;
  cursorCaption.style.top = `${mouseY - cursorCaption.clientHeight / 2}px`;
});

const contentImages = document.querySelectorAll(".content__img");

contentImages.forEach(function (image) {
  image.addEventListener("mouseover", function (event) {
    const imageCaption = event.target.dataset.caption;

    /* cursorCaption.style.display = "block"; */
    cursorCaption.innerText = imageCaption;
    cursorCaption.style.fontSize = "";
    onmouseout = (event) => {
      /* cursorCaption.style.display = "none"; */
      cursorCaption.innerText = "ʚ♡ɞ";
      cursorCaption.style.fontSize = "1.5rem";
    };
  });
});

window.addEventListener("scroll", () => {
  contentImages.forEach(function (image) {
    let rect = image.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      image.style.transform = "translate(0)";
      /*       image.style.filter = "grayscale(0) contrast(1) brightness(1)"; */
    }
  });
});
