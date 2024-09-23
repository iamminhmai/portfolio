import '../styles/projects.css';
import { useState } from 'react';
import foodie from "../assets/imgs/foodie.jpg"
import retirement from "../assets/imgs/retirement.png"
import coming from "../assets/imgs/coming.jpg"
import studify from "../assets/imgs/studify.jpg"

const Description = () => {
    return (
        <>
            <h2>Projects<span className="text-dot">.</span></h2>
            <p className="projects-description mb-5">These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions. They showcase my ability to tackle intricate challenges, adapt to various technologies, and efficiently oversee projects.</p>
        </>
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
            link: "/"

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
        <div className="projects-container">
            {projects.map((project, index) => (
                <div 
                    key={project.id}
                    className={`project-card ${activeIndex === index ? 'active' : 'inactive'}`} 
                    onClick={() => setActiveIndex(index)}  
                    style={{ 
                        width: activeIndex === index ? "350px" : "150px",
                        transition: 'width 0.3s ease-out'
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
        </div>
    )
}

export default function Projects(props) {
    const projectsRef = props.projectsRef;
    return (
        <section ref={projectsRef} id="projects" className="projects">
            <Description />
            <ProjectCards />
        </section>
    )
}