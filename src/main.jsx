import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Axios
import axios from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com";
axios.defaults.headers.common["Content-Type"] = "application/json";
let token = localStorage.getItem("token");
if (token) axios.defaults.headers.common["x-auth-token"] = token;

// Router
import { BrowserRouter as Router } from "react-router-dom";

// Styles
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { ToastContainer } from "react-toastify";

// Redux toolkit
import { Provider } from "react-redux";
import store from "./rt";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer theme="colored" />
  </Router>
);
