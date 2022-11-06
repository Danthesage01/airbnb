import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "./hideScrollbar.css";
import AirbnbProvider from "./context/context";
import UserAuthProvider from "./context/UserAuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AirbnbProvider>
      <UserAuthProvider>
        <App />
      </UserAuthProvider>
    </AirbnbProvider>
  </React.StrictMode>
);
