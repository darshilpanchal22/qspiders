import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
          to="/"
        >
          <li>
            <b>Home</b>
          </li>
        </NavLink>
        <NavLink
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
          to="/about"
        >
          <li>
            <b>About</b>
          </li>
        </NavLink>
        <NavLink
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
          to="/login"
        >
          <li>
            <b>Login</b>
          </li>
        </NavLink>
        <NavLink
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
          to="/user"
        >
          <li>
            <b>User</b>
          </li>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
