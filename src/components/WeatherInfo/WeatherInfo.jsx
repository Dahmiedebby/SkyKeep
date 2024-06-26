import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import Clock from "react-live-clock";
import Forcast from "./Forcast";
import DateTime from "./DateTime";

const defaults = {
  color: "white",
  size: 112,
  animate: true,
};

const WeatherInfo = ({ data }) => (
  <div className="city">
    <div className="title">
      <h2>{data.city}</h2>
      <h3>{data.country}</h3>
    </div>
    <div className="mb-icon">
      <ReactAnimatedWeather
        icon={data.icon}
        color={defaults.color}
        size={defaults.size}
        animate={defaults.animate}
      />
      <p>{data.main}</p>
    </div>
    <DateTime />
    <div className="temperature">
      <p>
        {data.temperatureC}°<span>C</span>
      </p>
    </div>
    <Forcast icon={data.icon} weather={data.main} />
  </div>
);

export default WeatherInfo;
