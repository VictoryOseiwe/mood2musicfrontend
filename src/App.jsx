import React from "react";
import Home from "./pages/home/Home";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </>
  );
}
