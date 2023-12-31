import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  console.log(props.data);
  return (
    <div className="WeatherInfo mt-3 ms-3">
      <h1>{[props.data.city]}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} alt={props.data.description} />
        </li>
        <li className="text-capitalize">{[props.data.description]}</li>
      </ul>
      <div className="row mt-4">
        <div className="col-6">
          <div className="clear-fix d-flex align-items-center">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={65} />
            </div>{" "}
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6 mt-3">
          <ul>
            <li>Humidity: {[props.data.humidity]}%</li>
            <li>Wind: {[props.data.wind]} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
