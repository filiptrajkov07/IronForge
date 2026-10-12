let bar = document.getElementById("hero-bar");
let scrollCue = document.getElementById("scroll-cue");

function movePieces(pieces, direction, progress) {
  for (let i = 0; i < pieces.length; i++) {
    let piece = pieces[i];

    let rank = i;
    if (direction === 1) {
      rank = pieces.length - 1 - i;
    }

    let k = (progress - rank * 0.12) / 0.5;
    if (k < 0) {
      k = 0;
    }
    if (k > 1) {
      k = 1;
    }

    if (k === 0) {
      piece.style.translate = "";
      piece.style.rotate = "";
      piece.style.opacity = "";
    } else {
      let ease = k * k;
      piece.style.translate = (direction * ease * 34) + "vw " + (ease * ease * 90) + "px";
      piece.style.rotate = (direction * ease * 9) + "deg";
      let fade = 1 - Math.max(0, k - 0.45) / 0.55;
      piece.style.opacity = Math.max(0, fade);
    }
  }
}

function unloadBar() {
  let scrolled = window.scrollY;
  let screenHeight = window.innerHeight;

  let cueOpacity = 1 - scrolled / (screenHeight * 0.45);
  scrollCue.style.opacity = Math.max(0, cueOpacity);

  let reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let progress = scrolled / (screenHeight * 0.55);
  if (progress > 1) {
    progress = 1;
  }
  if (reduceMotion) {
    progress = 0;
  }

  let leftPieces = bar.querySelectorAll(".p-clip-l, .p-load-l");
  let rightPieces = bar.querySelectorAll(".p-load-r, .p-clip-r");
  movePieces(leftPieces, -1, progress);
  movePieces(rightPieces, 1, progress);
}

window.addEventListener("scroll", unloadBar);
window.addEventListener("resize", unloadBar);
unloadBar();

let dayButtons = document.querySelectorAll(".p-day");
let classRows = document.querySelectorAll(".p-tt-row");

let today = new Date().getDay() - 1;
if (today === -1) {
  today = 6;
}

function showDay(day) {
  for (let i = 0; i < dayButtons.length; i++) {
    if (i === day) {
      dayButtons[i].classList.add("on");
      dayButtons[i].setAttribute("aria-selected", "true");
    } else {
      dayButtons[i].classList.remove("on");
      dayButtons[i].setAttribute("aria-selected", "false");
    }
  }

  for (let i = 0; i < classRows.length; i++) {
    let rowDay = Number(classRows[i].dataset.day);
    classRows[i].hidden = rowDay !== day;
  }
}

for (let i = 0; i < dayButtons.length; i++) {
  dayButtons[i].addEventListener("click", function () {
    showDay(i);
  });
}

let todayMark = document.querySelector(".p-day-dot");
dayButtons[today].appendChild(todayMark);

showDay(today);

let todayHours = document.getElementById("today-hours");
let hours = "06:00–23:00";
if (today === 5) {
  hours = "08:00–21:00";
}
if (today === 6) {
  hours = "09:00–18:00";
}
todayHours.textContent = todayHours.dataset.label + " " + hours;

let banner = document.querySelector("[role='dialog']");
let acceptAllButton = document.getElementById("accept-all");
let essentialButton = document.getElementById("accept-essential");

if (localStorage.getItem("if-cookie") === null) {
  banner.hidden = false;
}

acceptAllButton.addEventListener("click", function () {
  localStorage.setItem("if-cookie", "all");
  banner.hidden = true;
});

essentialButton.addEventListener("click", function () {
  localStorage.setItem("if-cookie", "essential");
  banner.hidden = true;
});
