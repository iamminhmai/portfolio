import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navbar.css';
import logo from '../assets/img/logo.png';
import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const heroRef = props.heroRef;
    const aboutRef = props.aboutRef;
    const projectsRef = props.projectsRef;
    const contactRef = props.contactRef;

    const handleNavLinkClick = (event, ref) => {
        event.preventDefault(); // Prevent the default anchor behavior
        setIsExpanded(false);  // Collapse the navbar in mobile view if expanded
        ref.current?.scrollIntoView({ behavior: 'smooth' });
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
                <Navbar.Toggle 
                    className="hamburger-menu" 
                    aria-controls="primary-nav"
                    aria-expanded={isExpanded} 
                >
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
     
                        <div className="social-media">
                            <a href="https://github.com/iamminhmai" aria-label="GitHub" target="_blank" rel="noreferrer">
                                <svg viewBox="0 0 128 128" className="github-icon" fill="#0F1B61" height="25px" width="25px">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                                </svg>   
                            </a>
                            <a href="https://www.linkedin.com/in/iamminhmai/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                                <svg viewBox="-2 -2 24 24" className="linkedin-icon" fill="#0F1B61" height="25px" width="25px">
                                    <path d='M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z' />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/iamminhmai/" aria-label="Instagram" target="_blank" rel="noreferrer">
                        <svg viewBox="0 0 24 24" className="instagram-icon" fill="#0F1B61" height="25px" width="25px">
                            <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{stopColor:"#833AB4", stopOpacity:"1"}} />
                                <stop offset="20%" style={{stopColor:"#FD1D1D", stopOpacity:"1"}} />
                                <stop offset="40%" style={{stopColor:"#F56040", stopOpacity:"1"}} />
                                <stop offset="60%" style={{stopColor:"#F77737", stopOpacity:"1"}} />
                                <stop offset="80%" style={{stopColor:"#FCAF45", stopOpacity:"1"}} />
                                <stop offset="100%" style={{stopColor:"#FFDC80", stopOpacity:"1"}} />
                            </linearGradient>
                            <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"/>
                        </svg>
                    </a>
                            <a href="https://www.facebook.com/profile.php?id=100013694012399" aria-label="Facebook" target="_blank" rel="noreferrer">
                                <svg viewBox="0 0 16 16" className="facebook-icon" fill="#0F1B61" height="25px" width="25px">
                                    <path d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"/><path fill="none" d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"/>
                                </svg>
                            </a>
                            <a href="mailto:minhmai2304@gmail.com" aria-label="Email Minh Mai">
                                <svg viewBox="0 0 24 24" className="email-icon" fill="#0F1B61" height="25px" width="25px">
                                    <path fillRule="evenodd" d="M19,4 C20.6568542,4 22,5.34314575 22,7 L22,17 C22,18.6568542 20.6568542,20 19,20 L5,20 C3.34314575,20 2,18.6568542 2,17 L2,7 C2,5.34314575 3.34314575,4 5,4 L19,4 Z M20,7.328 L12.6585046,13.7525767 C12.3128975,14.054983 11.8110564,14.0801835 11.4394103,13.8281783 L11.3414954,13.7525767 L4,7.329 L4,17 C4,17.5522847 4.44771525,18 5,18 L19,18 C19.5522847,18 20,17.5522847 20,17 L20,7.328 Z M18.48,6 L5.518,6 L12,11.6712318 L18.48,6 Z"/>
                                </svg>
                            </a>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}