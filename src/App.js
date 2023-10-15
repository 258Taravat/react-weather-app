import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
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
            open-sourced on Github
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
