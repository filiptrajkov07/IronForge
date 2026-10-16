let bar = document.getElementById("big-barbell");
let scrollHint = document.getElementById("scroll");

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

  let scrollOpacity = 1 - scrolled / (screenHeight * 0.45);
  scrollHint.style.opacity = Math.max(0, scrollOpacity);

  let reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let progress = scrolled / (screenHeight * 0.55);
  if (progress > 1) {
    progress = 1;
  }
  if (reduceMotion) {
    progress = 0;
  }

  let leftPieces = bar.querySelectorAll(".clip-left, .plate-left");
  let rightPieces = bar.querySelectorAll(".plate-right, .clip-right");
  movePieces(leftPieces, -1, progress);
  movePieces(rightPieces, 1, progress);
}

window.addEventListener("scroll", unloadBar);
window.addEventListener("resize", unloadBar);
unloadBar();

let dayButtons = document.querySelectorAll(".day-tab");
let classRows = document.querySelectorAll(".class-row");

let today = new Date().getDay() - 1;
if (today === -1) {
  today = 6;
}

function showDay(day) {
  for (let i = 0; i < dayButtons.length; i++) {
    if (i === day) {
      dayButtons[i].classList.add("active");
      dayButtons[i].setAttribute("aria-selected", "true");
    } else {
      dayButtons[i].classList.remove("active");
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

let todayMark = document.querySelector(".today-mark");
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
