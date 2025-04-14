import About from "../sections/About"
import Footer from "../sections/Footer"
import Hero from "../sections/Hero"
import Skills from "../sections/Skills"

function Home () {
  return (
    <div>
        <Hero />
        <About />
        <Skills />
        <Footer />
    </div>
  )
}

export default Home