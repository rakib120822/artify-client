import React from "react";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
import Forbidden from "../forbiddenPage/Forbidden";
import { useState } from "react";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    fetch(`https://artify-server-xi.vercel.app/users?email=${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
      });
  }, [user]);

  if (userInfo?.role !== "admin") {
    return <Forbidden />;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return <>{children}</>;
};

export default AdminRoutes;
