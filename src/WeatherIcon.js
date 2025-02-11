import React from "react";
import ReactWeatherIcons from "@bybas/weather-icons";

export default function WeatherIcon(props) {
  return (
    <div className="Icon">
      <ReactWeatherIcons
        icon="clear-day"
        color="red"
        size={75}
        animated={true}
      />
    </div>
  );
}
