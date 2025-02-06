import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature.js";

export default function CurrentInfo(props) {
  return (
    <div className="CurrentInfo">
      <div className="Row d-flex">
        <div className="Col-6">
          <h1 className="Current-city">{props.data.city}</h1>
          <ul className="Current-details">
            <li className="Time">
              <FormattedDate date={props.data.date} />
            </li>
            <li className="Description text-capitalize mb-0">
              {props.data.description}
            </li>
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>, Wind:{" "}
              <strong>{props.data.wind}km/h</strong>
            </li>
          </ul>
        </div>
        <div className="Col-lg-6 col-md-6">
          <div className="Temperature-container">
            <div className="Icon">
              <img src={props.data.icon} alt={props.data.description}></img>
            </div>
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
