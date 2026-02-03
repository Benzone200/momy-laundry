
import { Routes, Route, Navigate } from "react-router-dom";

import { useState } from 'react'
import './App.css'
import Intro1 from "./components/Intro.jsx"
import Login from "./authentication/Login.jsx"
import Verify from "./authentication/Verify.jsx"
import Register from "./authentication/Register.jsx"
import Forgot from "./authentication/Forgot.jsx"
import Change from "./authentication/Change.jsx"
import Home from "./Pages/Home.jsx"
import Order from "./Pages/Order.jsx"
import Pickup from "./Pages/Pickup.jsx"
function App() {
  return (
    <Routes>
      {/* Intro / Carousel */}
      <Route path="/" element={<Intro1 />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<Forgot />} />
      <Route path="/change-password" element={<Change />} />
      <Route path="/verify" element={<Verify />} />

      {/* Pages */}
      <Route path="/home" element={<Home />} />
      <Route path="/order" element={<Order />} />
      <Route path="/pickup" element={<Pickup />} />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
