import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <div className="AppContainer">
      <LandingPage />
    </div>
  );
}

export default App;
