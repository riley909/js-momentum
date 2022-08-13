const clock = document.querySelector('h2#clock');

function padString(num) {
  return String(num).padStart(2, '0');
}

function getTime() {
  const date = new Date();
  const hours = padString(date.getHours());
  const minutes = padString(date.getMinutes());

  clock.textContent = `${hours}:${minutes}`;
}

getTime();
setInterval(getTime, 1000);
