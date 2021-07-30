import {CardGroup,Card,Button} from 'react-bootstrap'
import cardimg1 from '../images/cardimg1.jpg'
import cardimg2 from '../images/cardimg2.jpg'
import cardimg3 from '../images/cardimg3.jpg'
import 'aos/dist/aos.css';
import Aos from 'aos';

function Card2() {
    return (
        <CardGroup>
  <Card  id="card">
    <Card.Img data-aos="fade-right" variant="top" src={cardimg1} id="cimg" />
    <Card.Body>
      <Card.Title id="itsblue">Frontend Development</Card.Title>
      <Card.Text>
    <p>I can develop the front part of your website in react js. 
    React is a JavaScript library for building user interfaces. 
    React is used to build single page applications.</p>
    <br/>
    <Button href="#" variant="dark" >For more..</Button>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card  id="card">
    <Card.Img data-aos="flip-right" variant="top" src={cardimg2} id="cimg"/>
    <Card.Body>
      <Card.Title id="itsblue"> Backend Development</Card.Title>
      <Card.Text>
     <p> Backend engineering is the storing prosses of data. 
         I can handle that using nodejs, java or python(django)</p>{' '}
         <br/>
    <Button href="#" variant="dark" >For more..</Button>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card  id="card">
    <Card.Img data-aos="fade-left" variant="top" src={cardimg3} id="cimg"/>
    <Card.Body>
      <Card.Title id="itsblue">Fullstack Developement</Card.Title>
      <Card.Text>
       <p>It means the master of all web programing. I can do all of them.</p>  <br/>
    <Button href="#" variant="dark" >For more..</Button>
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>
    )
}

export default Card2
