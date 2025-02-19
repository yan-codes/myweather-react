import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="Current-temperature">{Math.round(props.celsius)}</span>
      <span className="Temperature-unit">ºC</span>
    </div>
  );
}
