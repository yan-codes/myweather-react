import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature.js";
import WeatherIcon from "./WeatherIcon";

export default function CurrentInfo(props) {
  return (
    <div className="CurrentInfo">
      <div className="row">
        <div className="col-6">
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
              <strong>{props.data.wind} km/h</strong>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-8">
          <div className="Temperature-container">
            <div className="Icon">
              <WeatherIcon code={props.data.icon} size={85} />
            </div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
