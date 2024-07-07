import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Oval } from "react-loader-spinner";
import PropTypes from "prop-types";
import { FaRegFrownOpen } from "react-icons/fa";
import axios from "axios";
// import WeatherInfo from "../WeatherInfo/WeatherInfo";
// import Loading from "../Loader/Loading";
import "./_weather.scss";

const Weather = () => {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });

  const search = async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setInput("");
      setWeather({ ...weather, loading: true });
      const url = "https://api.openweathermap.org/data/2.5/weather";
      const api_key = "f00c38e0279b7bc85480c3fe775d518c";
      await axios
        .get(url, {
          params: {
            q: input,
            units: "metric",
            appid: api_key,
          },
        })
        .then((res) => {
          console.log("res", res);
          setWeather({ data: res.data, loading: false, error: false });
        })
        .catch((error) => {
          setWeather({ ...weather, data: {}, error: true });
          setInput("");
          console.log("error", error);
        });
    }
  };
  const DateFunction = () => {
    const Months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const Weeks = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const currentDate = new Date();
    const date = `${Weeks[currentDate.getDay()]} ${currentDate.getDate()} ${
      Months[currentDate.getMonth()]
    }`;
    return date;
  };
  return (
    <div className="WeatherContainer">
      <div className="WeatherContent">
        <div className="HeroSection">
          <h2>SkyKeep: Know Before You Go</h2>
          <p>
            Plan your day with precision using SkyKeep. Our app delivers the
            latest weather updates and detailed forecasts, ensuring you’re never
            caught off guard. From your daily commute to weekend adventures,
            know before you go with SkyKeep’s reliable weather information.
          </p>
        </div>
        <div className="MainSection">
          <div className="SearchArea">
            <CiSearch className="SearchIcon" onClick={search} />
            <input
              type="text"
              placeholder="Search for a city..."
              className="SearchInput"
              name="searchQuery"
              onKeyPress={search}
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </div>
          {weather.loading && (
            <>
              <br />
              <br />
              <Oval type="Oval" color="black" height={100} width={100} />
            </>
          )}
          {weather.error && (
            <>
              <br />
              <br />
              <span className="error-message">
                <FaRegFrownOpen />
                <span style={{ fontSize: "20px" }}>City not found</span>
              </span>
            </>
          )}
          {weather && weather.data && weather.data.main && (
            <div>
              <div className="city-name">
                <h2>
                  {weather.data.name}, <span>{weather.data.sys.country}</span>
                </h2>
              </div>
              <div className="date">
                <span>{DateFunction()}</span>
              </div>
              <div className="icon-temp">
                <img
                  className=""
                  src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
                  alt={weather.data.weather[0].description}
                />
                {Math.round(weather.data.main.temp)}
                <sup className="deg">°C</sup>
              </div>
              <div className="des-wind">
                <p>{weather.data.weather[0].description.toUpperCase()}</p>
                <p>Wind Speed: {weather.data.wind.speed}m/s</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
Weather.propTypes = {
  weather: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    error: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Weather;
