let planButtons = document.querySelectorAll(".plan-button");
let plates = document.querySelectorAll(".plate");
let price = document.querySelector(".plan-price");
let tag = document.querySelector(".plan-tag");
let description = document.querySelector(".plan-details span:last-child");

function choosePlan(plan) {
  for (let i = 0; i < planButtons.length; i++) {
    if (i === plan) {
      planButtons[i].classList.add("active");
      planButtons[i].setAttribute("aria-checked", "true");
    } else {
      planButtons[i].classList.remove("active");
      planButtons[i].setAttribute("aria-checked", "false");
    }
  }

  for (let i = 0; i < plates.length; i++) {
    let plate = plates[i];
    if (Number(plate.dataset.plan) === plan) {
      plate.classList.add("active");
      plate.style.transitionDelay = (Number(plate.dataset.order) * 0.09) + "s";
    } else {
      plate.classList.remove("active");
      plate.style.transitionDelay = "0s";
    }
  }

  let button = planButtons[plan];
  price.textContent = button.dataset.price;
  tag.textContent = button.dataset.tag;
  description.textContent = button.dataset.description;
}

for (let i = 0; i < planButtons.length; i++) {
  planButtons[i].addEventListener("click", function () {
    choosePlan(i);
  });
}
