import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import NotFoundPage from "./components/NotFoundPage";
import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import Animation from "./aos";
import Theme from "./components/theme";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));

function App() {
  return (
    <>
      <Animation />
      <Theme />

      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route
            path="/projects/:title"
            element={
              <Suspense fallback={<Loader />}>
                <ProjectDetails />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
