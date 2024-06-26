import React from "react";
import Clock from "react-live-clock";

const DateTime = () => {
  const dateBuilder = (d) => {
    let months = [
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
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
  };

  return (
    <div className="date-time">
      <div className="dmy">
        <div id="txt"></div>
        <div className="current-time">
          <Clock format="HH:mm:ss" interval={1000} ticking={true} />
        </div>
        <div className="current-date">{dateBuilder(new Date())}</div>
      </div>
    </div>
  );
};

export default DateTime;
