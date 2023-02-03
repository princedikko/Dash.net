import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages Imports
import HomePage from "./HomePage";
import Login from "./component/pages/Login";
import Register from "./component/pages/Register";
import Business from "./component/pages/Business";
import Profile from "./component/pages/Profile";
import Company from "./component/pages/Company";
import Account from "./component/pages/profile/Account";
import Funding from "./component/pages/profile/Funding";
import Affiliation from "./component/pages/profile/Affiliation";
import Help from "./component/company/Help";
import AccountSetting from "./component/pages/profile/AccountSetting";
import FeedBack from "./component/pages/profile/FeedBack";
import Transaction from "./component/pages/businesspages/Transaction";
import Generating from "./component/pages/businesspages/Generating";
import Pricing from "./component/pages/businesspages/Pricing";

function MainClient() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="business" element={<Business />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="profile" element={<Profile />}></Route>
      <Route path="company" element={<Company />}></Route>
      <Route path="help" element={<Help />}></Route>
      {/* Profile Pages */}
      <Route path="account" element={<Account />}></Route>
      <Route path="funding" element={<Funding />}></Route>
      <Route path="affiliation" element={<Affiliation />}></Route>
      <Route path="accountsetting" element={<AccountSetting />}></Route>
      <Route path="feedback" element={<FeedBack />}></Route>
      {/* Business pages */}
      <Route path="transaction" element={<Transaction />}></Route>
      <Route path="generate" element={<Generating />}></Route>
      <Route path="pricing" element={<Pricing />}></Route>
    </Routes>
  );
}

export default MainClient;
