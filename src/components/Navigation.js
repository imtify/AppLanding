import React from "react";
import { Link as ScrollLink } from "react-scroll/modules";
import { Link as RouterLink } from "react-router-dom";
import "../assets/css/main.css";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <RouterLink>
            <ScrollLink
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </ScrollLink>
          </RouterLink>
        </li>
        <li>
          <RouterLink>
            <ScrollLink
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Service
            </ScrollLink>
          </RouterLink>
        </li>
        <li>
          <RouterLink>
            <ScrollLink
              activeClass="active"
              to="features"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Feature
            </ScrollLink>
          </RouterLink>
        </li>
        <li>
          <RouterLink>
            <ScrollLink
              activeClass="active"
              to="restaurent"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Restaurent
            </ScrollLink>
          </RouterLink>
        </li>
        <li>
          <RouterLink>
            <ScrollLink
              activeClass="active"
              to="footer"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </ScrollLink>
          </RouterLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
