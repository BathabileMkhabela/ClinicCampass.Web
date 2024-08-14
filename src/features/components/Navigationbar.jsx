import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/navigationbar.css";
import logo from "../../assets/Health_Icon.webp";
import LandHomepage2Links from "./LandHomepage2Links";
import AboutLinks from "./TopTwo2HeaderLinks";
import DefaultLinks from "./DefaultLinks";
import TopFourHeaderLinks from "./TopFourHeaderLinks";
import TopTwoHeaderLinks from "./TopTwoHeaderLinks";
import TopThreeHeaderLinks from "./TopThreeHeaderLinks";
import TopThree2HeaderLinks from "./TopThree2HeaderLinks";

const Navigationbar = ({ toggleButtons }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.toLowerCase() === "kwamhlanga clinic") {
      navigate("/clinic-landing-page");
    }
  };

  const renderLinks = () => {
    const { pathname } = location;

    switch (pathname) {
      case "/home":
        return (
          <DefaultLinks toggleButtons={toggleButtons} location={location} />
        );

      case "/patient-landing-page":
        return (
          <LandHomepage2Links
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearch={handleSearch}
          />
        );

      case "/clinic-landing-page":
      case "/confrm-booking":
      case "/booking":
      case "/patient-signin":
        return <TopThree2HeaderLinks />;

      case "/clinic-landing-page":
      case "/admin-signin":
      case "/signup":
      case "/register":
      case "/reset-password":
        return <TopTwoHeaderLinks />;

      case "/about":
        return <AboutLinks />;

      case "/Admin-dashboard":
        return <TopThreeHeaderLinks />;

      case "/docnursinfo":
      case "/managenursedoc":
      case "/addnursedoc":
      case "/createPassword":
      case "/regDone":
        return <TopFourHeaderLinks />;

      default:
        return (
          <DefaultLinks toggleButtons={toggleButtons} location={location} />
        );
    }
  };

  return (
    <nav className="navbar1">
      <div className="navbar-logo1">
        <img src={logo} alt="Logo" className="logo1" />
        <span className="system-name1">ClinicCompass</span>
      </div>
      <ul className="navbar-links1">{renderLinks()}</ul>
    </nav>
  );
};

export default Navigationbar;
