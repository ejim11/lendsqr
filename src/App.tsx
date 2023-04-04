import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardMain from "./pages/DashboardMain/DashboardMain";
import Users from "./pages/Users/Users";
import Login from "./pages/Login/Login";
import { useEffect } from "react";
import { getAllUsers } from "./actions/usersListActions";
import { useAppDispatch } from "./hooks/reduxHooks";
import Layout from "./components/Layout/Layout";
import UserDetails from "./pages/UserDetails/UserDetails";
import GeneralDetails from "./pages/UserDetails/GeneralDetails/GeneralDetails";
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatchFn = useAppDispatch();

  useEffect(() => {
    const storedUsersList: any = localStorage.getItem("tableList");

    if (!JSON.parse(storedUsersList)) {
      dispatchFn(getAllUsers());
    }
  });

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={"login"} />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<DashboardMain />} />
        <Route path="customers/users" element={<Users />} />
        <Route path="customers/users/:userId" element={<UserDetails />}>
          <Route path="" element={<Navigate to="general-details" />} />
          <Route path="general-details" element={<GeneralDetails />} />
          <Route path="*" element={<UnderConstruction />} />
        </Route>
        <Route path="*" element={<UnderConstruction />} />
      </Routes>
      <ToastContainer limit={1} autoClose={2000} />
    </Layout>
  );
}

export default App;
