import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weather-data mb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-start">
            <div>
              <h1 className="weather-app-city" id="city">
                {props.data.city}
              </h1>
              <div className="weather-app-details mt-2">
                <span id="time">
                  <FormattedDate date={props.data.date} />
                </span>
                <span id="weather-condition">{props.data.description}</span>
                <br />
                Humidity:{" "}
                <strong id="humidity-data">{props.data.humidity}%</strong>,
                Wind:{" "}
                <strong id="speed-data">
                  {Math.round(props.data.wind)}km/H
                </strong>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-end">
            <div className="d-flex weather-app-temperature-container">
              <div className="weather-app-icon col-4" id="weather-app-icon">
                <WeatherIcon iconUrl={props.data.iconUrl} />
              </div>
              <div
                className="weather-app-temperature col-6 text-end"
                id="weather-app-temperature"
              >
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
