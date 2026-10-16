let cookieBanner = document.getElementById("cookie-banner");
let acceptButton = document.getElementById("cookie-accept");
let declineButton = document.getElementById("cookie-decline");

function startAnalytics() {
  let script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-V2JXWRYFR7";
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    dataLayer.push(arguments);
  };
  gtag("js", new Date());
  gtag("config", "G-V2JXWRYFR7");
}

let choice = localStorage.getItem("if-cookie");

if (choice === "yes") {
  startAnalytics();
}

if (choice !== "yes" && choice !== "no") {
  cookieBanner.hidden = false;
}

acceptButton.addEventListener("click", function () {
  localStorage.setItem("if-cookie", "yes");
  cookieBanner.hidden = true;
  startAnalytics();
});

declineButton.addEventListener("click", function () {
  localStorage.setItem("if-cookie", "no");
  cookieBanner.hidden = true;
});
