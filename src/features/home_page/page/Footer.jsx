import React from 'react';
import logo from '../../../assets/admin_assets/icons/c_logo.svg';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '../../../styles/homepage_styles.css'; // Add the CSS file for custom styling

function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted footer-container'>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="heartbeat" className="me-3 text-primary" />
                ClinicCompass
              </h6>
              <p>
                Make appointments with the doctor on their available days. Your health is our priority.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Appointment Schedules
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Doctor's Availability
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Blood Test Results
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  FAQ
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
              <p>
                <MDBIcon icon="map-marker-alt" className="me-2 text-primary" />
                Pretoria, PTA 012, RSA
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3 text-primary" />
                info@cliniccompass.com
              </p>
              <p>
                <MDBIcon icon="phone-alt" className="me-3 text-primary" /> +27 00 000 0000
              </p>
              <p>
                <MDBIcon icon="fax" className="me-3 text-primary" /> +27 12 345 6789
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 footer-bottom' style={{ backgroundColor: '#f8f9fa' }}>
        <MDBContainer className='d-flex justify-content-between align-items-center'>
          <span>© 2024 ClinicCompass</span>
          <img src={logo} alt='logo' className='footer-logo' />
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
