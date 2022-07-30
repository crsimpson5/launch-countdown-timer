const daysDisplay = document.querySelector("[data-counter='days'");
const hoursDisplay = document.querySelector("[data-counter='hours'");
const minutesDisplay = document.querySelector("[data-counter='minutes'");
const secondsDisplay = document.querySelector("[data-counter='seconds'");

const timer = {
  days: 8,
  hours: 0,
  minutes: 0,
  seconds: 03
};

const countToDate = new Date();
countToDate.setHours(countToDate.getHours() + timer.days * 24);
countToDate.setHours(countToDate.getHours() + timer.hours);
countToDate.setMinutes(countToDate.getMinutes() + timer.minutes);
countToDate.setSeconds(countToDate.getSeconds() + timer.seconds);

let prevTimeRemaining;

setInterval(() => {
  const currentDate = new Date();
  const timeRemaining = Math.ceil((countToDate - currentDate) / 1000);

  if (timeRemaining === prevTimeRemaining) return;

  flipAll(timeRemaining);
  prevTimeRemaining = timeRemaining;
}, 250);

function flip(flipCard, value) {
  const currentValue = flipCard.querySelector(".top").textContent;
  value = value.toString().padStart(2, "0");

  if (value === currentValue) return;

  flipCard.querySelector(".top-flip").textContent = currentValue;
  flipCard.querySelector(".top").textContent = value;
  flipCard.querySelector(".bottom-flip").textContent = value;
  flipCard.querySelector(".bottom").textContent = currentValue;

  flipCard.classList.remove("animate");
  flipCard.offsetWidth; // weird hack to reset animation immediately
  flipCard.classList.add("animate");
}

function flipAll(time) {
  flip(daysDisplay, Math.floor(time / (3600 * 24)));
  flip(hoursDisplay, Math.floor(time / 3600) % 24);
  flip(minutesDisplay, Math.floor(time / 60) % 60);
  flip(secondsDisplay, time % 60);
}
