import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Search() {
  const [city, setCity] = useState("Manila");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      city: response.data.city,
      time: response.data.time * 1000,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "74b8442a4oa25823t288ab70d171ef48";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="search-input"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="search-button" />
          </div>
        </div>
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div className="Container">
        {form}
        <div className="Weather">
          <div className="Row">
            <div className="Col-6">
              <h1 className="Current-city">{city}</h1>
              <p className="Current-details">
                <span className="Time">{weather.time} </span>,{" "}
                <span className="Description">{weather.description}</span>
                <br />
                Humidity: <strong>{weather.humidity}%</strong>, Wind:{" "}
                <strong>{weather.wind}km/h</strong>
              </p>
            </div>
            <div className="Col-lg-6 col-md-6 col-sm-8">
              <div className="Temperature-container">
                <div className="Icon">
                  <img src={weather.icon} alt={weather.description}></img>
                </div>
                <div className="Current-temperature">
                  {Math.round(weather.temperature)}
                </div>
                <div className="Temperature-unit">ºC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
