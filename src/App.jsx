import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetails from "./pages/ProjectDetails";
import NotFoundPage from "./components/NotFoundPage";
import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import Animation from "./aos";
import Theme from "./components/theme";

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
            <Route path="/projects/:title" element={<ProjectDetails />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
    </>
  );
}

export default App;
