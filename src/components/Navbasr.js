import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import logo from '../images/logo.png'


function Navbasr() {
    return (
    <Navbar id="nabvar" collapseOnSelect expand="lg">
        <Container id="navc">
        <Navbar.Brand id="brand" href="#about"><img style={{height:'60px', width:'60px'}} src={logo}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link id="nlink" href="#carousel">Home</Nav.Link>
            <Nav.Link id="nlink" href="#about" >About</Nav.Link>
            <Nav.Link id="nlink" href="#services">Services</Nav.Link>
            <Nav.Link id="nlink" href="#mywork">Portfolio</Nav.Link>
            <Nav.Link id="nlink" href="#pricing">Pricing</Nav.Link>
          </Nav>
          {/* <Button id="btn" href="#">Hire me </Button> */}
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Navbasr;
