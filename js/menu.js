let menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", function () {
  let isOpen = document.body.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", isOpen);

  if (isOpen) {
    menuButton.textContent = "✕";
  } else {
    menuButton.textContent = "☰";
  }
});
