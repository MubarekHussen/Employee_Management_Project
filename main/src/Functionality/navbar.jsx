import React, { Component } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Employees
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
