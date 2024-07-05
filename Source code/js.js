/* --------------- PROGRESS BAR --------------- */

const progressBar = document.querySelectorAll(".progress-bar");
var progressBarContainer = document.querySelector(".scrl");
let start;
document.onscroll = function () {
  if (isElementInViewport(progressBarContainer)) {
    if (!start) {
      window.requestAnimationFrame(loop);
    }
  } else {
    start = null;
  }
};
const animationTime = 3000;
function loop(timestamp) {
  if (!start) {
    start = timestamp;
  }
  const elapsed = timestamp - start;
  const progress = elapsed / animationTime;
  progressBar.forEach((bar) => {
    const progressComplete = bar.getAttribute("data-complete");
    const width = progress < 1 ? Math.ceil(progress * 100) : progressComplete;
    if (width <= progressComplete) {
      bar.style.width = width + "%";
      bar.innerHTML = width + "%";
    }
  });
  if (progress <= 1) {
    window.requestAnimationFrame(loop);
  }
}
function isElementInViewport(element) {
  var rectangle = element.getBoundingClientRect();
  var height = window.innerHeight || document.documentElement.clientHeight;
  var top = rectangle.top;
  var bottom = rectangle.bottom;
  return (
    (top <= 0 && bottom >= 0) ||
    (bottom >= height && top <= height) ||
    (top >= 0 && bottom <= height)
  );
}

/* --------------- SHADOW ON NAVIGATION BAR WHILE SCROLLING --------------- */

window.onscroll = function () {
  shadow();
};
function shadow() {
  const nav_Head = document.getElementById("heading");
  if (document.body.scrollTop || document.documentElement.scrollTop) {
    nav_Head.style.boxShadow = "3px 0.53em 1.0em rgba(0, 0, 0, 0.3)";
  } else {
    nav_Head.style.boxShadow = "none";
  }
}
