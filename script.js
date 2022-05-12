const daysDisplay = document.querySelector("[data-counter='days'");
const hoursDisplay = document.querySelector("[data-counter='hours'");
const minutesDisplay = document.querySelector("[data-counter='minutes'");
const secondsDisplay = document.querySelector("[data-counter='seconds'");

const timer = {
  days: 8,
  hours: 23,
  minutes: 55,
  seconds: 5
};

function initDisplay() {
  updateDisplay(daysDisplay, timer.days);
  daysDisplay.classList.add("animate");

  updateDisplay(hoursDisplay, timer.hours);
  hoursDisplay.classList.add("animate");

  updateDisplay(minutesDisplay, timer.minutes);
  minutesDisplay.classList.add("animate");

  updateDisplay(secondsDisplay, timer.seconds);
  secondsDisplay.classList.add("animate");
}
initDisplay();

const interval = setInterval(updateTimer, 1000);

function updateTimer() {
  secondsDisplay.classList.add("animate");
}

document.addEventListener("animationend", (e) => {
  if (!e.target.classList.contains("bottom-flip")) return;

  updateDisplay(secondsDisplay, timer.seconds);

  if (timer.seconds === 0) {
    timer.seconds = 59;
  } else {
    timer.seconds--;
  }
});

function updateDisplay(el, timerValue) {
  let value = timerValue.toString().padStart(2, "0");
  let nextValue = (timerValue - 1).toString().padStart(2, "0");

  if (timerValue === 0) {
    nextValue = "59";
  }

  el.querySelector(".top-flip").textContent = value;
  el.querySelector(".top").textContent = nextValue;
  el.querySelector(".bottom-flip").textContent = nextValue;
  el.querySelector(".bottom").textContent = value;

  el.classList.remove("animate");
}
