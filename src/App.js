import React, { useEffect, useState } from "react";
import { AnimatedTemp, Forecast, ProgressBar, Search } from "./components";
import { useAppContext } from "./hooks/useAppContext";

const App = () => {
  const {
    city,
    reloadTime,
    currentTemp,
    setCurrentTemp,
    setForecast,
    message,
    setMessage,
  } = useAppContext();
  const [progress, setProgress] = useState(reloadTime);

  const currentDate = new Date();
  let interval = null;
  let progressInterval = null;

  const fetchCurrentData = async () => {
    try {
      // get current weather
      const currentResponse = await fetch(
        `${process.env.API_URL}/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
      );
      const current = await currentResponse.json();
      setCurrentTemp(current.main.temp);
      setMessage("");
    } catch (error) {
      setMessage("Problem fetching weather");
    }
  };

  const fetchForecastData = async () => {
    try {
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
      setForecast({ one, two, three, four, five });
      setMessage("");
    } catch (error) {
      setMessage("Problem fetching forecast");
    }
  };

  const fetchData = async () => {
    fetchCurrentData();
    fetchForecastData();
  };

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

  return (
    <div className="container">
      <header className="header">
        <h1>{city}</h1>
        <p>{currentDate.toLocaleTimeString([], { timeStyle: "short" })} GMT</p>
        <AnimatedTemp temp={currentTemp} />
      </header>
      <ProgressBar progress={progress} duration={reloadTime} />
      <section className="forecast-container">
        {message && <p className="error-message">{message}</p>}
        <Forecast />
      </section>
    </div>
  );
};

export default App;
