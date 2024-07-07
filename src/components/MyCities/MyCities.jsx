import React, { useEffect, useState } from "react";
import "./_mycities.scss";

const MyCities = () => {
  const [myCities, setMyCities] = useState([]);

  useEffect(() => {
    const cities = JSON.parse(localStorage.getItem("myCities")) || [];
    setMyCities(cities);
  }, []);

  return (
    <div className="MyCitiesContainer">
      <div className="MyCitiesContent">
        <h2>My Cities</h2>
        {myCities.length === 0 ? (
          <p>{"No city has been added"}</p>
        ) : (
          <div className="MyCities">
            {myCities.map((city, index) => (
              <div className="City" key={index}>
                <div className="Background">
                  <div className="CityName">
                    <h3>
                      {city.name}, {city.country}
                    </h3>
                  </div>
                  <div className="WeatherInfo">
                    <div className="Temp">{Math.round(city.temp)}°C</div>
                    <div className="Description">
                      {city.description.toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCities;
