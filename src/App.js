import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./components/firebase";


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once the app component loads....

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        // the user is logged out 
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

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
