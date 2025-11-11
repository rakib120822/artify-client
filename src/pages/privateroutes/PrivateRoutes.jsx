import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

function PrivateRoutes({ children }) {
  const {user} =  useAuth()
  const location = useLocation();
  if (!user) {
    return <Navigate state={location.pathname} to={"/auth/login"} />;
  }
  return <>{children}</>;
}

export default PrivateRoutes;
