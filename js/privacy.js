let analyticsSwitch = document.getElementById("ck-analytics");

if (localStorage.getItem("if-cookie") === "yes") {
  analyticsSwitch.checked = true;
}

analyticsSwitch.addEventListener("change", function () {
  if (analyticsSwitch.checked) {
    localStorage.setItem("if-cookie", "yes");
    startAnalytics();
  } else {
    localStorage.setItem("if-cookie", "no");
    stopAnalytics();
  }
  document.getElementById("cookie-banner").hidden = true;
});

document.getElementById("cookie-accept").addEventListener("click", function () {
  analyticsSwitch.checked = true;
});

document.getElementById("cookie-decline").addEventListener("click", function () {
  analyticsSwitch.checked = false;
});
