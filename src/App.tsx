import React, { useEffect, useState } from "react"
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./page/Home";
import Details from "./page/Details";
import Login from "./page/Login";
import { AppProvider } from "./context";



function App() {


  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Details/:id" element={<Details />} />
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
