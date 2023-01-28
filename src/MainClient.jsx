import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages Imports
import HomePage from "./HomePage";
import Business from "./component/pages/Business";
import Company from "./component/pages/Company";
import Login from "./component/pages/Login";
import Register from "./component/pages/Register";

function MainClient() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="business" element={<Business />}></Route>
      <Route path="company" element={<Company />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
    </Routes>
  );
}

export default MainClient;
