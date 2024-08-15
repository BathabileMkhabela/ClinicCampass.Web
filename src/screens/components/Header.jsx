import logo from "../images/logo.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import { NavDropdown } from "react-bootstrap";


function Header() {
  const Login = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
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
            <div className="nav-button">
              <a href="/">Home</a>
            </div>
            <div className="nav-button">
              <a href="/mainWelcome">Dashboard</a>
            </div>
            {Login ? (
              <>
                <div className="nav-button">
                  <a href="/login">Manage</a>
                </div>
                <div className="nav-button">
                  <a href="/login">Register</a>
                </div>
                <div className="/signout">Sign Out</div>
              </>
            ) : (
              <>
                {/* <li
                 className="nav-button">
                  <a href="/login">Sign In</a>
                </li> */}
                <div className="nav-button">
                <NavDropdown className="nav-button" title="Sign In">
                  <Dropdown.Item href="/login">As Patient</Dropdown.Item>
                  <Dropdown.Item href="/login">As Admin</Dropdown.Item>
                  <Dropdown.Item href="/login"> As Nurse</Dropdown.Item>
                  <Dropdown.Item href="/login">As Doctor</Dropdown.Item>
                </NavDropdown>
                </div>
                <div className="nav-button">
                  <a href="/register">Sign up</a>
                </div>
              </>
            )}

            <div className="nav-button">
              <a href="/about">About</a>
            </div>

            <form className="d-flex" role="search">
              <input
                className="fas fa-search search-icon"
                type="search"
                placeholder="Search"
                aria-label="Search"
                // className="fas fa-search search-icon"
              />
              {/* <button className="btn btn-outline-success"     type="submit">
                    <span class="icon">🔍</span>
                </button> */}
              <i className="fas fa-search search-icon"></i>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
