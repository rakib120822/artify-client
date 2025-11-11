import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

function Root() {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default Root;
