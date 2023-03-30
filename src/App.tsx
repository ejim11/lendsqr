import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardMain from "./pages/DashboardMain/DashboardMain";
import Users from "./pages/Users/Users";
import Login from "./pages/Login/Login";
import { useEffect } from "react";
import { getAllUsers } from "./actions/usersListActions";
import { useAppDispatch } from "./hooks/reduxHooks";
import Layout from "./components/Layout/Layout";

function App() {
  const dispatchFn = useAppDispatch();
  useEffect(() => {
    dispatchFn(getAllUsers());
  });

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to={"login"} />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<DashboardMain />} />
          <Route path="customers/users" element={<Users />} />
          <Route path="*" element={<div>Still Building</div>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
