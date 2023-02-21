import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import Home from "../Home/Home.js";
import Assessment from "../Assessment/Assessment.js";
import Summary from "../Summary/Summary.js";
import { useState, useEffect } from "react";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
