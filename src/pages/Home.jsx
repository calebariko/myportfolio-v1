import About from "../sections/About";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import useDocTitle from "../hooks/useDocTitle";
export const animation = "zoom-in";
export const animationtwo = "zoom-in-up";

function Home() {
  useDocTitle("Caleb Ariko | Home");

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default Home;
