import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "../CustomHooks/Login";
import RegistrationForm from "../CustomHooks/RegistrationForm";
import ProtectedRoute from "./Utils/ProtectedRoute";
import Dashboard from "./Dashboard";
import PrivateRoute from "./Utils/PrivateRoute";
import AllUsers from "./AllUsers";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/alluser"
          element={
            <PrivateRoute userRole="admin">
              <AllUsers />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default Routing;
