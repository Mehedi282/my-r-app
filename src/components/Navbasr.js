import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container} from 'react-bootstrap'
import {Button} from 'react-bootstrap'


function Navbasr() {
    return (
    <Navbar id="nabvar" collapseOnSelect expand="sm">
        <Container id="navc">
        <Navbar.Brand id="brand" href="#about">Mehedi</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link id="nlink" href="#carousel">Home</Nav.Link>
            <Nav.Link id="nlink" href="#about" >About</Nav.Link>
            <Nav.Link id="nlink" href="#services">Services</Nav.Link>
            <Nav.Link id="nlink" href="#mywork">Portfolio</Nav.Link>
            <Nav.Link id="nlink" href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button id="btn" href="#">Hire me </Button>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Navbasr;
