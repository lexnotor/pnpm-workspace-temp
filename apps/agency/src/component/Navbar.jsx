import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="text-slate-800">
      <ul className="flex justify-center gap-3 px-4 pt-2">
        <li>
          <Link to="/agency/home">Home</Link>
        </li>
        <li>
          <Link to="/agency/services">Services</Link>
        </li>
        <li>
          <Link to="/agency/about">About</Link>
        </li>
        <li>
          <Link to="/agency/contact">Contact</Link>
        </li>
        <li>Apps</li>
      </ul>
    </nav>
  );
};

export default Navbar;
