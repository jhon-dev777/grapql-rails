import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "../components/dashboard";
// import "primereact/resources/themes/vela-blue/theme.css";
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Dashboard />, document.getElementById("div"));
});
