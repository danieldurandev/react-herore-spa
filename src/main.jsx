import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { HeroesApp } from "./HeroesApp";
import "./bootstrap.min.css";
import "./styles.css";
import "animate.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <BrowserRouter>
  <HashRouter>
    <React.StrictMode>
      <HeroesApp />
    </React.StrictMode>
  </HashRouter>
  // </BrowserRouter>
);
