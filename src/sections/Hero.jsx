import HeroImage from "../assets/images/hero.svg";
import Button from "../components/Button";
import "../assets/css/Hero.css"

function Hero() {
  return (
    <section className="hero max-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I Am <br /> <span>Caleb Ariko.</span>
          </h1>
          <p className="hero-desc">
            I am a Frontend web developer. <br />
            Let me help you build fantastic sites for the web
          </p>
          <Button label="see my work" />
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
