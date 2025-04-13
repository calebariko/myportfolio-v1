import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/navLogo.svg";
import { navLinks } from "../data/constants";
import "../assets/css/Nav.css";

function Navbar() {

  return (
    <header className="max-container">
      <nav className="primary-nav">
        <NavLink to="/">
          <img className="logo" src={Logo} alt="Logo" width={80} />
        </NavLink>
        <ul className="primary-nav-list" role="list">
          {navLinks.map((navLink) => (
              <li key={navLink.name}>
                <NavLink className="nav-link rm-underline" to={navLink.path}>{navLink.name}</NavLink>
              </li>
          ))}
        </ul>
      </nav>
    </header>
      );
}

export default Navbar;