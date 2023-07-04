const apiKey = "bd5e378503939ddaee76f12ad7a97608";

function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => appWeather(data))
    .catch((error) => console.log(error));
}

function appWeather(data) {
  const weatherDiv = document.getElementById("weather");
  weatherDiv.innerHTML = "";

  const cityName = document.createElement("h2");
  cityName.textContent = data.name;
  weatherDiv.appendChild(cityName);

  const temperature = document.createElement("p");
  temperature.innerHTML = `Nhiệt độ: ${data.main.temp}&deg;C`;
  weatherDiv.appendChild(temperature);

  const weatherDescription = document.createElement("p");
  weatherDescription.textContent = `Mô tả: ${data.weather[0].description}`;
  weatherDiv.appendChild(weatherDescription);
}

fetchWeather("Ninh Binh");
