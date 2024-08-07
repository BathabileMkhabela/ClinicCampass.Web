import { useState } from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function About() {

    return(
        <body>
            <Header />
            <main>
<div id="about">
    <section className="about">  
             <h2>STAY INFORMED ABOUT YOUR</h2>
             <h2>NEAREST CLINIC</h2>
             </section>

             <section className="history">
             <h2>Discover Your Nearest Clinic</h2>
             <p>
                Use our search bar to quackly find the nearest clinic to you.
                Get comprehensive information about its service, operating hours,
                and availability of the Doctors to ensure you receive the care you need
                promplty and effeciently.
             </p>
              </section>
</div>
             
            </main>
        </body>
    );
    
}

export default About;