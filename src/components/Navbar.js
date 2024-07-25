import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navbar.css';
import logo from '../assets/img/logo.png';

export default function NavBar() {
    return (
        <Navbar expand="md" className="navbar fade-to-gray" fixed="top">
            <Container fluid>
                <Navbar.Brand href="#hero" className="slide-in-top"><img alt="Minh's logo" src={logo} className="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="nav-links">
                        <Nav.Link href="#about" className="slide-in-top-1">About Me</Nav.Link>
                        <Nav.Link href="#projects" className="slide-in-top-2">Projects</Nav.Link>
                        <Nav.Link href="#contact" className="slide-in-top-3">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}