import React from 'react'
import {Accordion} from 'react-bootstrap'

function Contact() {
    return (
        <div>
            <div id="ss">
                <h2 id="itsblue">Senior Web Debeloper</h2>
                <h5>Fiver.com</h5>
                <h6>2019-2021</h6>
            </div>
            <div id="accordn">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h6>Full Stack</h6></Accordion.Header>
                        <Accordion.Body>
                         <p id="acc">Full stack web developer responsibe for end to end web app development and 
                             creative cloud Engineering.
                         </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <br/>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>New product</Accordion.Header>
                        <Accordion.Body>
                        <p id="acc">Ptototyped an avarage of 25 new product feater per year.
                         </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <br/>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Bosting</Accordion.Header>
                        <Accordion.Body>
                        <p id="acc">Bosted user esperience scores by 55% over company-wide previous best.
                         </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>
        </div>
    )
}

export default Contact
