import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="col-9">
            <input
              type="search"
              placeholder="Search for a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </form>

        <h1>{weather.city}</h1>
        <p>
          <FormattedDate date={weather.date} />
          <br />
          Sunny
        </p>
        <div className="row">
          <div className="col-6">
            <img src={weather.icon} alt={weather.description} />
            <span className="temperature">
              {Math.round(weather.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <uL>
              <li>Description: {weather.description}</li>
              <li>Humidty: {Math.round(weather.humidity)}%</li>
              <li>Wind: {Math.round(weather.wind)} km/h</li>
            </uL>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5201594abea9f3e38b70e65b11a80c24";
    let city = `Los Angeles`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);

    return "Loading...";
  }
}
