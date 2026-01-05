const apiKey = "fa81cc290620e3d6c2b7e8fc8eb36686";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
const search = document.querySelector(".search input");
const search_btn = document.querySelector(".search button");
let city;
let image = document.querySelector(".hero").getElementsByTagName("img")[0];
function temp(kelvin) {
  cel_temp = Math.round((kelvin - 273.15) * 100) / 100;
  temprature = Math.round(cel_temp);
  return temprature;
}
function round(input) {
  let rounded = Math.round(input);
  return rounded;
}
async function checkWheater(city) {
  const response = await fetch(apiUrl + `&q=${city}&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);

  document.querySelector(".city-name").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = `${temp(data.main.temp)}&degC`;
  document.querySelector(".temp").style.fontSize = "55px";
  document.querySelector(".temp").style.padding = "0";
  document
    .querySelector(".humidity-text")
    .getElementsByTagName("p")[0].innerHTML = data.main.humidity + "%";
  document.querySelector(".speed-text").getElementsByTagName("p")[0].innerHTML =
    round(data.wind.speed) + "Km/hr";
  if (data.wheather[0].main == "Snow") {
    document.querySelector(".hero").getElementsByTagName("img")[0].src =
      "icons/snow.png";
  } else if (data.weather[0].main == "Rain") {
    image.src = "icons/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    image.src = "icons/drizzle.png";
  } else if (data.weather[0].main == "Thunderstorm") {
    image.src = "icons/rain.png";
  } else if (data.weather[0].main == "Mist") {
    image.src = "icons/mist.png";
  } else if (data.weather[0].main == "Clear") {
    image.src = "icons/clear.png";
  } else if (data.weather[0].main == "Clouds") {
    image.src = "icons/clouds.png";
  }
  console.log("Weather condition:", data.weather[0].main);


}
function main() {
  // add an event listener to the search button
  search_btn.addEventListener("click", () => {
    checkWheater(search.value);
  });

}
main();


