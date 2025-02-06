import React from "react";
import FormattedDate from "./FormattedDate";

export default function CurrentInfo(props) {
  return (
    <div className="CurrentInfo">
      <div className="Row d-flex">
        <div className="Col-6">
          <h1 className="Current-city">{props.data.city}</h1>
          <ul className="Current-details">
            <li className="Time">
              <FormattedDate date={props.data.date} />,{" "}
              <p className="Description text-capitalize mb-0">
                {props.data.description}
              </p>
            </li>
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>, Wind:{" "}
              <strong>{props.data.wind}km/h</strong>
            </li>
          </ul>
        </div>
        <div className="Col-lg-6 col-md-6 col-sm-8">
          <div className="Temperature-container">
            <div className="Icon">
              <img src={props.data.icon} alt={props.data.description}></img>
            </div>
            <div className="Current-temperature">
              {Math.round(props.data.temperature)}
            </div>
            <div className="Temperature-unit">ºC</div>
          </div>
        </div>
      </div>
    </div>
  );
}
