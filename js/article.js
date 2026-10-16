let copyButton = document.getElementById("copy-link");
let language = document.documentElement.lang;

copyButton.addEventListener("click", function () {
  navigator.clipboard.writeText(window.location.href);

  if (language === "mk") {
    copyButton.textContent = "Линкот е копиран";
  } else {
    copyButton.textContent = "Link copied";
  }
});
