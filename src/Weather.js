import React, { useState } from "react";
import axios from "axios";
import WeatherInformation from "./WeatherInformation";
// import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  let [city, setCity] = useState("New York");
  let [data, setData] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    setData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      coord: response.data.coord,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let apiKey = "7cc806d53b678aa3ab24584cdb1a4391";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(displayWeather);
  }
  if (data.ready) {
    return (
      <div className="Weather">
        <div id="sky">
          <div id="clouds"></div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control search-input"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInformation data={data} />
        {/* <WeatherForecast /> */}
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
