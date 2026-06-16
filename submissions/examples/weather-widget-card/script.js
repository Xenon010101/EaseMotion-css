const tempEl = document.getElementById("wwTemp");
const humidityEl = document.getElementById("wwHumidity");
const windEl = document.getElementById("wwWind");
const uvEl = document.getElementById("wwUv");
const refreshBtn = document.getElementById("wwRefresh");

function randomBetween(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

function refreshWeather() {
  tempEl.textContent = randomBetween(55, 95);
  humidityEl.textContent = `${randomBetween(20, 80)}%`;
  windEl.textContent = `${randomBetween(2, 25)} mph`;
  uvEl.textContent = randomBetween(1, 10);
}

refreshBtn.addEventListener("click", refreshWeather);
