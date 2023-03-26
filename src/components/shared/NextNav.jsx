import React from "react";
import { NavLink } from "react-router-dom";

const NextNav = () => {
  return (
    <div className="drawer text-neutral">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-transparent">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
                color="#1A2C51"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 text-primary font-semibold text-xl">NextTrip</div>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs lg:mx-20" />
          <div className="flex-1 md:flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-x-2 text-primary">
              <li>
                <NavLink to="/home" className="rounded-md py-1.5">Home</NavLink>
              </li>
              <li>
                <NavLink to="/explore" className="rounded-md py-1.5">Explore Tours</NavLink>
              </li>
              <li>
                <NavLink to="/login" className="rounded-md py-1.5">Login/SignUp</NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className="rounded-md py-1.5">Blogs</NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        Content
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu gap-y-2 p-4 w-80 bg-base-100 justify-center items-stretch">
          <li>
            <NavLink to="/home" className="rounded-md py-1.5">Home</NavLink>
          </li>
          <li>
            <NavLink to="/explore" className="rounded-md py-1.5">Explore Tours</NavLink>
          </li>
          <li>
            <NavLink to="/login" className="rounded-md py-1.5">Login/SignUp</NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className="rounded-md py-1.5">Blogs</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NextNav;
