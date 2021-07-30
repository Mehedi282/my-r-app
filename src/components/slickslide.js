import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBootstrap,
    faCss3Alt,
    faFirefox,
    faHtml5,
    faJava,
    faNodeJs,
    faPython,
    faReact,
   
  } from "@fortawesome/free-brands-svg-icons";



export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 3,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 0,
      cssEase: "linear"
    };
    return (
      <div >
        <Slider {...settings}>
          <div id="slickslide">
          <p id="icon"><FontAwesomeIcon icon={faHtml5} size="5x" /></p>
          </div >
          <div id="slickslide">
          <p id="iconc"><FontAwesomeIcon icon={faCss3Alt} size="5x" /></p>
          </div>
          <div id="slickslide">
          <p id="iconr"><FontAwesomeIcon icon={faReact} size="5x" /></p>
          </div>
          <div id="slickslide">
          <p id="iconb"><FontAwesomeIcon icon={faBootstrap} size="5x" /></p>
          </div>
          <div id="slickslide">
          <p id="iconj"><FontAwesomeIcon icon={faJava} size="5x" /></p>
          </div>
          <div id="slickslide">
          <p id="iconn"><FontAwesomeIcon icon={faNodeJs} size="5x" /></p>
          </div>
          <div id="slickslide">
          <p id="iconp"><FontAwesomeIcon icon={faPython} size="5x" /></p>
          </div>
          <div id="slickslide">
          <p id="iconf"><FontAwesomeIcon icon={faFirefox} size="5x" /></p>
          </div>
        </Slider>
      </div>
    );
  }
}