import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import TestCases from "./pages/TestCases";
function App() {
  return (
    <Router>
      <Navbar/>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-auto">
          <div className="p-4 flex-1 ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/testcases" element={<TestCases/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
