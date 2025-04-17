import ProjectCard from "../components/ProjectCard";
import useDocTitle from "../hooks/useDocTitle";
import useLoadPage from "../hooks/useLoadPage";
import Loader from "../components/Loader";

function ProjectsPage() {
  const loading = useLoadPage();

  useDocTitle("Caleb Ariko | Projects");

  return (
    <>
      {loading && <Loader />}
      <section className="all-projects max-container">
        <h2 className="all-projects-header section-header">all projects</h2>

        <ProjectCard />
      </section>
    </>
  );
}

export default ProjectsPage;
