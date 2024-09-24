import '../styles/projects.css';
import { useState, useEffect } from 'react';
import coming from "../assets/images/coming.jpg"
import retirement from "../assets/images/retirement.png"
import foodie from "../assets/images/foodie.jpg"
import studify from "../assets/images/studify.jpg"

const Description = () => {
    return (
        <p className="projects-description mb-5">These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions and live demos. They showcase my ability to tackle intricate challenges, adapt to various technologies, and efficiently oversee projects.</p>
    );
};

const ProjectCards = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const projects = [
        {
            id: 1,
            src: coming,
            alt: "Coming Soon",
            title: "Coming Soon...",
            description: "A new project will be launching soon!!",
            link: ""

        },
        {
            id: 2,
            src: retirement,
            alt: "Retirement Adequacy",
            title: "Retirement Adequacy",
            description: "Allow workers to access retirement estimates",
            link: "https://retirement-adequacy-test-c83be212b50e.herokuapp.com/"
        },
        {
            id: 3,
            src: foodie,
            alt: "Foodie Finder",
            title: "Foodie Finder",
            description: "Connect food lovers with quick, affordable meals",
            link: "https://foodiefinder.minh-mai.me/"
        },
        {
            id: 4,
            src: studify,
            alt: "Studify",
            title: "Studify",
            description: "Create study groups and enjoy a tailored experience",
            link: "https://studify-883c3.web.app/"
        },
    ];

    return (
            <>
            {projects.map((project, index) => (
                <div 
                    key={project.id}
                    className={`project-card ${activeIndex === index ? 'active' : 'inactive'}`} 
                    onClick={() => setActiveIndex(index)}  
                    style={{ 
                        width: activeIndex === index ? "350px" : "150px",
                        transition: 'width 0.3s ease-out',
     
                    }}
                >
                    {activeIndex === index && project.link && (
                        <div className="project-card-mask">
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <div className="project-card-link">
                                    <span className="fa-stack fa-2x">
                                        <i className="fa-solid fa-circle fa-stack-2x"></i>
                                        <i className="fa-solid fa-arrow-up-long fa-stack-1x fa-inverse"></i>
                                    </span>
                                </div>
                            </a>
                        </div>
                    )}
                    {activeIndex != index && (
                        <i className="fa-solid fa-left-right project-card-expand"></i>
                    )}
                    <div className="project-card-description">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                    <div className="project-card-image">
                        <img 
                            src={project.src} 
                            alt={project.alt} 
                            style={{ 
                                width: activeIndex === index ? "350px" : "150px",
                                transition: 'width 0.3s ease-out'
                             }} 
                        />
                    </div>
                </div>
            ))}
        </>
    );
};

export default function Projects(props) {
    const projectsRef = props.projectsRef;
    const [isAnimated, setIsAnimated] = useState(false);
    const [slideRight, setSlideRight] = useState(false);

    useEffect(() => {
        const sectionRef = projectsRef.current;
        if (!sectionRef) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio >= 0.2) {
                        setIsAnimated(true);
                        setSlideRight(true);

                    } else {
                        setIsAnimated(false);
                        setSlideRight(false);
                    }
                });
            },
            { threshold: [0.2, 0.6] }
        );

        observer.observe(sectionRef);

        return () => observer.disconnect();
    });
    return (
        <section ref={projectsRef} id="projects" className="projects">
            <h2 className={`section-title ${isAnimated ? 'animated' : 'animated-out'}`}>Projects<span className="text-dot">.</span></h2>
            <Description />
            <div className={`projects-container ${slideRight ? 'slide-right' : ''}`}>
                <ProjectCards />
            </div>
        </section>
    )
}