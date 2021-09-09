import React, { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";
import AnimatedTemp from "./components/AnimatedTemp";
import ForecastDay from "./components/ForecastDay";

const App = () => {
  const city = "London";
  const reloadTime = 60;
  const currentDate = new Date();

  const [currentWeather, setCurrentWeather] = useState({
    temp: 0,
  });
  const [forecast, setForecast] = useState({});
  const [progress, setProgress] = useState(reloadTime);
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    try {
      // get current weather
      const currentResponse = await fetch(
        `${process.env.API_URL}/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
      );
      const current = await currentResponse.json();
      setCurrentWeather((prev) => ({ ...prev, temp: current.main.temp }));

      // get forecast data
      const forecastResponse = await fetch(
        `${process.env.API_URL}/forecast?q=${city}&appid=${process.env.API_KEY}&units=metric`
      );
      const forecast = await forecastResponse.json();

      // Get 12pm forecast of next 5 days
      const one = forecast.list[8];
      const two = forecast.list[16];
      const three = forecast.list[24];
      const four = forecast.list[32];
      const five = forecast.list[39];

      setForecast((prev) => ({ ...prev, one, two, three, four, five }));
      setMessage("");
    } catch (error) {
      setMessage("Problem fetching weather");
    }
  };

  let interval = null;
  let progressInterval = null;

  useEffect(() => {
    // Fetch on first load
    fetchData();
    // Set progress bar every second
    progressInterval = setInterval(() => {
      setProgress((prev) => prev - 1);
    }, 1000);
    // // Fetch every minute
    interval = setInterval(() => {
      fetchData();
    }, reloadTime * 1000);
  }, []);

  useEffect(() => {
    if (progress <= 0) {
      setProgress(reloadTime);
      clearInterval(interval);
      clearInterval(progressInterval);
    }
  }, [progress]);

  const renderForecast = () => {
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

  return (
    <div className="container">
      <header className="header">
        <h1>London</h1>
        <p>{currentDate.toLocaleTimeString([], { timeStyle: "short" })} GMT</p>
        <AnimatedTemp temp={currentWeather.temp} />
      </header>
      <ProgressBar progress={progress} duration={reloadTime} />
      <section className="forecast-container">
        {message && <p className="error-message">{message}</p>}
        {renderForecast()}
      </section>
    </div>
  );
};

export default App;
