let cookieBanner = document.getElementById("cookie-banner");
let acceptButton = document.getElementById("cookie-accept");
let declineButton = document.getElementById("cookie-decline");

let analyticsId = "G-V2JXWRYFR7";
let analyticsLoaded = false;

function startAnalytics() {
  window["ga-disable-" + analyticsId] = false;

  if (analyticsLoaded) {
    gtag("config", analyticsId);
    return;
  }
  analyticsLoaded = true;

  let script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + analyticsId;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    dataLayer.push(arguments);
  };
  gtag("js", new Date());
  gtag("config", analyticsId);
}

function stopAnalytics() {
  window["ga-disable-" + analyticsId] = true;

  let names = ["_ga", "_ga_" + analyticsId.replace("G-", "")];
  let parts = location.hostname.split(".");

  for (let i = 0; i < names.length; i++) {
    document.cookie = names[i] + "=; max-age=0; path=/";
    for (let j = 0; j < parts.length - 1; j++) {
      let domain = parts.slice(j).join(".");
      document.cookie = names[i] + "=; max-age=0; path=/; domain=." + domain;
    }
  }
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
  stopAnalytics();
});
