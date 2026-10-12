let copyButton = document.getElementById("copy-link");
let postAddress = "https://ironforge.mk/blog/squat-depth";
let language = document.documentElement.lang;

copyButton.addEventListener("click", function () {
  navigator.clipboard.writeText(postAddress);

  if (language === "mk") {
    copyButton.textContent = "Линкот е копиран";
  } else {
    copyButton.textContent = "Link copied";
  }
});
