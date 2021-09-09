import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useAppContext = () => {
  const { appState, setAppState } = useContext(AppContext);

  const setCity = (value) => {
    setAppState((prev) => ({
      ...prev,
      city: value,
    }));
  };

  const setCurrentTemp = (value) => {
    setAppState((prev) => ({
      ...prev,
      currentTemp: value,
    }));
  };

  const setForecast = (forecastResult) => {
    setAppState((prev) => ({
      ...prev,
      forecast: { ...forecastResult },
    }));
  };

  const setMessage = (value) => {
    setAppState((prev) => ({
      ...prev,
      message: value,
    }));
  };

  return {
    city: appState.city,
    setCity,
    reloadTime: appState.reloadTime,
    currentTemp: appState.currentTemp,
    setCurrentTemp,
    forecast: appState.forecast,
    setForecast,
    message: appState.message,
    setMessage,
  };
};
