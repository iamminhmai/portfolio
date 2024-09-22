import '../styles/projects.css';
import foodie from "../assets/imgs/foodie.jpg"
import retirement from "../assets/imgs/retirement.jpg"
import launching from "../assets/imgs/coming-soon2.jpg"
import studify from "../assets/imgs/studify.jpg"

export default function Projects(props) {
    const projectsRef = props.projectsRef;
    return (
        <section ref={projectsRef} id="projects" className="projects">
            <h2>Projects<span className="text-dot">.</span></h2>
            
            <p className="projects-description mb-5">These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions. They showcase my ability to tackle intricate challenges, adapt to various technologies, and efficiently oversee projects.</p>

            <div className="projects-container">
                <div className="project-card inactive">
                    <div className="project-card-description">
                        <h3>Coming Soon...</h3>
                        <p>New project coming soon. Here is what I have so far</p>
                    </div>
                    <div className="project-card-image">
                        <img src={launching} alt="Coming Soon"></img>
                    </div>
                </div>
                <div className="project-card test" style={{width:"350px"}}>
                    <div className="project-card-mask">
                        <a href="https://retirement-adequacy-test-c83be212b50e.herokuapp.com/" target="_blank" rel="noreferrer">
                            <div className="project-card-arrow">
                                <span className="fa-stack fa-2x">
                                    <i className="fa-solid fa-circle fa-stack-2x"></i>
                                    <i className="fa-solid fa-arrow-up-long fa-stack-1x fa-inverse"></i>
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="project-card-description">
                        <h3>Retirement Adequacy</h3>
                        <p>Allow workers to access retirement estimates</p>
                    </div>
                    <div className="project-card-image">
                        <img src={retirement} alt="Retirement Adequacy" style={{width:"350px"}}></img>
                    </div>
                </div>
                <div className="project-card inactive">
                    <div className="project-card-description">
                        <h3>Foodie Finder</h3>
                        <p>An app connecting food enthusiasts with quick, affordable meals</p>
                    </div>
                    <div className="project-card-image">
                        <img src={foodie} alt="Foodie Finder" className="project-card-image"></img>
                    </div>
                </div>
                <div className="project-card inactive">
                    <div className="project-card-description">
                        <h3>Studify</h3>
                        <p>An app connecting food enthusiasts with quick, affordable meals</p>
                    </div>
                    <div className="project-card-image">
                        <img src={studify} alt="Studify"></img>
                    </div>
                </div>
            </div>

        </section>
    )
}