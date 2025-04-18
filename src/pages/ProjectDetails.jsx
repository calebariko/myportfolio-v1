import { useParams } from "react-router-dom";
import { projects } from "../data/ProjectDetails";
import "../assets/css/ProjectDetails.css";
import ProjectNav from "../components/ProjectNav";
import useDocTitle from "../hooks/useDocTitle";


const ProjectDetails = () => {
  useDocTitle("Caleb Ariko | Project Details");

  let titleParam = useParams().title;
  let titleMatch = projects.find((project) => project.title === titleParam);

  let { title, desc, url, gurl, roles, techs, img } = titleMatch;

  return (
    <>
      <section className="project-details max-container">
        <div className="details">
          <h2 className="title section-header">{title}</h2>
          <img src={img} alt={title} />

          <div className="interact-btns">
            <a
              className={`btn interact-btn ${!url ? "disabled" : ""}`}
              href={url ? url : "#"}
              target={url ? "_blank" : "_self"}
              aria-label="view live site"
              onClick={e => {
                if(!url) {
                  e.preventDefault()
                }
              }}
            >
              view live <i className="fas fa-link"></i>
            </a>
            <a
              className="btn interact-btn"
              href={gurl}
              target="_blank"
              aria-label="view source code at github"
            >
              github repo <i className="fab fa-github"></i>
            </a>
          </div>

          <div className="about-details">
            <h3 className="details-title">about</h3>
            <p className="about-desc">{desc}</p>
          </div>

          <div className="role-details">
            <h3 className="details-title">role</h3>
            <ul className="roles-list" role="list">
              {roles.map((role) => (
                <li className="roles-role">{role}</li>
              ))}
            </ul>
          </div>

          <div className="tech-details">
            <h3 className="details-title">technologies</h3>
            <ul className="roles-list" role="list">
              {techs.map((tech) => (
                <li className="tech">{tech}</li>
              ))}
            </ul>
          </div>

          <ProjectNav />
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
