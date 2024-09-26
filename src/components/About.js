import { useState, useEffect } from "react";
import FrontendSkills from "./constants/FrontendIcons";
import BackendSkills from "./constants/BackendIcons";
import "../styles/about.css";

const WhoAmI = () => {
    return (
        <>
            <h3>Who Am I</h3>
            <div className="description-container">
                <p>
                    Hello! I'm Minh, a full-stack developer from Seattle with expertise in JavaScript, React, Next.js, and backend technologies like Node.js and Express.js. I'm currently pursuing a Master's degree in Information Management at the University of Washington, specializing in Information Architecture and Artificial Intelligence, which further enhances my experience in building robust web solutions.
                </p>
                <p>
                    Throughout my career, I've led projects that significantly improved user experiences and operational efficiencies across various sectors, including those enhancing web accessibility for the elderly and revitalizing community engagement for local nonprofits. Outside of coding or studying, you'll likely find me exploring Washington's stunning landscapes through hiking, playing tennis or pickleball with friends, or cozying up with Netflix on a rainy day.
                </p>
            </div>
        </>
    );
};

const MyStack = () => {
    return (
        <>
            <h3>My Stack</h3>
            <div className="stack-container">
                <FrontendSkills />
                <BackendSkills />
            </div>
        </>
    );
};

export default function About(props) {
    const aboutRef = props.aboutRef;
    const [isAnimated, setIsAnimated] = useState(false);
    const [slideRight, setSlideRight] = useState(false);
    const [hasSlideAnimated, setHasSlideAnimated] = useState(false);

    useEffect(() => {
        const sectionRef = aboutRef.current;
        if (!sectionRef) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && !hasSlideAnimated) {
                        setSlideRight(true);
                        setHasSlideAnimated(true);
                    }

                    if (entry.intersectionRatio >= 0.2) {
                        setIsAnimated(true);
                    } else {
                        setIsAnimated(false);
                    }

                });
            },
            { threshold: [0.2, 0.6] }
        );

        observer.observe(sectionRef);

        return () => {
            observer.disconnect();
        }
    });
    
    return (
        <section ref={aboutRef} id="about" className="about">
            <h2 className={`section-title ${isAnimated ? "animated" : "animated-out"}`}>About<span className="text-dot">.</span></h2>
            <div className="about-container">
                <div className={`about-container-mask ${slideRight ? "slide-to-right" : ""}`}></div>
                <WhoAmI />
                <MyStack />
            </div>
        </section>
    );
};
