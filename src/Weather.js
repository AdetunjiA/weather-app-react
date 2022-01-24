import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [description, setDescription] = useState("");
  let [icon, setIcon] = useState("");
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function displayWeather(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDescription(response.data.weather[0].description);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "7cc806d53b678aa3ab24584cdb1a4391";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(displayWeather);
  }
  return (
    <div className="container">
      <div className="app-wrapper">
        <div className="weather-app">
          <div id="sky">
            <div id="clouds"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city..."
              onChange={updateCity}
            />
            <input type="submit" value="Search" />
          </form>

          <h1 id="city">{city}</h1>
          <ul>
            <li>
              Last updated: <span id="dayTime"></span>
            </li>
            <li id="description">{description}</li>
          </ul>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img src={icon} alt="clear" className="float-left" id="icon" />
                <div className="float-left">
                  <strong id="temperature">{Math.round(temperature)}</strong>
                  <span className="unit">
                    <a href="#" id="celcius-link" className="active">
                      °C
                    </a>{" "}
                    |
                    <a href="#" id="fahrenheit-link">
                      °F
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6 weather-element">
              <ul>
                <li>
                  Humidity: <span id="humidity">{humidity}%</span>
                </li>
                <li>
                  wind:<span id="speed">{Math.round(wind)}km/h</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast" id="forecast"></div>
        </div>

        <small>
          <a
            href="https://github.com/AdetunjiA/weather-app-react"
            className="github"
            target="_blank"
          >
            Open-source code
          </a>
          , by Adeola Adetunji
        </small>
      </div>
    </div>
  );
}
