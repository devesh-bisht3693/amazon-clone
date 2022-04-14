import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import Header from "./components/Header";


function App() {
  return (
    <Router>
      <div className="App">
       <Routes>
         <Route path="/checkout" element={<><Header/><Checkout /></>}></Route>
         <Route path="/login" element={<Login />}></Route>
         <Route path="/" element={<><Header /><Homepage /></>}></Route>
       </Routes>
      </div>
    </Router>
   
  );
}

export default App;
