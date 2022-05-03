import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./components/firebase";
import Payment from "./components/Payment";
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe("pk_test_51KtpHqSE57d3uIXyzes26cwLow8otFbdluiV04PwLt2ImVprAMQ8ryXSklJgyPb2P0XeK7EgwuKYU4zYmRrc0BuW00JDgezR6U");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once the app component loads....

    auth.onAuthStateChanged(authUser => {

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
         <Route path="/payment" element={<><Header/><Elements stripe={promise}><Payment /></Elements></>}></Route>
         <Route path="/login" element={<Login />}></Route>
         <Route path="/" element={<><Header /><Homepage /></>}></Route>
       </Routes>
      </div>
    </Router>
   
  );
}

export default App;
