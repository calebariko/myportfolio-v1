import { useParams } from "react-router-dom";
import { projects } from "../data/ProjectDetails";
import "../assets/css/ProjectDetails.css";
import ProjectNav from "../components/ProjectNav";
import useDocTitle from "../hooks/useDocTitle";

import useLoadPage from "../hooks/useLoadPage";
import Loader from "../components/Loader";

const ProjectDetails = () => {
  const loading = useLoadPage();
  useDocTitle("Caleb Ariko | Project Details");

  let titleParam = useParams().title;
  let titleMatch = projects.find((project) => project.title === titleParam);

  let { title, desc, url, gurl, roles, techs, img } = titleMatch;

  return (
    <>
      {loading && <Loader />}
      <section className="project-details max-container">
        <div className="details">
          <h2 className="title section-header">{title}</h2>
          <img src={img} alt={title} />

          <div className="interact-btns">
            <a className="btn interact-btn" href={url} target="_blank">
              view live <i className="fas fa-link"></i>
            </a>
            <a className="btn interact-btn" href={gurl} target="_blank">
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
