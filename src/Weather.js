import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Krakow",
    temp: 1,
    description: "Mostly cloudy",
    humidity: 73,
    wind: 10,
    feelLike: 0,
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    time: "Saturday 09:35",
  };
  return (
    <div className="Weather">
      <form>
        <div className="row align-items-center">
          <input
            type="text"
            autoComplete="off"
            placeholder="Enter a city"
            className="col-sm-6 form-control cityInput"
          />
          <button className="col-sm-1 btn btn-primary searchButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
          <button
            type="button"
            className="col-sm-1 btn btn-outline-success locationButton text-center"
          >
            📍
          </button>
        </div>
      </form>

      <h1>{weatherData.city}</h1>
      <h5>{weatherData.time}</h5>

      <div className="row first-row">
        <ul className="col-md-4 text-center column-1">
          <li>
            <strong>Feels like: </strong>
            {weatherData.feelLike}°C
          </li>
          <li>
            <strong>Humidity: </strong>
            {weatherData.humidity}%
          </li>
          <li>
            <strong>Wind: </strong>
            {weatherData.wind} km/h
          </li>
        </ul>
        <ul className="col-md-4 column-2 text-center">
          <li>
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="mainIcon"
            />
          </li>
        </ul>
        <ul className="col-md-4 column-3 text-center">
          <li>
            <strong className="description">{weatherData.description}</strong>
          </li>
          <li>
            <span className="temperature">{weatherData.temp}</span>
            <span className="unit">
              <a href="/" className="inactive">
                °C
              </a>
              |<a href="/">°F</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
