
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import EventPage from "./pages/Event";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/event" element={<EventPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
