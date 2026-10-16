let zones = document.querySelectorAll(".zone-block");
let photos = document.querySelectorAll(".zone-photos .zone-photo");
let bars = document.querySelectorAll(".zone-bar");
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
      photos[i].classList.add("active");
      bars[i].classList.add("active");
    } else {
      photos[i].classList.remove("active");
      bars[i].classList.remove("active");
    }
  }

  zoneDot.style.background = colours[active];
  zoneName.textContent = zones[active].querySelector("h2").textContent;
  zoneNumber.textContent = "0" + (active + 1);
}

window.addEventListener("scroll", updateZone);
window.addEventListener("resize", updateZone);
updateZone();
