import React from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'

function Onscroll() {
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
          color1: 0x5f2d6,
          color2: 0x555555,
          birdSize: 0.90,
          wingSpan: 22.00,
          speedLimit: 3.00,
          separation: 39.00
        }))
        
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])
    return (
        <div ref={myRef} id="services">

           
                <h1 id="itsblue" data-aos="flip-right">
                Services
                </h1>
                <h2 data-aos="fade-right">
                The Services I'll Provide My Clients
                </h2 >
         
                <h2 data-aos="fade-right">
                I'm expert in Web Programming. I can do full stack web development for you.
                </h2>
                <br/>
                <br/>
                <br/>
                <br/>
           

        </div>
    )
}

export default Onscroll
