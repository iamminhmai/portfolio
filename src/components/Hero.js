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
        }, 2800); // Delay to simulate your original delay
    }, []);

    const openResume = () => {
        window.open("https://drive.google.com/file/d/1Lh5ctVd1ABZjl8EZBb_NB4yd2tp_UWY4/view?usp=sharing", "_blank");
        // window.open("/resume.pdf", "_blank");
    };

    return (
        <section ref={heroRef} id="hero" className="hero">
            <div className="hero-title-container">
                <h1>Hi, I am <strong>Minh Mai</strong><span className="text-dot">.</span></h1>
                <p>Full Stack Developer</p>
            </div>
            <div className="hero-button-container">
                <button className="resume-button" onClick={openResume}>
                    <span>View Resume<i className="fa-solid fa-arrow-up"></i></span>
                </button>
                <button className="blog-button">
                    <span>View Blog<i className="fa-solid fa-arrow-up"></i></span>
                </button>
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