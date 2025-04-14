import HeroImage from "../assets/images/hero.svg";
import "../assets/css/Hero.css"

function Hero() {
  return (
    <section className="hero max-container" id="hero">
      <div className="hero-content wrapper">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I Am <br /> <span>Caleb Ariko.</span>
          </h1>
          <p className="hero-desc">
            I am a Frontend web developer. <br />
            Let me help you build fantastic sites for the web
          </p>
          <a className="btn" href="#projects">see my work</a>
        </div>

        <img
          className="hero-img"
          src={HeroImage}
          alt="illustration of a person on computer building a website"
        />
      </div>
    </section>
  );
}

export default Hero;
