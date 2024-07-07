import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import "./_navbar.scss";
import PropTypes from "prop-types";

const getCurrentTime = () => {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZoneName: "short",
  }).format(new Date());
};

const Navbar = ({ isScrolled }) => {
  const [isInput, setIsInput] = useState("");
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={isScrolled ? "NavContainer scrolled" : "NavContainer"}>
      <div className="NavContent">
        <a
          href="/"
          style={{ textDecoration: "none" }}
          className={isScrolled ? "scrolled NavLogo" : "NavLogo"}
        >
          <h1>
            SKY
            <span>Keep</span>
          </h1>
        </a>
        <div className={isScrolled ? "scrolled NavLinks" : "NavLinks"}>
          <a href="/" className="NavLink">
            Home
          </a>
          <a href="https://weather.com/news" className="NavLink">
            News
          </a>
          <a href="/mycities" className="NavLink">
            My Cities
          </a>
        </div>
        <div
          className={isScrolled ? "scrolled NavSearchArea" : "NavSearchArea"}
        >
          <CiSearch className="NavSearchIcon" />
          <input
            type="text"
            placeholder="Search for a city..."
            className="NavSearchBar"
            name="searchQuery"
            // onKeyPress={onKeyPress}
            value={isInput}
            onChange={(event) => setIsInput(event.target.value)}
          />
        </div>
        <div className="NavTime">
          <span>{currentTime}</span>
        </div>
      </div>
    </div>
  );
};
Navbar.propTypes = {
  // handleSearch: PropTypes.func.isRequired,
  isScrolled: PropTypes.func,
};

export default Navbar;
