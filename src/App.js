import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Error, SingleCardPage } from "./pages/index";
import React from "react";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
function App() {
    return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path=":id"
          element={<SingleCardPage />}
        />
        <Route
          path="login"
          element={<Login />}
        />
        <Route
          path="profile"
          element={<Profile />}
        />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </Router>
  );
}

export default App;
