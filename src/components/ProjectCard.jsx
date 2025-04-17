import { Link } from "react-router-dom";
import { projects } from "../data/ProjectDetails";
import { animationtwo } from "../pages/Home";

function ProjectCard() {

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div data-aos={animationtwo} className="project" key={project.id}>
          <Link to={`/projects/${project.title}`} className="project-link">
            <img
              src={project.img}
              alt={project.title}
              className="project-img"
            />
            <p className="project-name">{project.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
