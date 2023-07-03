import React from 'react';
import { faFacebook, faTwitter, faGoogle, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Footer.css";

const Footer = () => {
    return ( <
        footer >
        <
        div className = "footer-content" >
        <
        h3 > delicious eats < /h3> <
        p > Unleash your culinary creativity with our delectable recipes. < /p> <
        ul className = "socials" >
        <
        li >
        <
        a href = "https://www.facebook.com" > < FontAwesomeIcon icon = { faFacebook }
        /></a >
        <
        /li> <
        li >
        <
        a href = "https://www.twitter.com" > < FontAwesomeIcon icon = { faTwitter }
        /></a >
        <
        /li> <
        li >
        <
        a href = "https://www.google.com" > < FontAwesomeIcon icon = { faGoogle }
        /></a >
        <
        /li> <
        li >
        <
        a href = "https://www.youtube.com" > < FontAwesomeIcon icon = { faYoutube }
        /></a >
        <
        /li> <
        li >
        <
        a href = "https://www.linkedin.com" > < FontAwesomeIcon icon = { faLinkedin }
        /></a >
        <
        /li> <
        /ul> <
        /div> <
        div className = "footer-bottom" >
        <
        p > copyright @ 2023 Delicious Eats < /p> <
        /div> <
        /footer>
    );
}

export default Footer;