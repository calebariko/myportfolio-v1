import "../assets/css/Skills.css"
import SkillCard from "../components/SkillCard"

function Skills () {
  return (
    <section className="max-container skills">
        <div className="skills-content">
            <h2 className="skills-header section-header">my skills</h2>

            <SkillCard />
        </div>
    </section>
  )
}

export default Skills