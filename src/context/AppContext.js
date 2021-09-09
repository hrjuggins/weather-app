import React, { createContext, useState } from "react";

const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    city: "London",
    reloadTime: 60,
    currentTemp: 0,
    forecast: {},
    message: "",
  });

  const value = { appState, setAppState };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
