import React, {useState} from "react";
import CallIcon from '@material-ui/icons/Call';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header(props){
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className={props.route}>
      <img src="images/logoaa2.png" alt="" className="header_logo" />

      <div className="header_nav">
      <Link to='/'><div className="header_option">Home</div></Link>
        <Link to='/studymaterial'><div className="header_option">Study Material</div></Link>
        <Link to ='/about'><div className="header_option">About Us</div></Link>
        <Link to ='/reviews'><div className="header_option">Reviews</div></Link>
        <Link to ='/gallery'><div className="header_option">Gallery</div></Link>
        {/* <Link to ='/login'><div className="header_option">Login</div></Link> */}
        {user ? <Link to ='/payment'><div className="header_option">Cart</div></Link> : <Link to ='/login'><div className="header_option">Cart</div></Link>}
        
        <div onClick={handleAuthenticaton} className="header_option">
        {user ? <Link to ='/'><p>Sign Out</p></Link> : <Link to ='/login'><p>Sign In</p></Link>}
        </div>
        
        
        <div className="header_contact" id="call">
        <a href="tel:9391035332" target="_blank"><CallIcon/></a>
        <ul>
          <li>9391035332</li>
        </ul>
        </div>
      <div className="header_contact">
      <a href="mailto:altitudeacademy9.com" target="_blank"><MailIcon/></a> 
      </div>
      <div className="header_contact">
        <a href="https://www.instagram.com/altitude_academy/?hl=en" target="_blank"><InstagramIcon/></a>
      </div>
      <div className="header_contact">
      <a href="https://www.facebook.com/altitudeacademyhyd/" target="_blank"><FacebookIcon/> </a>
      </div>
      
      </div>
      </div>
  );
}
Header.defaultProps = {
  route: "page_header"
}
export default Header;
