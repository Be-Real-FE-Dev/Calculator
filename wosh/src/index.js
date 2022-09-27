import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CalculatorContextProvider from "./store/cal-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CalculatorContextProvider>
      <App />
    </CalculatorContextProvider>
  </React.StrictMode>
);
