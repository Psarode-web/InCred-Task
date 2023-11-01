import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const AuthProtected = () => {
  const AuthToken = localStorage.getItem("token");
  return AuthToken ? <Outlet /> : <Navigate to="/" />;
};
