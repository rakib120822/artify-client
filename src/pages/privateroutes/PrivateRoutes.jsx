import React from "react";
import { Navigate, useLocation } from "react-router";

function PrivateRoutes({ children }) {
  const user = null;
  const location = useLocation();
  if (!user) {
    return <Navigate state={location.pathname} to={"/auth/login"} />;
  }
  return <>{children}</>;
}

export default PrivateRoutes;
