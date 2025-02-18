import React from "react";
import "./index.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <title>My weather App React </title>
      <h1 className="first-h1 mt-3">Weather forecast</h1>
      <div className="weather-app">
        <header>
          <Weather defaultCity="Cape Town" />
        </header>

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Sinesipho-Sono"
            target="_blank"
            rel="noreferrer"
          >
            Sinesipho Sono
          </a>
          , is{" "}
          <a
            href="https://github.com/Sinesipho-Sono/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://weather-app-react-inesi.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
