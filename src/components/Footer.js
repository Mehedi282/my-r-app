import { Card,Button, CardGroup } from 'react-bootstrap'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faGithub
} from "@fortawesome/free-brands-svg-icons";


function Footer() {


    return (
        <CardGroup >
            <Card data-aos="fade-up-right" id="footer" >
                <Card.Body id="cmebody">
                    <Card.Title id="itsblue">Mehedi Hassan</Card.Title>
                    <Card.Text>
                        <h6>Gmail: mehedi132435@gmail.com</h6>
                        <p>Phone: 01874360249</p>
                        <p>1720 Adi-jangalia Gazipur Dhaka Bangladesh</p>
                        <a href="https://www.linkedin.com/in/mehedi-hassan-a05766217"
                            className="youtube social">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100025419526409"
                            className="facebook social">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://www.linkedin.com/in/mehedi-hassan-a05766217"
                            className="twitter social">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a href="https://www.linkedin.com/in/mehedi-hassan-a05766217"
                            className="instagram social">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                    </Card.Text>
                </Card.Body>

            </Card>
            <Card data-aos="fade-up" id="footer">
                <Card.Body id="cmebodym">
                    <Card.Title id="itsblue">Services</Card.Title>
                    <Card.Text>
                        
                            <i id="ser">Web Development</i><br/>
                            <i id="ser">Frontend Development</i><br/>
                            <i id="ser">Backend Development</i><br/>
                            <i id="ser">Fullstack Development</i>
                        
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">This react app is developed by <b><i>Mehedi Hassan</i></b></small>
                </Card.Footer>
            </Card>
            <Card data-aos="fade-up-left" id="footer">
                <Card.Body id="cmebody">
                    <Card.Title id="itsblue">Hire me</Card.Title>
                    <Card.Text>
                       Do you have any work to done by me??
                       <Button id="conbtn" href="https://www.fiverr.com/mehedi132435?up_rollout=true" variant="light" >Contact me now!!</Button>
                    </Card.Text>
                </Card.Body>

            </Card>
        </CardGroup>
    )
}

export default Footer
