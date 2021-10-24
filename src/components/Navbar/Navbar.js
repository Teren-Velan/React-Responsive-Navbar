import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { FaReact, FaTimes, FaBars } from "react-icons/fa";
import { Button } from "../Button";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState(true);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        React <FaReact />
      </h1>
      <div className="menu-icon" onClick={() => handleClick()}>
        {active ? <FaTimes className="times" /> : <FaBars className="bars" />}
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map(({ title, url, cName }, index) => {
          return (
            <li key={index}>
              <a className={cName} href={url}>
                {title}
              </a>
            </li>
          );
        })}
      </ul>
      <Button>Sign up</Button>
    </nav>
  );
}

export default Navbar;
