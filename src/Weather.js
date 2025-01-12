import React from "react";
import axios from "axios";
import Humidity from "./Humidity";
import Wind from "./Wind";

export default function Weather(props) {
  function showWeather(event) {
    event.preventDefault();
  }

  let apiKey = "74b8442a4oa25823t288ab70d171ef48";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
  return (
    <div className="Weather">
      <div className="Row">
        <div className="Col">
          <h1 className="Current-city">{props.city}</h1>
          <p className="Current-details">
            <span className="Time">{props.time}</span>,{" "}
            <span className="Description"></span>
            <br />
            <Humidity />
            <Wind />
          </p>
        </div>
      </div>
    </div>
  );
}
