import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppContextProvider } from "./context/AppContext";

import "../sass/layout.scss";

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById("app")
);

module.hot.accept();
