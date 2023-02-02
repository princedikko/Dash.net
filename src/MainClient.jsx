import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages Imports
import HomePage from "./HomePage";
import Login from "./component/pages/Login";
import Register from "./component/pages/Register";
import Business from "./component/pages/Business";
import Profile from "./component/pages/Profile";
import Company from "./component/pages/Company";

function MainClient() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="business" element={<Business />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="profile" element={<Profile />}></Route>
      <Route path="company" element={<Company />}></Route>
    </Routes>
  );
}

export default MainClient;
