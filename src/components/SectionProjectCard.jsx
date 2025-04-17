import { Link } from "react-router-dom";
import { projects } from "../data/ProjectDetails";
import { animationtwo } from "../pages/Home";

function SectionProjectCard() {

  let sectionProjects = projects.slice(0, 3);

  return (
      <div className="projects-container">
        {sectionProjects.map((sectionProject) => (
          <div
            data-aos={animationtwo}
            className="project"
            key={sectionProject.id}
          >
            <Link
              to={`/projects/${sectionProject.title}`}
              className="project-link"
            >
              <img
                src={sectionProject.img}
                alt={sectionProject.title}
                className="project-img"
              />
              <p className="project-name">{sectionProject.title}</p>
            </Link>
          </div>
        ))}
      </div>
  );
}

export default SectionProjectCard;
