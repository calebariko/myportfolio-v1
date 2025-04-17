import "../assets/css/Skills.css";
import { skills } from "../data/constants";
import { animation } from "../pages/Home";

function SkillCard() {
  return (
    <>
      <ul className="skills-list" role="list">
        {skills.map((skill) => (
          <li data-aos={animation} key={skill.id} className="skills-list-item">
            <p className="skill-name">{skill.label}</p>
            <i
              className={`fab fa-${skill.icon} ${skill.icon}`}
              style={{ color: skill.color }}
            ></i>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SkillCard;
