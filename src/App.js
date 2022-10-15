import React from "react"
import { BrowserRouter as Router ,  Routes , Route } from "react-router-dom";
import Home from "./component/Home";
import Details from "./component/Details";
import Login from "./component/Login";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="Details" element={<Details />}/>
            <Route path="Login" element={<Login />}/>
            <Route path="*" element={<Home />}/>
        </Routes>
    </Router>
  );
}

export default App;
