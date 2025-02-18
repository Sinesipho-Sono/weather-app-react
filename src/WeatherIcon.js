import React from "react";
import "./WeatherInfo.css";
export default function WeatherIcon(props) {
  console.log(props.data);
  return (
    <img src={props.iconUrl} className="weather-app-icon" alt="weather icon" />
  );
}
