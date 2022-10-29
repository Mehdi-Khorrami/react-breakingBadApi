import React, { useEffect, useState } from "react"
import { Routes , BrowserRouter as Router , Route } from "react-router-dom";
import Home from "./page/Home";
import Details from "./page/Details";
import Login from "./page/Login";
import { selected } from "./context/context";


function App() {
  const [details , setDetails] = useState();
  const x ={
    details,
    setDetails
  }

  return (
    <Router>
      <selected.Provider value={x}>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="Details/:id" element={<Details />}/>
            <Route path="Login" element={<Login />}/> 
            <Route path="*" element={<Home />}/>  
        </Routes>
      </selected.Provider>  
    </Router>
  );
}

export default App;
