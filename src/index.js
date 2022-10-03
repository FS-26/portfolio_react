import React from "react";
import ReactDOM from "react-dom/client";
import About from "./components/about/about";
import Header from "./components/header/header";
import Projects from "./components/projects/projects";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <About />
    <Projects />
  </React.StrictMode>
);
