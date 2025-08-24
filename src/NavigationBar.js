import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar bg="light" variant="light" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/"> 내앱 </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {/* <Nav.Link as */}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}
export default NavigationBar;