import AboutImage from "../assets/images/about.svg";
import "../assets/css/Hero.css";
import "../assets/css/About.css";

function About() {
  return (
    <section className="about max-container" id="about">
      <h2 className="about-header section-header">About me</h2>
      <article className="about-content wrapper">
        <div className="about-text">
          <h3 className="about-title">what i do</h3>
          <p className="about-desc">
            I've always been fascinated by the internet and in particular, the
            way i can access prettty much any information from anywhere through
            websites. <br /> I just love building experiences on the web as a
            frontend web developer and continously learning new and exciting
            ways to do just that in the best way.
          </p>
          <a className="btn" href="#projects">see my work</a>
        </div>

        <img
          className="about-img"
          src={AboutImage}
          alt="illustration of a person on computer building a website"
        />
      </article>
    </section>
  );
}

export default About;
