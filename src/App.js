import "./App.css";
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import MainLayout from "./axie-render/containers/main/main";
import EnergyCounter from "./axie-render/containers/energy-counter/energy-counter";
import About from "./axie-render/containers/about/about";

function App() {
  return (
    <Router>
      <div>
        <nav className="menu">
          <Link className="menu-button" to="/">
            Axie Fetcher
          </Link>
          <Link className="menu-button" to="/counter">
            Energy Counter
          </Link>
          <Link className="menu-button" to="/about">
            About
          </Link>
        </nav>
        <Routes>
          <Route
            exact
            path="/counter"
            element={
              <div className="App">
                <EnergyCounter></EnergyCounter>
              </div>
            }
          />
          <Route
            exact
            path="/"
            element={
              <div className="App">
                <MainLayout></MainLayout>
              </div>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <div className="App">
                <About></About>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
