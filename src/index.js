// index.js or App.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./i18n"; // 👈 IMPORTANT


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/berry-react-dashboard">
    <App />
  </BrowserRouter>
);
