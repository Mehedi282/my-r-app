import { Container, Row, Col, Image } from 'react-bootstrap'
import img1 from '../images/Screenshot 2024-04-14 215332.png'
import img2 from '../images/fapp.png'
import img3 from '../images/Social_app.png'
import img4 from '../images/Screenshot 2024-04-14 200157.png'
import img5 from '../images/images.png'
import img6 from '../images/hospital-management-system.jpg'
import 'aos/dist/aos.css';
import Aos from 'aos';
import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'

function Myworks() {
  Aos.init({ duration: 3000 })
  return (
    <Container id="mywork">
      <h1 id="itsblue" data-aos="zoom-in-down" >Portfolio</h1>
      <h3 data-aos="zoom-in-down" style={{ marginBottom: '30px' }}>My recent works</h3>

      <Row className='card-row'>
        <Col id="container">
          <Image data-aos="fade-right" src={img1} id="pimg" thumbnail />
          <div id="overlayp">
            <div id="textp">
              <h1>A Jobportal website</h1>
              <p>I have used React js, React bootstrap for frontend </p>
              <p>Express js was used to create RestFull apis whcich is a Node js library </p>
              <a href="https://www.workcrew.ai/">Visit the site</a>
            </div>

          </div>
        </Col>
        <Col id="container">
          <Image data-aos="fade-left" src={img2} id="pimgl" thumbnail />
          <div id="overlayp">
            <div id="textp">
              <h1>A food delivery mobile applicaion developed in React native</h1>
              <a href="https://github.com/Mehedi282/react-native-foodDelivery-app">Visit the site</a>
            </div>

          </div>
        </Col>
      </Row><br />
      <Row  className='card-row'>
        <Col id="container">
          <Image data-aos="fade-right" src={img3} id="pimgl" thumbnail />
          <div id="overlayp">
            <div id="textp">
              <h4>A social media platform called Today.</h4>
             <p> User can Post today's activities to make Today memorable and view others. Fetching posts
               according to specific date is possible. Other features such as like comment available</p>
            <p>Frontend:Next.Js (version 14), Redux Toolkit, Tailwind, TypeScript </p>
            <p>Backend:Nest.Js,TypeScript, Jwt Authentication </p>
            <p>Database: Mysql </p>
              <a href="https://github.com/Mehedi282/Nextjs-reduxToolkit-tailwind-typeScript-jwtAuthguird-SocialApp/tree/master">Visit the site</a>
            </div>

          </div>
        </Col>
        <Col id="container">
          <Image data-aos="fade-left" src={img4} id="pimg" thumbnail />
          <div id="overlayp">
            <div id="textp">
            <p>Backend:Nest.Js,TypeScript, Jwt Authentication </p>
            <p>Database: Mysql </p>
              <a href="https://github.com/Mehedi282/Nextjs-reduxToolkit-tailwind-typeScript-jwtAuthguird-SocialApp/tree/master">Visit the site</a>
            </div>

          </div>
        </Col>
      </Row><br />
      <Row  className='card-row'>
        <Col id="container">
          <Image data-aos="fade-right" src={img5} id="pimg" thumbnail />
          <div id="overlayp">
            <div id="textp">
              <h1>A vaccination management system</h1>
              <h4>It is a MERNstack web application.</h4>
              <a href="https://github.com/Mehedi282/Vaccination-system-react">Visit the site</a>
            </div>

          </div>
        </Col>
        <Col id="container">
          <Image data-aos="fade-left" src={img6} id="pimgl" thumbnail />
          <div id="overlayp">
            <div id="textp">
              <h5>Hostpital management system</h5>
              <h3>A MERNstack applicaion</h3>
              <a href="https://github.com/Mehedi282/hospital-management">Visit the site</a>
            </div>

          </div>
        </Col>
      </Row>
    </Container>


  )
}

export default Myworks;
