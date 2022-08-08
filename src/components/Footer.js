import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import CallIcon from '@material-ui/icons/Call';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import "./Footer.css";

function Footer() {
  return (

    <MDBFooter bgColor='primary' className='text-center text-lg-start text-white mt-5'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="links">
          {/* <a href='' className='me-4 text-reset ic'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset ic'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset ic'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset ic'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset ic'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset bg-light'>
            <MDBIcon fab icon="github" />
          </a> */}
          <div className="footer_contact" id="call">
        <a href="tel:9391035332" target="_blank"><CallIcon/></a>
        <ul>
          <li>9391035332</li>
        </ul>
        </div>
      <div className="footer_contact">
      <a href="mailto:altitudeacademy9.com" target="_blank"><MailIcon/></a> 
      </div>
      <div className="footer_contact">
        <a href="https://www.instagram.com/altitude_academy/?hl=en" target="_blank"><InstagramIcon/></a>
      </div>
      <div className="footer_contact">
      <a href="https://www.facebook.com/altitudeacademyhyd/" target="_blank"><FacebookIcon/> </a>
      </div>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-0" />
                altitude academy
              </h6>
              <p>
                A place to learn, engage, interact and share.
                We make learning easier for students by creating just the right learning atmosphere and most importantly work on overcoming the students' fear of exams and certain subjects.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a  className='text-reset'>
                Practice Sheets
                </a>
              </p>
              <p>
                <a  className='text-reset'>
                  Worksheets
                </a>
              </p>
              <p>
                <a  className='text-reset'>
                  Question Papers
                </a>
              </p>
              <p>
                <a  className='text-reset'>
                  Previous Year Papers
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/studymaterial' className='text-reset'>
                  Study material
                </a>
              </p>
              <p>
                <a href='/reviews' className='text-reset'>
                  Reviews
                </a>
              </p>
              <p>
                <a href='/gallery' className='text-reset'>
                  Gallery
                </a>
              </p>
              <p>
                <a href='/about' className='text-reset'>
                  About Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-0" />
                  Manasarovar Heights Rd, 500009
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-0" />
                altitudeacademy9@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-0" /> +919391035332 
              </p>
              <p>
                <MDBIcon icon="print" className="me-0" /> +919177565330
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        @
        <a className='text-reset fw-bold' href='https://altitudeacademy.com/'>
          altitudeacademy.com
        </a>
      </div>
    </MDBFooter>     
  

    
  );
}

export default Footer;
