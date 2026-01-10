import React from "react";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
import Forbidden from "../forbiddenPage/Forbidden";
import { useState } from "react";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    fetch(`http://localhost:3000/users?email=${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("admin route user data :", data);
        setUserInfo(data);
      });
  }, [user]);

  if (userInfo?.role !== "admin") {
    return <Forbidden />;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return <>{ children }</>;
};

export default AdminRoutes;
