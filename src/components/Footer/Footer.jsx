import React from "react";
import "./_footer.scss";

const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="FooterContent">
        <div className="FooterLogo">
          <h1>
            SKY
            <span>Keep</span>
          </h1>
        </div>
        <div className="FooterLinks">
          <div className="FooterLink">Home</div>
          <div className="FooterLink">News</div>
          <div className="FooterLink">My Cities</div>
        </div>
        <div className="FooterCredits">
          <p>
            &copy; {new Date().getFullYear()} DahmieDebby. Developed by
            DahmieDebby
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
