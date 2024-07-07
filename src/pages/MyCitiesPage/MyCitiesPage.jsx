import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import MyCities from "../../components/MyCities/MyCities";

const MyCitiesPage = () => {
  return (
    <div className="PageContainer">
      <Navbar />
      <MyCities />
      <Footer />
    </div>
  );
};

export default MyCitiesPage;
