import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./_navbar.scss";

const Navbar = () => {
  return (
    <div className="NavContainer">
      <div className="NavContent">
        <div className="NavLogo">
          <h1>
            SKY
            <span>Keep</span>
          </h1>
        </div>
        <div className="NavLinks">
          <div className="NavLink">Home</div>
          <div className="NavLink">News</div>
          <div className="NavLink">My Cities</div>
        </div>
        <div className="NavSearchArea">
          <CiSearch className="NavSearchIcon" />
          <input
            type="text"
            placeholder="Search for a city..."
            className="NavSearchBar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
