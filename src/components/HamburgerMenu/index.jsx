import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative md:hidden">
      {" "}
      {/* Show only on small screens */}
      <button
        className="flex items-center justify-center w-10 h-10  focus:outline-none"
        onClick={toggleMenu}
      >
        {isOpen ? (
          "X"
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="w-8 h-1 bg-white mb-1" />
            <div className="w-8 h-1 bg-white mb-1" />
            <div className="w-8 h-1 bg-white mb-1" />
          </div>
        )}
      </button>
      {isOpen && (
        <>
          {/* Overlay for closing when clicking outside */}
          <div className="fixed inset-0 z-40" onClick={closeMenu} />
          <div
            id="hamburger-container"
            className="fixed top-0 left-0 w-full h-1/3   z-50"
          >
            <ul className="flex flex-col items-center justify-center h-full">
              <li
                id="hamburger-links"
                className="py-4 text-xl  w-full text-center"
              >
                <a href="#home" className="block px-4" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li
                id="hamburger-links"
                className="py-4 text-xl  w-full text-center"
              >
                <a href="#projects" className="block px-4" onClick={closeMenu}>
                  Projects
                </a>
              </li>
              <li
                id="hamburger-links"
                className="py-4 text-xl  w-full text-center"
              >
                <a
                  href="#proficiencies"
                  className="block px-4"
                  onClick={closeMenu}
                >
                  Proficiencies
                </a>
              </li>
              <li
                id="hamburger-links"
                className="py-4 text-xl  w-full text-center"
              >
                <a href="#contact" className="block px-4" onClick={closeMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default HamburgerMenu;
