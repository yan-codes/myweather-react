import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import CurrentInfo from "./CurrentInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      temperature: response.data.temperature.current,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  function search() {
    let apiKey = "74b8442a4oa25823t288ab70d171ef48";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Search">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control search-input"
                  autoFocus="on"
                  onChange={updateCity}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="search-button w-100"
                />
              </div>
            </div>
          </form>
        </div>
        <CurrentInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
