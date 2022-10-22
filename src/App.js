import React, { useState } from "react"
import { BrowserRouter as Router ,  Routes , Route } from "react-router-dom";
import Home from "./component/Home";
import Details from "./component/Details";
import Login from "./component/Login";
import { selected } from "./context/context";

function App() {
  const [details , setDetails] = useState();
  const x ={
    details,
    setDetails
  }
  return (
    <Router>
      <selected.Provider  value={x}>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="Details" element={<Details />}/>
            <Route path="Login" element={<Login />}/>
            <Route path="*" element={<Home />}/>  
        </Routes>
      </selected.Provider>  
    </Router>
  );
}

export default App;
