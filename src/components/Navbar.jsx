import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/navLogo.svg";
import { navLinks } from "../data/constants";

function Navbar() {
  return (
    <nav className="absolute top-0 flex w-full items-center justify-between p-5">
      <div className="">
        <img className="xm:w-30" src={Logo} alt="Logo" width={80} />
      </div>
      <ul className="flex items-center gap-3 font-medium text-white text-[14px] xm:text-[16px] capitalize">
        {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <NavLink to={navLink.path}>{navLink.name}</NavLink>
            </li>
        ))}

      </ul>
    </nav>
      );
}

export default Navbar;

      /* <li>
        <NavLink to="/">home</NavLink>
      </li>
      <li>
        <NavLink to="/projects">projects</NavLink>
      </li> */