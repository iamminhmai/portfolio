// import Button from 'react-bootstrap/Button';
import '../styles/hero.css';

export default function Hero() {
    const openResume = () => {
        window.open("https://drive.google.com/file/d/1Lh5ctVd1ABZjl8EZBb_NB4yd2tp_UWY4/view?usp=sharing", "_blank");
    };

    return (
        <section id="hero" className="hero fade-in">
            <h1>Hi, I am <strong>Minh Mai</strong><span className="dot">.</span></h1>
            <p>Frontend Developer based in Seattle, WA</p>
            <div className="button-container">
                <button className="resume-button" onClick={openResume}>
                    <span>View Resume</span>
                </button>
                <button className="blog-button">
                    <span>View Blog</span>
                </button>
            </div>
        </section>
    )
}