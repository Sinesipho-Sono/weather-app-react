import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weather-data">
      <div className="container">
        <div className="row">
          <div className="col-6 text-start">
            <div>
              <h1 className="weather-app-city" id="city">
                {props.data.city}
              </h1>
              <p className="weather-app-details">
                <span id="time">
                  <FormattedDate date={props.data.date} />
                </span>
                <span id="weather-condition">{props.data.description}</span>
                <br />
                Humidity:{" "}
                <strong id="humidity-data">{props.data.humidity}%</strong>,
                Wind:
                <strong id="speed-data">{props.data.wind}km/H</strong>
              </p>
            </div>
          </div>
          <div className="col-6 text-end">
            <div className="d-flex weather-app-temperature-container">
              <div className="weather-app-icon col-6" id="weather-app-icon">
                <WeatherIcon iconUrl={props.data.iconUrl} />
              </div>
              <div
                className="weather-app-temperature text-end col-6"
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
