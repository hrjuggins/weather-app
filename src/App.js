import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  const city = "London";
  const [currentWeather, setCurrentWeather] = useState({
    temp: 0,
  });
  const [forecast, setForecast] = useState({});
  const reloadTime = 60;
  const [progress, setProgress] = useState(reloadTime);
  const currentDate = new Date();

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
    } catch (error) {
      console.log(error);
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
      setLoading(true);
      fetchData();
    }, 60000);
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
      // Pull out data we will need for app
      const {
        dt,
        main: { temp },
        weather,
      } = forecast[day];
      const { description, icon } = weather[0];

      forecastData.push(
        <article key={day}>
          {/* Multiply by 1000 to get correct date */}
          <p>
            {new Date(dt * 1000).toLocaleString("en-US", { weekday: "short" })}
          </p>
          <p>{temp}°</p>
          <div>
            <img src={`http://openweathermap.org/img/wn/${icon}.png`} />
            <p>{description}</p>
          </div>
        </article>
      );
    }
    return forecastData;
  };

  return (
    <div className="container">
      <header className="header">
        <h1>London</h1>
        <p>{currentDate.toLocaleTimeString([], { timeStyle: "short" })} GMT</p>
        <motion.p
          key={currentWeather.temp}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: "easeOut",
            duration: 1,
          }}
        >
          {currentWeather.temp.toString().slice(0, 2)}°
        </motion.p>
      </header>
      <ProgressBar progress={progress} duration={reloadTime} />
      <section className="forecast-container">{renderForecast()}</section>
    </div>
  );
};

export default App;
