import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardMain from "./pages/Dashboard/DashboardMain/DashboardMain";
import Users from "./pages/Dashboard/Users/Users";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to={"login"} />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="" element={<DashboardMain />} />
          <Route path="customers/users" element={<Users />} />
        </Route>
        <Route path="*" element={<div>Still Building</div>} />
      </Routes>
    </div>
  );
}

export default App;
