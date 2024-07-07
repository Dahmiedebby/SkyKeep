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
          <a href="/" className="FooterLink">
            Home
          </a>
          <a href="/https://weather.com/news" className="FooterLink">
            News
          </a>
          <a href="/mycities" className="FooterLink">
            My Cities
          </a>
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
