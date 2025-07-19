document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

const apiKey = "YOUR_API_KEY";
const lat = "xx.xxxx";
const lon = "xx.xxxx";

const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${apiKey}`;

fetch(weatherURL)
  .then(response => response.json())
  .then(data => {
    document.getElementById('temp').textContent = `${data.current.temp.toFixed(1)}°C`;
    document.getElementById('desc').textContent = data.current.weather[0].description;

    const forecastList = document.getElementById("forecast-list");
    for (let i = 1; i <= 3; i++) {
      const day = data.daily[i];
      const li = document.createElement("li");
      const date = new Date(day.dt * 1000);
      li.textContent = `${date.toDateString()}: ${day.temp.day.toFixed(1)}°C`;
      forecastList.appendChild(li);
    }
  });
