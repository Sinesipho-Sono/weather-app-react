import React from "react";
import "./index.css";
import "./WeatherInfo.css";

export default function WeatherInfo() {
  return (
    <div class="weather-data">
      <div>
        <h1 class="weather-app-city" id="city">
          Cape Town
        </h1>
        <p class="weather-app-details">
          <span id="time">Saturday 12:22</span>,
          <span id="weather-condition"> clear sky</span>
          <br />
          Humidity: <strong id="humidity-data">80%</strong>, Wind:
          <strong id="speed-data">4 km/h</strong>
        </p>
      </div>
      <div class="weather-app-temperature-container">
        <div class="weather-app-icon" id="weather-app-icon">
          ☀️
        </div>
        <div class="weather-app-temperature" id="weather-app-temperature"></div>
        <div class="weather-app-unit">°C | °F</div>
      </div>
    </div>
  );
}
