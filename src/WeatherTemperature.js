import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="Current-temperature">{Math.round(props.celsius)}</span>
        <span className="Temperature-unit">
          <a href="/" onClick={showCelsius}>
            ºC
          </a>{" "}
          |
          <a href="/" onClick={showFahrenheit}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="Current-temperature">{Math.round(props.celsius)}</span>
        <span className="Temperature-unit">
          <a href="/" onClick={showCelsius}>
            ºC
          </a>{" "}
          |
          <a href="/" onClick={showCelsius}>
            F
          </a>
        </span>
      </div>
    );
  }
}
