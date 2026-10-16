let filterButtons = document.querySelectorAll(".filter-button");
let posts = document.querySelectorAll(".post-card");

function showTopic(topic) {
  for (let i = 0; i < filterButtons.length; i++) {
    if (filterButtons[i].dataset.filter === topic) {
      filterButtons[i].classList.add("active");
      filterButtons[i].setAttribute("aria-pressed", "true");
    } else {
      filterButtons[i].classList.remove("active");
      filterButtons[i].setAttribute("aria-pressed", "false");
    }
  }

  for (let i = 0; i < posts.length; i++) {
    if (topic === "all" || posts[i].dataset.topic === topic) {
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
