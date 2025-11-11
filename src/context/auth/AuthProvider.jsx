import React, { useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateInfo = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  

  const userInfo = { register, user, setUser, updateInfo };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
}

export default AuthProvider;
