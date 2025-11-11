import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

function PrivateRoutes({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-xl text-red-800"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location.pathname} to={"/auth/login"} />;
  }
  return <>{children}</>;
}

export default PrivateRoutes;
