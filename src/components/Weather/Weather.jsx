import React, { useState, useEffect } from "react";
import apiKeys from "../../apiKeys";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import Loading from "../Loader/Loading";

const Weather = () => {
  const [weatherData, setWeatherData] = useState({
    lat: undefined,
    lon: undefined,
    city: undefined,
    country: undefined,
    temperatureC: undefined,
    temperatureF: undefined,
    humidity: undefined,
    description: undefined,
    icon: "CLEAR_DAY",
    main: undefined,
    errorMsg: undefined,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getWeather(position.coords.latitude, position.coords.longitude);
        },
        (err) => {
          getWeather(28.67, 77.22);
          alert(
            "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real-time weather.",
          );
        },
      );
    } else {
      alert("Geolocation not available");
    }

    const timerID = setInterval(() => {
      getWeather(weatherData.lat, weatherData.lon);
    }, 600000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const getWeather = async (lat, lon) => {
    const api_call = await fetch(
      `${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKeys.key}`,
    );
    const data = await api_call.json();
    setWeatherData({
      lat: lat,
      lon: lon,
      city: data.name,
      temperatureC: Math.round(data.main.temp),
      temperatureF: Math.round(data.main.temp * 1.8 + 32),
      humidity: data.main.humidity,
      main: data.weather[0].main,
      country: data.sys.country,
      icon: getWeatherIcon(data.weather[0].main),
    });
    setIsLoading(false);
  };

  const getWeatherIcon = (main) => {
    switch (main) {
      case "Haze":
        return "CLEAR_DAY";
      case "Clouds":
        return "CLOUDY";
      case "Rain":
        return "RAIN";
      case "Snow":
        return "SNOW";
      case "Dust":
        return "WIND";
      case "Drizzle":
        return "SLEET";
      case "Fog":
      case "Smoke":
        return "FOG";
      case "Tornado":
        return "WIND";
      default:
        return "CLEAR_DAY";
    }
  };

  return isLoading ? <Loading /> : <WeatherInfo data={weatherData} />;
};

export default Weather;
