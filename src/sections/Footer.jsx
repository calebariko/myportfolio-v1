import "../assets/css/Footer.css";
import { footerLinks } from "../data/constants";

function Footer() {
  return (
    <footer className="footer max-container">
      <h2 className="footer-header section-header">contact me</h2>

      <section className="links-container">
        <ul className="footer-links" role="list">
          {footerLinks.map((footerLink) => (
            <li key={footerLink.id} className="footer-link">
              <a href={footerLink.href} target={footerLink.href.startsWith("mailto:") ? undefined : "_blank"} aria-label="social-link">
                {footerLink.icon === "envelope" ? (
                  <i className={`fas fa-${footerLink.icon}`}></i>
                ) : (
                  <i className={`fab fa-${footerLink.icon}`}></i>
                )}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <p class="copyright">caleb ariko &copy;{new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
