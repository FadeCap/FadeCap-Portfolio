import "./index.css";

import HamburgerMenu from "../HamburgerMenu";

const Header = () => {
  return (
    <header
      id="header"
      className="sticky top-0 flex items-center flex-col justify-between p-5"
    >
      <HamburgerMenu />
      <nav className="hidden md:flex">
        <ul className="flex gap-20">
          <li>
            <a id="header-link" href="#welcome-container" className="font-bold">
              Home
            </a>
          </li>
          <li>
            <a id="header-link" href="#projects" className="font-bold">
              Projects
            </a>
          </li>
          <li>
            <a id="header-link" href="#proficiencies" className="font-bold">
              Proficiencies
            </a>
          </li>
          <li>
            <a id="header-link" href="#contact" className="font-bold">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
