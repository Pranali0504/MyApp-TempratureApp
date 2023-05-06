import React, { useState } from "react";
import "./MyApp.css";

function MyApp() {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    if (temperatureValue === 30) return;

    const newTemperature = temperatureValue + 1;

    setTemperatureValue(newTemperature);
    if (newTemperature >= 15) {
      setTemperatureColor("hot");
    }
  };

  const decreaseTemperature = () => {
    if (temperatureValue === 0) return;

    const newTemperature = temperatureValue - 1;
    setTemperatureValue(newTemperature);
    if (newTemperature < 20) {
      setTemperatureColor("cold");
    }
  };

  return (
    <div className="appbg">
      <h1>Temprature App</h1>

      <div className="myapp">
        <div className={`temprature ${temperatureColor}`}>
          {temperatureValue}C
        </div>

        <div className="newSection">
          <div className="tempratureinc" onClick={() => increaseTemperature()}>
            +
          </div>
          <div className="tempraturedec" onClick={() => decreaseTemperature()}>
            -
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
