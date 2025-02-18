import "../src/index.css";

export default function App() {
  return (
    <div className="App">
      <title>My weather App React </title>
      <h1 class="first-h1">Weather forecast</h1>
      <div class="weather-app">
        <header>
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
        </header>
        <main>
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
              <div
                class="weather-app-temperature"
                id="weather-app-temperature"
              ></div>
              <div class="weather-app-unit">°C | °F</div>
            </div>
          </div>
          <div class="weather-forecast" id="forecast"></div>
        </main>
        <footer>
          This project was coded by
          <a href="https://github.com/Sinesipho-Sono" target="_blank">
            Sinesipho Sono
          </a>
          , is
          <a
            href="https://github.com/Sinesipho-Sono/vanilla-weather.app_Shecodes-project"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
          and
          <a
            href="https://vanillaweather-shecodesplus-ss.netlify.app/"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
