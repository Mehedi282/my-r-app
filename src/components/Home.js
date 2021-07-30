
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

function Home() {
   
    return (
        <div>
            <h1 id="itsblue">My Story</h1>
            <p>I'm Mehedi. Studying sofware engineering. I love web programing.</p>
            <h2>I Do Web Design & Developement since I was 18 Years Old</h2>
           <div id="smi">
           <a href="https://www.linkedin.com/in/mehedi-hassan-a05766217" 
            className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100025419526409"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/mehedi-hassan-a05766217"
            className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/mehedi-hassan-a05766217"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/mehedi-hassan-a05766217"
            className="linkedin social">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/mehedi-hassan-a05766217"
            className="github social">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
           </div>
        </div>
    )
}

export default Home;
