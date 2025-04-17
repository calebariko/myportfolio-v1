import "../assets/css/Projects.css"
import Button from "../components/Button"
import SectionProjectCard from "../components/SectionProjectCard"

function Projects () {
  return (
    <section className="projects max-container" id="projects">
        <h2 className="projects-header section-header">my projects</h2>

        <SectionProjectCard />

        <Button label="see more &rarr;" clickPath="/projects" />
    </section>
  )
}

export default Projects