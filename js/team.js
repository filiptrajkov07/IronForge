let planButtons = document.querySelectorAll(".p-plan");
let plates = document.querySelectorAll(".p-pl");
let price = document.querySelector(".p-load-n");
let tag = document.querySelector(".p-load-tag");
let description = document.querySelector(".p-load-meta span:last-child");

function choosePlan(plan) {
  for (let i = 0; i < planButtons.length; i++) {
    if (i === plan) {
      planButtons[i].classList.add("on");
      planButtons[i].setAttribute("aria-checked", "true");
    } else {
      planButtons[i].classList.remove("on");
      planButtons[i].setAttribute("aria-checked", "false");
    }
  }

  for (let i = 0; i < plates.length; i++) {
    let plate = plates[i];
    if (Number(plate.dataset.plan) === plan) {
      plate.classList.add("on");
      plate.style.transitionDelay = (Number(plate.dataset.j) * 0.09) + "s";
    } else {
      plate.classList.remove("on");
      plate.style.transitionDelay = "0s";
    }
  }

  let button = planButtons[plan];
  price.textContent = button.dataset.price;
  tag.textContent = button.dataset.tag;
  description.textContent = button.dataset.desc;
}

for (let i = 0; i < planButtons.length; i++) {
  planButtons[i].addEventListener("click", function () {
    choosePlan(i);
  });
}
