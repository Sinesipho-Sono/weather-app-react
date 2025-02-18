import React from "react";

export default function WeatherIcon(props) {
  console.log(props.data);
  return <img src={props.iconUrl} className="weather-app-icon" />;
}
