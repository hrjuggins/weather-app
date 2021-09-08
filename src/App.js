import React, { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { Link, Route, Switch } from "react-router-dom";
import { Routes } from "./routes";

const App = () => {
  const { isLoading, response } = useFetch(
    "https://dog.ceo/api/breeds/image/random",
    "GET"
  );

  return (
    <div className="container">
      <img src="https://green.cdn.energy/branding/logo-r.svg" />
      <h1>React Starter Project</h1>
      <Link to={"/signIn"}>Sign In</Link>
      <Link to={"/dashboard"}>Dashboard</Link>
      <Routes />
    </div>
  );
};

export default App;
