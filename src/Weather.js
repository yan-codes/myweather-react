import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert();
  }

  let apiKey = "74b8442a4oa25823t288ab70d171ef48";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div>
      <h1>Manila</h1>
    </div>
  );
}
