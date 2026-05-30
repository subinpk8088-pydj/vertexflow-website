import { COMPANY } from "../constants/company";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">

        <div className="logo">
          {COMPANY.name}
        </div>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;