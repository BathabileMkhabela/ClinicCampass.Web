import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function App() {
   
    return (
    <div className="home">
        <Header />
        <main>
        <h1>Welcome to ClinicCompass</h1>
        <h2>Khow when your doctor's Available</h2>
        <p>
          ClinicCompass is an innovative platform designed to streamline the operations of community clinics by enhancing the management of doctor availability, patient appointments, and blood test results. We are dedicated to providing a seamless experience for both patients and healthcare providers.
        </p>
        <p>Secure your spot at your local clinic</p>
        <button onClick={() => window.location.href='/login'}>Get Started</button>
        </main>
     <Footer />
     </div>
    );
}
export default App;