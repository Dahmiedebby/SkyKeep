import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import Forcast from "../Forecast/Forecast";
import DateTime from "../DateTime/DateTime";
import PropTypes from "prop-types";

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
WeatherInfo.propTypes = {
  data: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    main: PropTypes.string.isRequired,
    temperatureC: PropTypes.number.isRequired,
  }).isRequired,
};

export default WeatherInfo;
