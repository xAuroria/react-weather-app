import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./Credit.css";

export default function Credit() {
  return (
    <div className="credits">
      <a
        href="https://github.com/xAuroria/react-weather-app"
        target="_blank"
        rel="noreferrer"
        className="credits-link"
      >
        Open-source code
      </a>{" "}
      by Jessica St. Martin
    </div>
  );
}
