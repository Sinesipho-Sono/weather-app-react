import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weather-data">
      <div>
        <h1 className="weather-app-city" id="city">
          {props.data.city}
        </h1>
        <p className="weather-app-details">
          <span id="time">
            <FormattedDate date={props.data.date} />
          </span>
          ,<span id="weather-condition"> {props.data.description}</span>
          <br />
          Humidity: <strong id="humidity-data">{props.data.humidity}%</strong>,
          Wind:
          <strong id="speed-data">{props.data.wind}km/H</strong>
        </p>
      </div>
      <div className="weather-app-temperature-container">
        <div className="weather-app-icon" id="weather-app-icon">
          <WeatherIcon code={props.data.icon} size={52} />
        </div>
        <div className="weather-app-temperature" id="weather-app-temperature">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="weather-app-unit">°C | °F</div>
      </div>
    </div>
  );
}
