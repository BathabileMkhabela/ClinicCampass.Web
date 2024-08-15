import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import './Style101.css'

function App() {
  return (
    <div className="home">
      <Header />
      <main>
        <h1>Welcome to ClinicCompass</h1>
        <h2>Khow when your doctor's Available</h2>
        <p>Secure your spot at your local clinic</p>
        <button
          onClick={() => (window.location.href = "/login")}
          className="button"
        >
          Get Started
        </button>
      </main>
      <Footer />
    </div>
  );
}
export default App;
