import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateInfo = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    register,
    user,
    setUser,
    updateInfo,
    loading,
    setLoading,
    login,
    logOut,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
}

export default AuthProvider;
