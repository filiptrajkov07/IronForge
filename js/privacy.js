let resetButton = document.getElementById("reset-choice");

resetButton.addEventListener("click", function () {
  localStorage.removeItem("if-cookie");
  document.getElementById("cookie-banner").hidden = false;
});
