import { Navbar, Nav } from 'react-bootstrap';
import "./navbar.css"
function MyNavbar() {
  return (
    <Navbar bg="white" variant="light" expand="lg">
      <Navbar.Brand href="#">My Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end">
          <Nav.Link style={{ textDecoration: 'none', outline:'none' }} href="#">Portfolio</Nav.Link>
          <Nav.Link style={{ textDecoration: 'none', outline:'none' }} href="#">About</Nav.Link>
          <Nav.Link style={{ textDecoration: 'none', outline:'none' }} href="#">Resume</Nav.Link>
          <Nav.Link style={{ textDecoration: 'none', outline:'none' }} href="#">Contact</Nav.Link>
          <Nav.Link style={{ textDecoration: 'none', outline:'none' }} href="#">Github</Nav.Link>
          <Nav.Link style={{ textDecoration: 'none', outline:'none' }} href="#">Linkedin</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default MyNavbar