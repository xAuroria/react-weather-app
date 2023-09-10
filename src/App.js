import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Credit from "./Credit";

import "./styles.css";

export default function App() {
  return (
    <div>
      <div className="container">
        <Search />
        <Weather />
        <Forecast />
      </div>
      <Credit />
    </div>
  );
}
