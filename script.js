const apiKey = "fa81cc290620e3d6c2b7e8fc8eb36686";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const search = document.querySelector(".search input");
const search_btn = document.querySelector(".search button");
const image = document.querySelector(".hero img");

async function checkWeather(city) {
  const response = await fetch(
    `${apiUrl}?q=${city}&units=metric&appid=${apiKey}`
  );

  const data = await response.json();

  if (data.cod !== 200) {
    alert("City not found");
    return;
  }

  document.querySelector(".city-name").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    `${Math.round(data.main.temp)}&degC`;

  document.querySelector(".humidity-text p").innerHTML =
    data.main.humidity + "%";

  document.querySelector(".speed-text p").innerHTML =
    data.wind.speed + " Km/hr";

  const condition = data.weather[0].main;

  if (condition === "Snow") image.src = "icons/snow.png";
  else if (condition === "Rain") image.src = "icons/rain.png";
  else if (condition === "Drizzle") image.src = "icons/drizzle.png";
  else if (condition === "Thunderstorm") image.src = "icons/rain.png";
  else if (condition === "Mist") image.src = "icons/mist.png";
  else if (condition === "Clear") image.src = "icons/clear.png";
  else if (condition === "Clouds") image.src = "icons/clouds.png";

  console.log("Weather condition:", condition);
}

search_btn.addEventListener("click", () => {
  checkWeather(search.value);
});
search.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkWeather(search.value);
  }
});

