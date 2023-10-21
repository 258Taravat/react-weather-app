import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tehran" />
        <footer className="ms-5">
          {" "}
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/taravat-yazdani-539a21177/"
            target="_blank"
            rel="noreferrer"
          >
            Taravat Yazdani
          </a>{" "}
          and it is{" "}
          <a
            href="https://github.com/258Taravat/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-source on Github,
          </a>{" "}
          and hosted on Netlify.
        </footer>
      </div>
    </div>
  );
}
