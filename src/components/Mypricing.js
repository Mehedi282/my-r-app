import { CardGroup, Card, Button } from 'react-bootstrap'

function Mypricing() {
  return (
    <div id="pricing">
      <br /><br /><br /><br />
      <h3 id="itsblue" data-aos="zoom-out-down"> My Pricing</h3>
      <h1 data-aos="zoom-out-down">Pricing & Packages</h1>

      <CardGroup>
        <Card data-aos="fade-right" id="card">
          <Card.Body>
            <h3 id="itsblue">Basic plane</h3>
            <p id="price">10$</p>
            <Card.Title>Frontend Development</Card.Title>
            <Card.Text>
              <p>I can develop the front part of your website in react js.
                React is a JavaScript library for building user interfaces.
              </p>
              <br />
              <Button href="https://www.fiverr.com/mehedi132435?up_rollout=true" variant="dark" >Get Started</Button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card data-aos="flip-right" id="card">
          <Card.Body>
            <h3 id="itsblue">Beginer Plan</h3>
            <p id="price">50$</p>
            <Card.Title>Backend Development</Card.Title>
            <Card.Text>
              <p> Backend engineering is the storing prosses of data.
                I can handle that using nodejs, java or python(django)</p>{' '}
              <br />
              <Button href="https://www.fiverr.com/mehedi132435?up_rollout=true" variant="dark" >Get Started</Button>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card data-aos="fade-left" id="card">
          <Card.Body>
            <h3 id="itsblue">Premium plan</h3>
            <p id="price">100$</p>
            <Card.Title>Fullstack Developement</Card.Title>
            <Card.Text>
              <p>It means the master of all web programing. I can do all of them.</p>  <br />
              <Button href="https://www.fiverr.com/mehedi132435?up_rollout=true" variant="dark" >Get Started</Button>
            </Card.Text>
          </Card.Body>

        </Card>
      </CardGroup>

    </div>
  )
}

export default Mypricing
