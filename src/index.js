import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "./hideScrollbar.css";
import AirbnbProvider from "./context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AirbnbProvider>
      <App />
    </AirbnbProvider>
  </React.StrictMode>
);
