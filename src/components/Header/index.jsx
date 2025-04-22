import HamburgerMenu from "../HamburgerMenu";

const Header = () => {
  return (
    <header className="flex items-center flex-col justify-between p-5 text-white shadow-lg mb-8">
      <HamburgerMenu />
      <nav className="hidden md:flex">
        <ul className="flex gap-20">
          <li>
            <a
              href="#home"
              className="font-bold hover:text-gray-300 hover:underline"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="font-bold hover:text-gray-300 hover:underline"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#proficiencies"
              className="font-bold hover:text-gray-300 hover:underline"
            >
              Proficiencies
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-bold hover:text-gray-300 hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
