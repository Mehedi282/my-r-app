
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
import CenterMode from "./slickslide";

function Home() {

    return (
        <div>
            <h1 id="itsblue">My Story</h1>
            <div style={{ textAlign: 'left', marginRight: '20px', marginLeft:'20px' }}>
                <p>
                    Hello, I'm Mehedi Hassan, a passionate software developer with a love for creating innovative solutions that make a difference. My journey into software development began when i was 18, and since then, I've been on an exciting path of learning and growth.
                </p>
                <p>
                    With a background of Bsc in Software Engineering, I've honed my skills in Data Structure and Algorithm as well as Programing languages and Frameworks. Throughout my career, I've had the opportunity to work on a variety of projects.

                    What drives me in my work is my passion for creating intuitive user experiences, solving complex problems, commitment to accessibility, collaboration etc.
  
                </p>
                <p>
                Thank you for taking the time to learn a bit about my story.
                </p>
            </div>
            {/* <div id="smi">
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
            </div> */}

            <CenterMode />
        </div>
    )
}

export default Home;
