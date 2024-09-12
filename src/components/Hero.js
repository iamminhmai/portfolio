import { useEffect } from 'react';
import '../styles/hero.css';

export default function Hero(props) {
    const heroRef = props.heroRef;

    useEffect(() => {
        const h1 = document.querySelector(".hero h1");
        h1.style.width = "max-content";
        const contentWidth = h1.offsetWidth; // Get the content width
        h1.style.width = "0"; // Reset width for animation

        // Start the animation with JavaScript by setting the width
        setTimeout(() => {
            h1.style.width = `${contentWidth}px`; // Set width to start the animation
        }, 2800); // Delay to simulate the original delay
    }, []);

    return (
        <section ref={heroRef} id="hero" className="hero">
            <div className="hero-title-container">
                <h1>Hi, I am <strong>Minh Mai</strong><span className="text-dot">.</span></h1>
                <p>Full Stack Developer</p>
            </div>
            <div className="hero-button-container">
                <a className="hero-button resume-button" href={`${process.env.PUBLIC_URL}/minh-resume.pdf`} target="_blank" rel="noopener noreferrer">
                    <span className="button-text">
                        <span className="view-text">View</span>Resume
                        <i className="fa-solid fa-arrow-up"></i>
                    </span>
                </a>
                <a className="hero-button blog-button" href="https://medium.com/@minhmai2304" target="_blank" rel="noopener noreferrer">
                    <span className="button-text">
                        <span className="view-text">View</span>Blog
                        <i className="fa-solid fa-arrow-up"></i>
                    </span>
                </a>
            </div>
            <div className="scroll-container">
                <span className="scroll-text">
                    <span>S</span>
                    <span>c</span>
                    <span>r</span>
                    <span>o</span>
                    <span>l</span>
                    <span>l</span>
                </span>
                <span className="scroll-icon">
                    <span className="scroll-icon-dot"></span>
                </span>
            </div>
        </section>
    );
};