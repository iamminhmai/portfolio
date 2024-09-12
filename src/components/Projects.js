import '../styles/projects.css';

export default function Projects(props) {
    const projectsRef = props.projectsRef;
    return (
        <section ref={projectsRef} id="projects" className="projects">
            <h2>Projects<span className="text-dot">.</span></h2>
            
            <p>These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions and link to live demos. They showcase my ability to tackle intricate challenges, adapt to various technologies, and efficiently oversee projects.</p>

            <p>Sed velit lacus, congue at dapibus sed, bibendum eu justo. Nunc tincidunt viverra ipsum, sit amet rutrum dolor vehicula sit amet. Etiam ac tempor sapien, quis suscipit velit. Praesent a elementum nisl. Donec sem orci, faucibus vel massa et, accumsan molestie tortor. Aliquam quis odio nec leo consectetur sollicitudin eu non ipsum. Nam tristique massa lorem, sit amet faucibus mauris placerat sit amet. Donec viverra consequat elit, quis molestie nulla venenatis sit amet. Nullam nec diam vitae ex molestie viverra eget nec diam. Fusce eu neque in justo mattis suscipit. Vivamus magna tortor, commodo vel nulla sit amet, eleifend sollicitudin erat. Fusce eu sapien erat. Aenean a dolor ut lacus mollis venenatis. Suspendisse ut consequat neque. Proin eu turpis vel turpis sodales ultricies. Nam quam lacus, tincidunt non tempor vitae, euismod et lectus.</p>

            <p>Proin viverra tellus dolor, nec condimentum quam pretium at. Sed pellentesque sagittis venenatis. Ut efficitur nunc nisl, vitae tempor ante suscipit nec. Praesent fermentum felis vitae ipsum varius bibendum. Maecenas fermentum volutpat rutrum. Etiam congue efficitur augue, ac rutrum est scelerisque non. Mauris volutpat ullamcorper ex. Mauris velit libero, blandit a congue eu, aliquet vitae arcu. Nulla ac feugiat ante. In euismod nulla ex, non dapibus quam gravida in. Phasellus in leo vel eros pharetra facilisis. Pellentesque varius mollis risus ac molestie. Ut vulputate maximus ligula. Etiam ultricies interdum magna efficitur molestie.</p>
        </section>
    )
}