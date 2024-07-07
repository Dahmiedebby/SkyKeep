import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Weather from "../../components/Weather/Weather";
import axios from "axios";
import Footer from "../../components/Footer/Footer";

const LandingPage = () => {
  const [isInput, setIsInput] = useState("");
  const [isWeather, setIsWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });

  const handleSearch = async (query) => {
    setIsWeather({ ...isWeather, loading: true });
    const url = import.meta.env.VITE_WEATHER_API_URL;
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    await axios
      .get(url, {
        params: {
          q: query,
          units: "metric",
          appid: apiKey,
        },
      })
      .then((res) => {
        console.log("res", res);
        setIsWeather({ data: res.data, loading: false, error: false });
      })
      .catch((error) => {
        setIsWeather({ ...isWeather, data: {}, error: true });
        console.log("error", error);
      });
  };
  return (
    <>
      <Navbar handleSearch={(query) => handleSearch(query)} />
      <Weather weather={isWeather} />
      <Footer />
    </>
  );
};

export default LandingPage;
