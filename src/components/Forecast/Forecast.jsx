import React, { useState, useEffect } from "react";
import axios from "axios";
import apiKeys from "../../apiKeys";
import PropTypes from "prop-types";
import ReactAnimatedWeather from "react-animated-weather";

function Forcast({ icon, weather: currentWeather }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState({});

  const search = (city) => {
    const searchTerm = city !== "[object Object]" ? city : query;
    axios
      .get(
        `${apiKeys.base}weather?q=${searchTerm}&units=metric&APPID=${apiKeys.key}`,
      )
      .then((response) => {
        setWeather(response.data);
        setQuery("");
        setError(null);
      })
      .catch((error) => {
        console.log(error);
        setWeather({});
        setQuery("");
        setError({ message: "Not Found", query });
      });
  };

  useEffect(() => {
    search("Delhi");
  }, []);

  const defaults = {
    color: "white",
    size: 112,
    animate: true,
  };

  return (
    <div className="forecast">
      <div className="forecast-icon">
        <ReactAnimatedWeather
          icon={icon}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        />
      </div>
      <div className="today-weather">
        <h3>{currentWeather}</h3>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search any city"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <div className="img-box">
            <img
              src="https://images.avishkaar.cc/workflow/newhp/search-white.png"
              alt="search"
              onClick={() => search(query)}
            />
          </div>
        </div>
        <ul>
          {weather.main ? (
            <div>
              <li className="cityHead">
                <p>
                  {weather.name}, {weather.sys.country}
                </p>
                <img
                  className="temp"
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                  alt={weather.weather[0].description}
                />
              </li>
              <li>
                Temperature{" "}
                <span className="temp">
                  {Math.round(weather.main.temp)}°c ({weather.weather[0].main})
                </span>
              </li>
              <li>
                Humidity{" "}
                <span className="temp">
                  {Math.round(weather.main.humidity)}%
                </span>
              </li>
              <li>
                Visibility{" "}
                <span className="temp">
                  {Math.round(weather.visibility / 1000)} km
                </span>
              </li>
              <li>
                Wind Speed{" "}
                <span className="temp">
                  {Math.round(weather.wind.speed)} Km/h
                </span>
              </li>
            </div>
          ) : (
            <li>
              {error?.query} {error?.message}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
Forcast.propTypes = {
  icon: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
};

export default Forcast;
