import React from 'react';
import NavBar from "./NavBar";

function Landingpage() {

  return (
    <div className="landing-App">
      <NavBar />
      <header className="land-app">
        <h1 className="header">Welcome back, Dr SK Skosana</h1><br />
        <br /><h2 className="header">Discover Your Nearest Clinic</h2><br />
      </header>
      <main>
        <section>
          <p>Use our search bar to quickly find the nearest clinic to you.
            Get comprehensive information about its services, operating hours,
            and availability of the Doctors to ensure you receive the care you need.
            Promptly and efficiently.
          </p><br />
        </section>

        <h2 className="white-text">Manage your clinics</h2><br />

        <div className="container px-4 text-center" id="gutters">
          <div className="row gx-5">
            <div className="col">
              <div className="p-3 bold-text"> Kwaggafontein 
                Clinic
              </div>
              <div className="form-group">
                <button className="green-button" onClick={() => window.location.href = '/landingPage'}>View</button>
                <button className="green-button" onClick={() => window.location.href = '/landingPage'}>Set Availability</button>
              </div>
            </div>
            <div className="col">
              <div className="p-3 bold-text">KwaMhlanga 
                Clinic
              </div>
              <div className="form-group">
                <button className="green-button" onClick={() => window.location.href = '/landingPage'}>View</button>
                <button className="green-button" onClick={() => window.location.href = '/landingPage'}>Set Availability</button>
              </div>
            </div>
            <div className="col">
              <div className="p-3 bold-text"> Verena 
                Clinic
              </div>
              <div className="form-group">
                <button className="green-button" onClick={() => window.location.href = '/landingPage'}>View</button>
              <br/>  <button className="green-button" onClick={() => window.location.href = '/landingPage'}>Set Availability</button>
              </div>
            </div>
          </div>
        </div>

        <section>
          <ul></ul>
        </section>
        <section></section>
      </main>
    </div>
  );
}


export default Landingpage;
