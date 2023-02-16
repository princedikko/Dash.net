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
import Transaction from "./component/pages/businesspages/Transaction.jsx";
import Generating from "./component/pages/businesspages/Generating";
import Pricing from "./component/pages/businesspages/Pricing";
import ReportProblems from "./component/company/ReportProblems";
import AboutCompany from "./component/company/AboutCompany";
import ContactCompany from "./component/company/ContactCompany";
import AdminLogin from "./component/pages/AdminLogin";
import ProfileNotification from "./component/pages/profile/ProfileNotification";
import History from "./component/pages/profile/History";
import AffiliationInfo from "./component/company/AffiliationInfo";
function MainClient() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="adminlogin" element={<AdminLogin />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="business" element={<Business />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="profile" element={<Profile />}></Route>
      <Route path="company" element={<Company />}></Route>
      <Route path="affiliationinfo" element={<AffiliationInfo />}></Route>
      <Route path="help" element={<Help />}></Route>
      <Route path="reportproblems" element={<ReportProblems />}></Route>
      <Route path="contactcompany" element={<ContactCompany />}></Route>
      <Route path="aboutcompany" element={<AboutCompany />}></Route>
      {/* Profile Pages */}
      <Route path="account" element={<Account />}></Route>
      <Route path="funding" element={<Funding />}></Route>
      <Route path="affiliation" element={<Affiliation />}></Route>
      <Route path="accountsetting" element={<AccountSetting />}></Route>
      <Route
        path="profilenotification"
        element={<ProfileNotification />}
      ></Route>
      <Route path="history" element={<History />}></Route>
      <Route path="feedback" element={<FeedBack />}></Route>
      {/* Business pages */}
      <Route path="transaction" element={<Transaction />}></Route>
      <Route path="generate" element={<Generating />}></Route>
      <Route path="pricing" element={<Pricing />}></Route>
    </Routes>
  );
}

export default MainClient;
