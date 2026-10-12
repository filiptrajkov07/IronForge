let zones = document.querySelectorAll(".p-zb");
let photos = document.querySelectorAll(".p-stk-media .p-sm");
let bars = document.querySelectorAll(".p-seg");
let zoneDot = document.getElementById("zone-dot");
let zoneName = document.getElementById("zone-name");
let zoneNumber = document.getElementById("zone-num");

let colours = ["#D2372C", "#1E5BBF", "#F2C318", "#2C8A4B"];

function updateZone() {
  let active = 0;
  for (let i = 0; i < zones.length; i++) {
    let heading = zones[i].querySelector("h2");
    let top = heading.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.55) {
      active = i;
    }
  }

  for (let i = 0; i < photos.length; i++) {
    if (i === active) {
      photos[i].classList.add("on");
      bars[i].classList.add("on");
    } else {
      photos[i].classList.remove("on");
      bars[i].classList.remove("on");
    }
  }

  zoneDot.style.background = colours[active];
  zoneName.textContent = zones[active].querySelector("h2").textContent;
  zoneNumber.textContent = "0" + (active + 1);
}

window.addEventListener("scroll", updateZone);
window.addEventListener("resize", updateZone);
updateZone();
