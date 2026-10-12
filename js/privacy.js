let analytics = document.getElementById("ck-ana");
let marketing = document.getElementById("ck-mkt");
let saveButton = document.getElementById("save-choices");
let essentialButton = document.getElementById("essential-only");
let savedMessage = document.getElementById("saved-msg");
let language = document.documentElement.lang;

let choice = localStorage.getItem("if-cookie");
if (choice === "all" || choice === "analytics") {
  analytics.checked = true;
}
if (choice === "all" || choice === "marketing") {
  marketing.checked = true;
}

analytics.addEventListener("change", function () {
  savedMessage.hidden = true;
});
marketing.addEventListener("change", function () {
  savedMessage.hidden = true;
});

saveButton.addEventListener("click", function () {
  let value = "essential";
  if (analytics.checked && marketing.checked) {
    value = "all";
  } else if (analytics.checked) {
    value = "analytics";
  } else if (marketing.checked) {
    value = "marketing";
  }
  localStorage.setItem("if-cookie", value);

  if (language === "mk") {
    savedMessage.textContent = "Зачувано. Можеш да го промениш кога сакаш.";
  } else {
    savedMessage.textContent = "Saved. You can change this any time.";
  }
  savedMessage.hidden = false;
});

essentialButton.addEventListener("click", function () {
  analytics.checked = false;
  marketing.checked = false;
  localStorage.setItem("if-cookie", "essential");

  if (language === "mk") {
    savedMessage.textContent = "Зачувано: само неопходни колачиња.";
  } else {
    savedMessage.textContent = "Saved: essential cookies only.";
  }
  savedMessage.hidden = false;
});
