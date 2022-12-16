import React from "react";
import ReactDOM from "react-dom";
// import Dashboard from "../components/dashboard";
import Invoice from "../components/invoice";
import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import UserForm from "../components/create_user_form";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Invoice />, document.getElementById("div"));
});

// serviceWorker.unregister();
