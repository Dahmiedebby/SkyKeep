import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Weather from "../../components/Weather/Weather";
import Footer from "../../components/Footer/Footer";

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <Weather />
      <Footer />
    </>
  );
};

export default LandingPage;
