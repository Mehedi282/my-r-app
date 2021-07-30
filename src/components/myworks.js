import { Container, Row, Col, Image } from 'react-bootstrap'
import img1 from '../images/mw1.jpg'
import img2 from '../images/mw2.jpg'
import img3 from '../images/mw3.jpg'
import img4 from '../images/mw4.jpg'
import img5 from '../images/mw5.jpg'
import img6 from '../images/mw6.jpg'
import 'aos/dist/aos.css';
import Aos from 'aos';
import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'

function Myworks() {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x0,
        color1: 0x8ffc4,
        color2: 0xfffe00
      }))

    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  Aos.init({ duration: 3000 })
  return (
    <Container id="mywork" ref={myRef}>
      <h1 id="itsblue" data-aos="zoom-in-down" >Portfolio</h1>
      <h3 data-aos="zoom-in-down">My recent works</h3>
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col id="container">
          <Image data-aos="fade-right" src={img1} id="pimg" thumbnail />
          <div id="overlayp">
            <div id="textp">
              <h1>A portfolio website</h1>
              <a href="#">Visit the site</a>
            </div>

          </div>
        </Col>
        <Col id="container">
          <Image data-aos="fade-left" src={img2} id="pimgl" thumbnail />
          <div id="overlayp">
            <div id="textp">
              <h1>A portfolio website</h1>
              <a href="#">Visit the site</a>
            </div>

          </div>
        </Col>
      </Row><br />
      <Row>
        <Col id="container">
          <Image data-aos="fade-right" src={img3} id="pimgl" thumbnail />
          <div id="overlayp">
            <div id="textp">
              <h1>A portfolio website</h1>
              <a href="#">Visit the site</a>
            </div>

          </div>
        </Col>
        <Col id="container">
          <Image data-aos="fade-left" src={img4} id="pimg" thumbnail />
          <div id="overlayp">
            <div id="textp">
              <h1>A portfolio website</h1>
              <a href="#">Visit the site</a>
            </div>

          </div>
        </Col>
      </Row><br />
      <Row>
        <Col id="container">
          <Image data-aos="fade-right" src={img5} id="pimg" thumbnail />
          <div id="overlayp">
            <div id="textp">
              <h1>A portfolio website</h1>
              <a href="#">Visit the site</a>
            </div>

          </div>
        </Col>
        <Col id="container">
          <Image data-aos="fade-left" src={img6} id="pimgl" thumbnail />
          <div id="overlayp">
            <div id="textp">
              <h1>A portfolio website</h1>
              <a href="#">Visit the site</a>
            </div>

          </div>
        </Col>
      </Row>
    </Container>


  )
}

export default Myworks;
