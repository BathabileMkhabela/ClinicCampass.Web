import React from 'react';
import logo from './Logos.jpeg';

function Navbar() { 


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} className="nav_button logo-zoom" alt="logo" height={40} />
                    <span className="logo-text">ClinicCompass</span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Signout
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Signin
                            </a>
                            </li>    

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
