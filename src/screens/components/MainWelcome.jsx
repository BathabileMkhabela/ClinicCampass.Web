import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import logo from "../images/logo.jpg";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import IncomingAppointments from "./InAppointment";

const HomePage = () => {
  return (
    <div>
      <div>
          <IncomingAppointments />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
