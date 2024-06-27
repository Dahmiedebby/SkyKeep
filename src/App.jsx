import React from "react";
import "./App.scss";
import LandingPage from "./pages/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="AppContainer">
      {/* <LandingPage /> */}
      <Navbar />
    </div>
  );
}

export default App;
