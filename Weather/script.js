const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");

const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const wind_speed = document.querySelector("#wind-speed");

const location_not_found = document.querySelector(".location-not-found");

const weather_body = document.querySelector(".weather-body");

async function checkWeather(city) {
  const api_key = "fa90a0d9a54a213af1d730e0d5f0b522";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const weather_data = await fetch(`${url}`).then((Response) =>
    Response.json()
  );

  if (weather_data.cod === `404`) {
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    console.log("error");
    return;
  }
  console.log("run");
  location_not_found.style.display = "none";
  weather_body.style.display = "flex";

  // temperature
  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

  // description
  description.innerHTML = `${weather_data.weather[0].description}`;

  // Humidity
  humidity.innerHTML = `${weather_data.main.humidity}%`;

  //  Wind Speed
  wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

  console.log(weather_data);

  switch (weather_data.weather[0].main) {
    case "Clouds":
      weather_img.src = "./Assets/cloud.png";
      break;
    case "clear":
      weather_img.src = "./Assets/clear.png";
      break;
    case "Rain":
      weather_img.src = "./Assets/rain.png";
      break;
    case "Mist":
      weather_img.src = "./Assets/mist.png";
      break;
    case "Snow":
      weather_img.src = "./Assets/snow.png";
      break;
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
