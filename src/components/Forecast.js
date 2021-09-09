import React from "react";
import { ForecastDay } from ".";
import { useAppContext } from "../hooks/useAppContext";

const Forecast = () => {
  const { forecast } = useAppContext();
  let forecastData = [];

  for (const day in forecast) {
    const index = Object.keys(forecast).indexOf(day);
    // Pull out data we will need for app
    const {
      dt,
      main: { temp },
      weather,
    } = forecast[day];
    const { description, icon } = weather[0];

    forecastData.push(
      <ForecastDay
        key={day}
        index={index}
        data={{ dt, temp, weather, description, icon }}
      />
    );
  }
  return forecastData;
};

export default Forecast;
