import { useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function HomePage(props) {
    const { heroRef, aboutRef, projectsRef, contactRef } = props;
    
    useEffect(() => {
        setTimeout(() => {
            const heroSection = document.getElementById("hero");
            if (heroSection) {
                window.scrollTo({ top: heroSection.offsetTop });
            }
        }, 100);
    });

    return (
        <>
            <Hero heroRef={heroRef} />
            <About aboutRef={aboutRef} />
            <Projects projectsRef={projectsRef} />
            <Contact contactRef={contactRef} />
        </>
    );
};