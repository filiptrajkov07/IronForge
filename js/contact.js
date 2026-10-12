let language = document.documentElement.lang;

let now = new Date();
let weekday = now.getDay();
let hourNow = now.getHours() + now.getMinutes() / 60;

let opens = 6;
let closes = 23;
if (weekday === 6) {
  opens = 8;
  closes = 21;
}
if (weekday === 0) {
  opens = 9;
  closes = 18;
}

let openText = document.getElementById("open-text");
let openDot = document.getElementById("open-dot");

if (hourNow >= opens && hourNow < closes) {
  if (language === "mk") {
    openText.textContent = "Отворено сега · до " + closes + ":00";
  } else {
    openText.textContent = "Open now · until " + closes + ":00";
  }
  openDot.style.background = "#2C8A4B";
  openDot.style.color = "#2C8A4B";
} else {
  if (hourNow < opens) {
    if (language === "mk") {
      openText.textContent = "Затворено · отвора во 0" + opens + ":00";
    } else {
      openText.textContent = "Closed now · opens at 0" + opens + ":00";
    }
  } else {
    if (language === "mk") {
      openText.textContent = "Затворено · отвора утре наутро";
    } else {
      openText.textContent = "Closed now · opens tomorrow morning";
    }
  }
  openDot.style.background = "#D2372C";
  openDot.style.color = "#D2372C";
}

let hourRows = document.querySelectorAll(".p-hr");
let dayNamesEn = ["Monday – Friday", "Saturday", "Sunday"];
let dayNamesMk = ["Понеделник – петок", "Сабота", "Недела"];

let todayRow = 0;
if (weekday === 6) {
  todayRow = 1;
}
if (weekday === 0) {
  todayRow = 2;
}

for (let i = 0; i < hourRows.length; i++) {
  let nameText = hourRows[i].querySelector("span");
  let name = dayNamesEn[i];
  if (language === "mk") {
    name = dayNamesMk[i];
  }

  if (i === todayRow) {
    hourRows[i].classList.add("p-row-today");
    if (language === "mk") {
      nameText.textContent = name + " · денес";
    } else {
      nameText.textContent = name + " · today";
    }
  } else {
    hourRows[i].classList.remove("p-row-today");
    nameText.textContent = name;
  }
}

let form = document.getElementById("contact-form");
let sentBox = document.getElementById("sent-box");
let sendAnotherButton = document.getElementById("send-another");

function showError(id, englishText, macedonianText) {
  let error = document.getElementById(id);
  if (language === "mk") {
    error.textContent = macedonianText;
  } else {
    error.textContent = englishText;
  }
  error.hidden = false;
}

function hideError(id) {
  document.getElementById(id).hidden = true;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = form.elements.name.value.trim();
  let email = form.elements.email.value.trim();
  let topic = form.elements.topic.value;
  let coach = form.elements.coach.value;
  let agreed = form.elements.consent.checked;
  let allGood = true;

  if (name === "") {
    showError("err-name", "Please fill in your name.", "Внесете го вашето име.");
    allGood = false;
  } else {
    hideError("err-name");
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(email) === false) {
    showError("err-email", "Please enter a valid email, like name@example.com.", "Внесете валидна е-пошта, на пр. ime@primer.com.");
    allGood = false;
  } else {
    hideError("err-email");
  }

  if (agreed === false) {
    showError("err-consent", "Please tick the box so we can reply to you.", "Означете го полето за да можеме да ви одговориме.");
    allGood = false;
  } else {
    hideError("err-consent");
  }

  if (allGood === false) {
    return;
  }

  let reply = "";
  if (topic === "Personal training" && coach !== "Any coach") {
    if (language === "mk") {
      reply = coach + " ќе ти одговори на " + email + " во рок од еден работен ден";
    } else {
      reply = coach + " will reply to " + email + " within one working day";
    }
  } else if (topic === "Personal training") {
    if (language === "mk") {
      reply = "Тренер ќе ти одговори на " + email + " во рок од еден работен ден";
    } else {
      reply = "A coach will reply to " + email + " within one working day";
    }
  } else {
    if (language === "mk") {
      reply = "Ќе ти одговориме на " + email + " во рок од еден работен ден";
    } else {
      reply = "We will reply to " + email + " within one working day";
    }
  }

  let firstName = name.split(" ")[0];
  document.getElementById("sent-name").textContent = firstName;
  document.getElementById("reply-line").textContent = reply;

  form.hidden = true;
  sentBox.hidden = false;
});

sendAnotherButton.addEventListener("click", function () {
  form.reset();
  sentBox.hidden = true;
  form.hidden = false;
});
