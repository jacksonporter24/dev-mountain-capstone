import React from "react";
import ReactDOM from "react-dom";
import App from "./app/app";

const reactContentRoot = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  reactContentRoot
);
