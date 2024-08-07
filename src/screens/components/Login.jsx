import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Login() {
  const user = [
    { email: "kekana@gmail.com", password: "123zxc@Z" },
    { email: "nkosana@gmail.com", password: "123zxc@Z" },
  ];

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const login = () => {
    var isFound = false;
    for (var k = 0; k < user.length; k++) {
      if (user[k].email === Email) {
        if (user[k].password === Password) {
          isFound = true;
        }
      }
    }

    if (isFound) {
      toast.success("Login successfully");
    } else {
      toast.warn("user not found");
    }
  };
  return (
    <div>
      <ToastContainer />
      {/* <header>
            <nav>
                <img src={logo} className="nav_button" alt="logo" height={30}  />
                <span>ClinicCompass</span>
                <a href="/">Home</a>
		        <a href='/register'>Sign Up</a>
                <a href="/about">About</a>
            </nav>
        </header> */}
      <Header />

      <main>
        <h2>Login</h2>
        <div className="container">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              className="control-form"
            />
          </div>
          <div className="form-group">
            <label>First name</label>
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              className="control-form"
            />
          </div>
          <div className="form-group">
            <button onClick={(login) => window.location.href='/mainWelcome' }>Login</button>
          </div>

          <div className="form-button-group">
            <Link to="/ForgotPassword" className="nav_button">
              Forgot Password
            </Link>
            Don't Have an account <Link to="/register">Sign Up</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Login;
