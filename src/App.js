import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Error, SingleCardPage } from "./pages/index";
import React from "react";
function App() {
    return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="airbnb/:id"
          element={<SingleCardPage />}
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
