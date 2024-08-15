import { useState } from "react";
import './Style101.css'
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import logo from "../images/logo.jpg";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [IdNumber, setIDno] = useState("");
  const [Gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [Email, setEmail] = useState("");
  const [nextOfKin, setNextOfKin] = useState("");
  const [kinName, setKinName] = useState("");
  const [kinSurname, setKinSurname] = useState("");
  const [kinContact, setKinContact] = useState("");

  function submit() {
    if (FirstName === "") {
      alert("Enter first name");
      return;
    }
    if (LastName === "") {
      alert("Enter last name");
      return;
    }
    if (IdNumber === "") {
      alert("Enter ID Number");
      return;
    }

    if (Gender === "") {
      alert("Enter Gender");
      return;
    }

    if (contact === "") {
      alert("Enter Contact");
      return;
    }

    if (Email === "") {
      alert("Enter Email");
      return;
    }

    if (LastName === "") {
      alert("Enter last name");
      return;
    }
    var emailValidation = /\S+@\S+\.\S+/;
    if (!Email.match(emailValidation)) {
      alert("Enter valid email address");
      return;
    }
    var data = { FirstName, LastName, Email };
    console.log(data);
    navigate("/createPassword");
  }
  return (
    <div>
      <Header />
      <main>
        <h2>Register</h2>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            onChange={(event) => setFirstName(event.target.value)}
            className="control-form"
          />
        </div>

        <div className="form-group">
          <label>Surname</label>
          <input
            type="text"
            onChange={(event) => setLastName(event.target.value)}
            className="control-form"
          />
        </div>

        <div className="form-group">
          <label>ID Number</label>
          <input
            type="text"
            onChange={(event) => setIDno(event.target.value)}
            className="control-form"
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <input
            type="text"
            onChange={(event) => setGender(event.target.value)}
            className="control-form"
          />
        </div>

        <div className="form-group">
          <label>contact</label>
          <input
            type="text"
            onChange={(event) => setContact(event.target.value)}
            className="control-form"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            onChange={(event) => setEmail(event.target.value)}
            className="control-form"
          />
        </div>

        <div className="next of kin">
          <h2>Next Of Kin Information</h2>
          <div className="form-group">
            <div className="form-group">
              <label>Next of Kin Name</label>
              <input
                type="text"
                onChange={(event) => setKinName(event.target.value)}
                className="control-form"
              />
            </div>

            <div className="form-group">
              <label>Next of Kin Surname</label>
              <input
                type="text"
                onChange={(event) => setKinSurname(event.target.value)}
                className="control-form"
              />
            </div>

            <div className="form-group">
              <label>Next of Kin Contact</label>
              <input
                type="text"
                onChange={(event) => setKinContact(event.target.value)}
                className="control-form"
              />
            </div>

            <div className="form-group">
              <label>Kin Surname</label>
              <input
                type="text"
                onChange={(event) => setKinSurname(event.target.value)}
                className="control-form"
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <button onClick={() => submit()} className="button">
            Create Password
          </button>
        </div>

        {/* <div className="form-group">
                <button onClick={() => submit()} className="button">Submit</button>
            </div> */}
      </main>
      <Footer />
    </div>
  );
}

export default Register;
