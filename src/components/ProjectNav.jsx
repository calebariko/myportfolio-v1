import { useParams, Link } from "react-router-dom";
import { projects } from "../data/ProjectDetails";

function ProjectNav() {
  const { title } = useParams();
  const currentIndex = projects.findIndex((project) => project.title === title);

  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  return (
    <div className="accent-box">
      {prevProject && (
        <Link to={`/projects/${prevProject.title}`} className="prevProject">
          &larr; prev
        </Link>
      )}

      <div className=""></div>

      {nextProject && (
        <Link to={`/projects/${nextProject.title}`} className="nextProject">
          next &rarr;
        </Link>
      )}
    </div>
  );
}

export default ProjectNav;
