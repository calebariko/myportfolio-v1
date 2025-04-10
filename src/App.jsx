import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return <>
  <main>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/projects" element={ <ProjectsPage /> } />
      <Route path="*" element={ <NotFoundPage /> } />
    </Routes>
  </main>
    
  </>;
}

export default App;
