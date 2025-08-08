import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CompletedPage } from "./pages/CompletedPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completed" element={<CompletedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
