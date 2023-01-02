import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/main.css";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/feature">Feature</Link>
        </li>
        <li>
          <Link to="/restaurent">Restaurent</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
