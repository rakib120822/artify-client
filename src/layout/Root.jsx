import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

function Root() {
  return (
    <div className="flex flex-col ">
      <div className="sticky top-0">
        <Navbar />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Root;
