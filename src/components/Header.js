import axios from "axios";
import React, { useEffect, useState } from "react";
import LineIcon from "react-lineicons";
import { NavLink } from "react-router-dom";

function Header() {
  const [information, setInformation] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`mi-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="mi-header-inner">
        <NavLink to="/" end className="mi-header-logo" onClick={closeMenu}>
          {information.name || "Kaylei Burke"}
        </NavLink>

        <ul className="mi-header-menu">
          <li>
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" onClick={closeMenu}>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolios" onClick={closeMenu}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>

        <button
          className="mi-header-toggler"
          onClick={handleMenuToggle}
          aria-label="Toggle navigation"
        >
          <LineIcon name={menuOpen ? "close" : "menu"} />
        </button>
      </div>

      <ul className={`mi-header-mobile-menu${menuOpen ? " is-open" : ""}`}>
        <li>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" onClick={closeMenu}>
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolios" onClick={closeMenu}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
