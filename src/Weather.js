import React from "react";
import "./Weather.css";
import "./index.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather() {
  return (
    <div className="Weather">
      <form class="search-form" id="search-form">
        <input
          type="search"
          placeholder="Enter a city..."
          required
          id="search-form-input"
          class="search-input"
        />
        <input type="submit" class="search-submit-button" value="search" />
      </form>
      <WeatherInfo />
      <WeatherForecast />
    </div>
  );
}
