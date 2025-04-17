import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/navLogo.svg";
import { navLinks } from "../data/constants";
import { useState, useEffect } from "react";
import "../assets/css/Nav.css";

function Navbar() {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledHeight = window.scrollY;
      if (scrolledHeight > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${isSticky ? 'sticky' : ''}`}>
      <nav className="max-container primary-nav">
        <NavLink to="/">
          <img className="logo" src={Logo} alt="Logo" width={80} />
        </NavLink>
        <ul className="primary-nav-list" role="list">
          {navLinks.map((navLink) => (
              <li key={navLink.name}>
                <NavLink className="nav-link" to={navLink.path}>{navLink.name}</NavLink>
              </li>
          ))}
        </ul>
      </nav>
    </header>
      );
}

export default Navbar;