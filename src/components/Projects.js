import "../styles/projects.css";
import { useState, useEffect } from "react";
import { projectsData as PROJECTS_DATA }  from "./constants/ProjectsData";

const Description = (props) => {
    return (
        <p className={`projects-description ${props.fadeText ? "fade-text" : ""}`}>
            These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions and live demos. They showcase my ability to tackle intricate challenges, adapt to various technologies, and efficiently oversee projects.
        </p>
    );
};

const ProjectCards = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    
    return (
            <>
            {PROJECTS_DATA.map((project, index) => (
                <div 
                    key={project.id}
                    className={`project-card ${activeIndex === index ? "active" : "inactive"}`} 
                    onClick={() => setActiveIndex(index)}  
                >
                    {activeIndex === index && project.link && (
                        <div className="project-card-mask">
                            {project.role && (
                                <div className="project-card-role-container">
                                    {project.role.map((role, index) => (
                                        <div key={index} className="project-card-role">{role}</div>
                                    ))}
                                </div>
                            )}
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
                    {activeIndex !== index && (
                        <>
                            <i className="fa-solid fa-left-right project-card-expand"></i>
                            <i className="fa-solid fa-up-down project-card-expand"></i>
                        </>
                    )}
                    <div className="project-card-description">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                    <div className="project-card-image">
                        <img src={project.src} alt={project.alt}/>
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
    const [fadeText, setFadeText] = useState(false);

    useEffect(() => {
        const sectionRef = projectsRef.current;
        if (!sectionRef) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio >= 0.2) {
                        setIsAnimated(true);
                        setSlideRight(true);
                        setFadeText(true);

                    } else {
                        setIsAnimated(false);
                        setSlideRight(false);
                        setFadeText(false);
                    }
                });
            },
            { threshold: 0.2 }
        );

        observer.observe(sectionRef);

        return () => {
            observer.disconnect();
        }
    });
    return (
        <section ref={projectsRef} id="projects" className="projects">
            <h2 className={`section-title ${isAnimated ? "animated" : "animated-out"}`}>Projects<span className="text-dot">.</span></h2>
            <Description fadeText={fadeText} />
            <div className={`projects-container ${slideRight ? "slide-right" : "slide-left"}`}>
                <ProjectCards />
            </div>
        </section>
    );
};