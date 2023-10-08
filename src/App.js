import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        Weather App
        <footer>
          {" "}
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/taravat-yazdani-539a21177/"
            target="_blank"
          >
            Taravat Yazdani
          </a>{" "}
          and it is{" "}
          <a
            href="https://github.com/258Taravat/react-weather-app"
            target="_blank"
          >
            open-sourced on Github
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
