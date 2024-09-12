import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SocialMedia from './svg-icons/SocialMedia';
import logo from '../assets/files/logo.png';
import '../styles/navbar.css';

export default function NavBar({ refs }) {
    const { heroRef, aboutRef, projectsRef, contactRef } = refs;

    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavLinkClick = (event, ref) => {
        event.preventDefault();
        setIsExpanded(false);
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleToggle = (expanded) => {
        setIsExpanded(expanded);
    };

    const handleOverlayClick = () => {
        setIsExpanded(false);
    }

    useEffect(() => {
        if (isExpanded) {
            document.body.style.overflowY = 'hidden'; 
            document.querySelector('main').classList.add("blurred-content");
            document.querySelector('footer').classList.add("blurred-content");
            document.querySelector('.navbar').classList.add('navbar-expanded');
        } else {
            document.body.style.overflowY = 'auto'; 
            document.querySelector('main').classList.remove("blurred-content");
            document.querySelector('footer').classList.remove("blurred-content");
            document.querySelector('.navbar').classList.remove('navbar-expanded');
        }
    }, [isExpanded]);

    return (
        <Navbar expand="sm" className="navbar" fixed="top" expanded={isExpanded} onToggle={handleToggle}>
            {isExpanded && <div className="overlay" onClick={handleOverlayClick}></div>}
            <Container fluid>
                <NavLink to="#hero" onClick={(e) => handleNavLinkClick(e, heroRef)}>
                    <Navbar.Brand>
                        <img alt="Logo" src={logo} className="logo"/>
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle className="hamburger-menu" aria-controls="primary-nav" aria-expanded={isExpanded} >
                    <svg className="hamburger" viewBox="-10 -10 120 120" width="50px" fill="none" stroke="var(--text-color">
                        <path 
                            className="line"
                            strokeWidth="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70">
                        </path>
                    </svg>
                </Navbar.Toggle>
                <Navbar.Collapse id="primary-nav" className="justify-content-end">
                    <Nav className="nav-links" aria-expanded={isExpanded}>
                        <NavLink to="#about" onClick={(e) => handleNavLinkClick(e, aboutRef)} className="nav-link">About</NavLink>
                        <NavLink to="#projects" onClick={(e) => handleNavLinkClick(e, projectsRef)} className="nav-link">Projects</NavLink>
                        <NavLink to="#contact" onClick={(e) => handleNavLinkClick(e, contactRef)} className="nav-link">Contact</NavLink>
                        <SocialMedia instagramGradient="instagram-gradient-1" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};