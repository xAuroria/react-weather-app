import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div>
      <div className="row forecast-line">
        <div className="col-xl-4">
          <div className="card">
            <div className="card-body current-forecast-card">
              <h5 className="card-title forecast-title" id="day-1"></h5>
              <img src="" alt="" className="card-emoji" id="day-1-icon" />
              <p className="card-text forecast-text">
                <span id="day1-low"></span>
                <span id="day1-low-unit">°C</span> /<span id="day1-high"></span>
                <span id="day1-high-unit">°C</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-2">
          <div className="card">
            <div className="card-body forecast-card">
              <h5 className="card-title forecast-title" id="day-2"></h5>
              <img src="" alt="" className="card-emoji" id="day-2-icon" />
              <p className="card-text forecast-text">
                <span id="day2-low"></span>
                <span id="day2-low-unit">°C</span> /<span id="day2-high"></span>
                <span id="day2-high-unit">°C</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-2">
          <div className="card">
            <div className="card-body forecast-card">
              <h5 className="card-title forecast-title" id="day-3"></h5>
              <img src="" alt="" className="card-emoji" id="day-3-icon" />
              <p className="card-text forecast-text">
                <span id="day3-low"></span>
                <span id="day3-low-unit">°C</span> /<span id="day3-high"></span>
                <span id="day3-high-unit">°C</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-2">
          <div className="card">
            <div className="card-body forecast-card">
              <h5 className="card-title forecast-title" id="day-4"></h5>
              <img src="" alt="" className="card-emoji" id="day-4-icon" />
              <p className="card-text forecast-text">
                <span id="day4-low"></span>
                <span id="day4-low-unit">°C</span> /<span id="day4-high"></span>
                <span id="day4-high-unit">°C</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-2">
          <div className="card">
            <div className="card-body forecast-card">
              <h5 className="card-title forecast-title" id="day-5"></h5>
              <img src="" alt="" className="card-emoji" id="day-5-icon" />
              <p className="card-text forecast-text">
                <span id="day5-low"></span>
                <span id="day5-low-unit">°C</span> /<span id="day5-high"></span>
                <span id="day5-high-unit">°C</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
