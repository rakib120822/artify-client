import React from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  const user = {name:"rakib"};
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
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between hover:text-red-800  font-bold">
                  {user?.name}
                </a>
              </li>

              <li>
                <button className="  hover:text-red-800  font-bold ">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <button className="btn btn-outline hover:bg-red-800 hover:text-white text-red-800  font-bold ">
              Login
            </button>
            <button className="btn  bg-red-800 text-white hover:text-red-800 hover:bg-white border border-red-800  font-bold ">
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
