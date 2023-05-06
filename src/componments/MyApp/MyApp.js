import React, { useState } from "react";
import "./MyApp.css";

function MyApp() {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState();

  const increaseTemperature = () => {
    const newTemperature = temperatureValue + 1;
    if (newTemperature >= 15) {
      setTemperatureColor("red");
      console.log(setTemperatureColor)
    }
    setTemperatureValue(newTemperature);
  };

  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1;
    if (newTemperature < 20) {
      setTemperatureColor("orange");
    }
    setTemperatureValue(newTemperature);
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
