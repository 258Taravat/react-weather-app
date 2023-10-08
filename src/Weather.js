import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city ..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Tehran</h1>
      <ul>
        <li>Sunday 9:16</li>
        <li>Mostly sunny</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="mostly sunny"
              className="float-left"
            />{" "}
            <div className="float-left">
              <span className="temperature">21</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0% </li>
            <li>Humidity: 28%</li>
            <li>Wind: 8 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
