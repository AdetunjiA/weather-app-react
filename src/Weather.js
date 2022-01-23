import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [cityWeather, setCityWeather] = useState({});
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function displayWeather(response) {
    setLoaded(true);
    setCityWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "7cc806d53b678aa3ab24584cdb1a4391";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(displayWeather);
  }
  let Form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {Form}
        <ul>
          <li>Temperature:{Math.round(cityWeather.temperature)}℃</li>
          <li>Description:{cityWeather.description}</li>
          <li>Description:{cityWeather.humidity}%</li>
          <li>Wind:{cityWeather.wind}km/h</li>
          <li>
            <img src={cityWeather.icon} alt={cityWeather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return Form;
  }
}
