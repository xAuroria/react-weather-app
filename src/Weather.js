import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./Weather.css";

export default function Weather() {
  return (
    <div>
      <div className="row weather-line">
        <img
          src=""
          alt=""
          className="col-lg-1 current-weather-emoji"
          id="current-weather-icon"
        />
        <div className="col-8">
          <h2>
            <span id="current-temp"></span>
            <span className="units">
              <a href="#" className="celcius-default" id="celcius">
                °C
              </a>{" "}
              |{" "}
              <a href="#" id="fahrenheit">
                °F
              </a>
            </span>
          </h2>
          <h6 className="precipitation">
            Humidity: <span id="humidity"></span>%
            <br />
            Wind: <span id="wind"></span> <span id="wind-speed">km/h</span>
          </h6>
        </div>
        <div className="col-3">
          <h2 className="city" id="city"></h2>
          <h5 className="current-date" id="updated-date"></h5>
          <h5 className="current-condition" id="weather-condition"></h5>
        </div>
      </div>
    </div>
  );
}
