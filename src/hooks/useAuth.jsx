import React, { use } from "react";
import AuthContext from "../context/auth/AuthContext";

const useAuth = () => {
  return use(AuthContext);
};

export default useAuth;
