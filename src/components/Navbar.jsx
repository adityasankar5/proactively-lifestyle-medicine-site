import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../assets/logo.png";
import down from "../assets/down.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar__logo-container">
      <img className="navbar__icon" src={logo} alt="Logo Icon" />
      <div className="navbar__logo">ProVital</div>
      </div>
      <nav className={`navbar__links ${isMenuOpen ? "active" : ""}`}>
  <a className="navbar__link" href="#practice">List Your Practice</a>
  <a className="navbar__link" href="#employers">For Employers</a>
  <a className="navbar__link" href="#courses">Courses</a>
  <a className="navbar__link" href="#speakers">Speakers</a>
  <a className="navbar__link" href="#doctors">Doctors</a>
  {/* <a className="navbar__link" href="#doctors">Login / Signup <img src={down} height="7px"></img> </a> */}
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
      <button className="navbar__hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
    </header>
  );
};

export default Navbar;
