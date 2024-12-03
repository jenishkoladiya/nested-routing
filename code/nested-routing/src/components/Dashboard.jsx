import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Settings from "./Settings";
import Account from "./Account";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav className="sub-nav">
        <ul>
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
          <li>
            <Link to="account">Account</Link>
          </li>
        </ul>
      </nav>

      <div>
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Account />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
