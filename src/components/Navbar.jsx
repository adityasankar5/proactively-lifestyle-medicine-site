import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../assets/logo.png";
import down from "../assets/down.png";
import bars from "../assets/bars.png";
import rightArrow from "../assets/right-arrow.png";
import closeIcon from "../assets/close.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle state value
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu explicitly
  };

  return (
    <header className="navbar">
      <div className="navbar__logo-container">
        <img className="navbar__icon" src={logo} alt="Logo Icon" />
        <div className="navbar__logo">ProVital</div>
      </div>
      <nav className="navbar__links">
        <a className="navbar__link" href="#practice">List Your Practice</a>
        <a className="navbar__link" href="#employers">For Employers</a>
        <a className="navbar__link" href="#courses">Courses</a>
        <a className="navbar__link" href="#speakers">Speakers</a>
        <a className="navbar__link" href="#doctors">Doctors</a>
        <div className="navbar__dropdown">
          <a href="#login" className="navbar__link navbar__login">
            Login / Signup &nbsp;<img src={down} height="7px" alt="Dropdown" />
          </a>
          <div className="navbar__dropdown-content">
            <div className="navbar__dropdown-row">
              <a href="#doctors" className="normal-text">Doctors</a>
              <a href="#login" className="login-signup">Login</a>
              <a href="#signup" className="login-signup">Sign Up</a>
            </div>
            <div className="navbar__dropdown-divider"></div>
            <div className="navbar__dropdown-row">
              <a href="#patients" className="normal-text">Patients</a>
              <a href="#login" className="login-signup">Login</a>
              <a href="#signup" className="login-signup">Sign Up</a>
            </div>
          </div>
        </div>
      </nav>
      <img className="navbar__hamburger" src={bars} height="25px" alt="Hamburger Icon" onClick={toggleMenu} />
      <div className={`navbar__overlay ${isMenuOpen ? "active" : ""}`}>
        <div className="navbar__overlay__contents">
          <div className="navbar__overlay__header">
            <div className="navbar__logo-container">
        <img className="navbar__icon" src={logo} alt="Logo Icon" />
        <div className="navbar__logo">ProVital</div>
      </div>
            <div>

            <img
              className="navbar__close"
              src={closeIcon}
              height="20px"
              alt="Close Icon"
              onClick={closeMenu}
              />
              </div>
          </div>
          <div className="navbar__overlay__dialog-box">
            <div className="navbar__dropdown-row">
              <a href="#doctors" className="normal-text">Doctors</a>
              <a href="#login" className="login-signup">Login</a>
              <a href="#signup" className="login-signup">Sign Up</a>
            </div>
            <div className="navbar__dropdown-divider"></div>
            <div className="navbar__dropdown-row">
              <a href="#patients" className="normal-text">Patients</a>
              <a href="#login" className="login-signup">Login</a>
              <a href="#signup" className="login-signup">Sign Up</a>
            </div>
          </div>
          
          <ul className="navbar__overlay__menu">
            {[
              "List Your Practice",
              "For Employers",
              "Courses",
              "Speakers",
              "Doctors",
            ].map((item, index) => (
              <li key={index} className="navbar__overlay__menu-item">
                {item}
                <img src={rightArrow} height="15px" alt="Right Arrow" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
