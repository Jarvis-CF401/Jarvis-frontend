import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { ReactComponent as Logo } from '../assets/logo.svg'; // Import your logo SVG
import '../styles/Navbar.css'; // Import custom CSS for styling

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      variant="dark"
      bg="dark"
      expand="lg"
      className="custom-navbar"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="#home">
          <Logo className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbar-dark-example"
          onClick={handleNavbarToggle}
        />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="nav-dropdown-dark-example">
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
