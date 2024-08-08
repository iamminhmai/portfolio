import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function HomePage(props) {
    const heroRef = props.heroRef;
    const aboutRef = props.aboutRef;
    const projectsRef = props.projectsRef;
    const contactRef = props.contactRef;

    return (
        <>
            <Hero heroRef={heroRef} />
            <About aboutRef={aboutRef} />
            <Projects projectsRef={projectsRef} />
            <Contact contactRef={contactRef} />
        </>
    );
};