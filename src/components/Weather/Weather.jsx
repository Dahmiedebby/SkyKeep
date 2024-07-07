import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Oval } from "react-loader-spinner";
import PropTypes from "prop-types";
import axios from "axios";
import { MdAddLocationAlt } from "react-icons/md";
// import WeatherInfo from "../WeatherInfo/WeatherInfo";
// import Loading from "../Loader/Loading";
import "./_weather.scss";

const Weather = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });

  const search = async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setSearchQuery("");
      setWeather({ ...weather, loading: true });
      const url = import.meta.env.VITE_WEATHER_API_URL;
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      await axios
        .get(url, {
          params: {
            q: searchQuery,
            units: "metric",
            appid: apiKey,
          },
        })
        .then((res) => {
          console.log("res", res);
          setWeather({ data: res.data, loading: false, error: false });
        })
        .catch((error) => {
          setWeather({ ...weather, data: {}, error: true });
          setSearchQuery("");
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
  const getBackgroundStyle = (condition) => {
    if (condition.toLowerCase().includes("rain")) {
      return {
        backgroundImage:
          "url('https://giffiles.alphacoders.com/136/13671.gif')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      };
    } else if (condition.toLowerCase().includes("clouds")) {
      return {
        backgroundImage: "url('https://i.gifer.com/1Zvm.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    } else {
      return {
        backgroundImage: "url('https://i.gifer.com/32d3.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }
  };
  const condition =
    weather.data && weather.data.weather && weather.data.weather[0].description
      ? weather.data.weather[0].description
      : "";

  const addCity = (city, weatherData) => {
    const myCities = JSON.parse(localStorage.getItem("myCities")) || [];
    const cityData = {
      name: city,
      temp: weatherData.main.temp,
      description: weatherData.weather[0].description,
      icon: weatherData.weather[0].icon,
      country: weatherData.sys.country,
    };
    const isCitySaved = myCities.some((savedCity) => savedCity.name === city);
    if (!isCitySaved) {
      myCities.push(cityData);
      localStorage.setItem("myCities", JSON.stringify(myCities));
    }
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
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </div>
          {weather.loading && (
            <>
              <br />
              <br />
              <Oval type="Oval" color="white" height={100} width={100} />
            </>
          )}
          {weather.error && (
            <>
              <br />
              <br />
              <span className="ErrorMessage">
                <img
                  src="https://64.media.tumblr.com/2e516cceb5807b16913daece24accef2/tumblr_n3zlvo51yg1s0ia73o1_500.gifv"
                  alt=""
                />
                <span>City not found</span>
              </span>
            </>
          )}
          {weather && weather.data && weather.data.main && (
            <div
              className="WeatherDataWrapper"
              style={getBackgroundStyle(condition)}
            >
              <div className="WeatherData">
                <span onClick={() => addCity(weather.data.name, weather.data)}>
                  <MdAddLocationAlt className="AddIcon" />
                  <p>Add City</p>
                </span>
                <div className="City">
                  <h2>
                    {weather.data.name}, <span>{weather.data.sys.country}</span>
                  </h2>
                </div>
                <div className="Date">
                  <span>{DateFunction()}</span>
                </div>
                <div className="Temp">
                  <img
                    src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
                    alt={weather.data.weather[0].description}
                  />
                  {Math.round(weather.data.main.temp)}
                  <sup className="deg">°C</sup>
                </div>
                <div className="Conditions">
                  <p>{weather.data.weather[0].description.toUpperCase()}</p>
                  <p>Wind Speed: {weather.data.wind.speed}m/s</p>
                </div>
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
