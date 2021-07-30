import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import i2 from '../images/i2.JPG'
import i3 from '../images/i3.JPG'
import Navbasr from './Navbasr';
import Textanime from './Textanimation';
import ReactTypical from './ReactTypical';




function Carousell() {
 
  return (
    <Carousel id="carousel" fade={true} controls={false}  >
      <Carousel.Item interval="5000">
        <img
          className="d-block w-100"
          src={i3}
          alt="First slide"
        />
        <Carousel.Caption id="caption" >
          <Navbasr />
          <div id="wd">
            <div id="carucap">
              <h1><Textanime /></h1>
              <ReactTypical />
              <p id="p">Born to be Creative</p>
            </div>
            <div id="social">
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carousell
