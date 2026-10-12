let filterButtons = document.querySelectorAll(".p-filter");
let posts = document.querySelectorAll(".p-post");

function showTopic(topic) {
  for (let i = 0; i < filterButtons.length; i++) {
    if (filterButtons[i].dataset.filter === topic) {
      filterButtons[i].classList.add("on");
      filterButtons[i].setAttribute("aria-pressed", "true");
    } else {
      filterButtons[i].classList.remove("on");
      filterButtons[i].setAttribute("aria-pressed", "false");
    }
  }

  for (let i = 0; i < posts.length; i++) {
    if (topic === "all" || posts[i].dataset.k === topic) {
      posts[i].hidden = false;
    } else {
      posts[i].hidden = true;
    }
  }
}

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    showTopic(filterButtons[i].dataset.filter);
  });
}
