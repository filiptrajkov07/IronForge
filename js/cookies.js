let cookieBanner = document.getElementById("cookie-banner");
let cookieOkButton = document.getElementById("cookie-ok");

if (localStorage.getItem("if-cookie") === null) {
  cookieBanner.hidden = false;
}

cookieOkButton.addEventListener("click", function () {
  localStorage.setItem("if-cookie", "ok");
  cookieBanner.hidden = true;
});
