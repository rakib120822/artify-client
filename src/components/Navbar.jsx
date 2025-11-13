import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function Navbar() {
  const { user, loading, logOut, setUser } = useAuth();
  const links = (
    <>
      <li className="hover:text-red-700">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:text-red-700">
        <NavLink to={"/all-artworks"}>Explore Artworks</NavLink>
      </li>
      {user ? (
        <>
          <li className="hover:text-red-700">
            <NavLink to={"/add-artwork"}>Add Artwork</NavLink>
          </li>
          <li className="hover:text-red-700">
            <NavLink to={"/my-gallery"}>My Gallery</NavLink>
          </li>
          <li className="hover:text-red-700">
            <NavLink to={"/my-favorites"}>My Favorites</NavLink>
          </li>
        </>
      ) : (
        ""
      )}
    </>
  );

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogOut = () => {
    logOut().then(() => toast.success("Log Out successful"));
    setUser(null);
  };

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className=" text-3xl font-extrabold">
          <span className="text-red-800">ART</span>IFY
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5  px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <input
          type="checkbox"
          onClick={(e) => handleTheme(e.target.checked)}
          className="toggle mr-5"
          checked={theme === "dark"}
        />
        {loading ? (
          <span className="loading loading-spinner loading-xl text-red-800"></span>
        ) : user ? (
          <div
            className="dropdown dropdown-end"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={`${user?.displayName}`}
          >
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <Tooltip id="my-tooltip" />
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between hover:text-red-800  font-bold">
                  {user?.displayName || ""}
                </a>
              </li>
              <li>
                <a className="justify-between hover:text-red-800  font-bold">
                  {user?.email || ""}
                </a>
              </li>
              <li>
                <Link
                  to={"/update/profile"}
                  className="justify-between hover:text-red-800  font-bold"
                >
                  <span className="flex gap-1 items-center">
                    <img
                      width="14"
                      height="14"
                      src="https://img.icons8.com/material-sharp/24/1A1A1A/settings.png"
                      alt="settings"
                    />
                    Settings
                  </span>
                </Link>
              </li>

              <li>
                <button
                  onClick={handleLogOut}
                  className="btn  bg-red-800 text-white  font-bold mt-1"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link
              to={"/auth/login"}
              className="btn btn-outline hover:bg-red-800 hover:text-white text-red-800  font-bold "
            >
              Login
            </Link>
            <Link
              to={"/auth/register"}
              className="btn  bg-red-800 text-white hover:text-red-800 hover:bg-white border border-red-800  font-bold "
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
