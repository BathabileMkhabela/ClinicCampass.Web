import logo from "../images/logo.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header1() {
  const loggedIn = false;

  return (
    <nav className="navbar">
      {/* <div className="navbar-brand">
        <a href="#home">React-Bootstrap</a>
        <button className="navbar-toggler" onClick={toggleNavbar}></button>
      </div>
      <div className={`navbar-collapse ${isOpen ? "open" : ""}`}> */}

      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-button" href="/">
            <img src={logo} className="nav_button" alt="logo" height={30} />
            <span>ClinicCompass</span>
          </a>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-button">
              <a href="/">Home</a>
            </li>
            {loggedIn ? (
              <>
                <li className="nav-button">
                  <a href="/login">Manage</a>
                </li>
                <li className="nav-button">
                  <a href="/login">Register</a>
                </li>
                <li className="/signout">Sign Out</li>
              </>
            ) : (
              <>
                <li className="nav-button">
                  <a href="/login">Sign In</a>
                </li>
                <li className="nav-button">
                  <a href="/signUp">Sign up</a>
                </li>
              </>
            )}

            <li className="nav-item dropdown">
              <a
                href="/register"
                className="nav-link register-toggle"
                onClick={(e) => e.preventDefault()}
              >
                Sing In
              </a>
              <div className="register-menu">
                <a href="/signPatient" className="register-item">
                  As Patient
                </a>
                <a href="/signDoc" className="register-item">
                  As Admin
                </a>
                <a href="/signNurse" className="register-item">
                  As Nurse
                </a>
                <a href="/signNurse" className="register-item">
                  As Doctor
                </a>
                <div className="register-divider"></div>
              </div>
            </li>

            <li className="nav-button">
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header1;
