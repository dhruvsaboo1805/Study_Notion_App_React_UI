import "./App.css";
import React from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes , Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isLoggedIn , setIsLoggedIn] = useState(false);

  return(
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>

      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/login" element = {<Login setIsLoggedIn = {setIsLoggedIn}/>}></Route>
        <Route path = "/signup" element = {<SignUp setIsLoggedIn = {setIsLoggedIn}></SignUp>}></Route>
        <Route path = "/dashboard" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard></Dashboard>
          </PrivateRoute>
        }></Route>
        <Route path = "*">404 error</Route>

      </Routes>
    </div>
  )
}

export default App;
