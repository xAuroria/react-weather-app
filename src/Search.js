import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./Search.css";

export default function Search() {
  return (
    <div>
      <h1>5-Day Weather Forecast</h1>
      <div className="row">
        <div className="col-9 search-bar">
          <form id="city-search-form">
            <input
              type="text"
              className="form-control"
              list="datalistOptions"
              id="city-search-input"
              placeholder="Search your city..."
            />
          </form>
        </div>
        <div className="col-xl-1">
          <button
            type="submit"
            className="btn btn-primary w-100"
            id="search-button"
          >
            Search
          </button>
        </div>
        <div className="col-xl-2">
          <button
            type="submit"
            className="btn btn-secondary w-100"
            id="current-weather-button"
          >
            Current Location
          </button>
        </div>
      </div>
    </div>
  );
}
