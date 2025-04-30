import { useEffect } from "react";
import { motion } from "framer-motion";
import "./index.css";
import Image from "./assets/my-image.png";
import reactIcon from "./assets/React-icon.png";
import jsIcon from "./assets/Javascript-icon.svg";
import typescriptIcon from "./assets/typescript-logo.png";
import tailwindIcon from "./assets/tailwind-logo.png";
import holidazeImg from "./assets/Holidaze-desktop.png";
import fadeshopImg from "./assets/JavascriptFrameworks-Desktop.png";

const App = () => {
  useEffect(() => {
    document.title = "Stian | Frontend Developer";
  }, []);

  return (
    <div className="bg-base min-h-screen flex flex-col justify-center items-center text-rosewater">
      {/* NAVBAR */}
      <header className="bg-mantle sticky top-0 text-rosewater px-6 py-4 flex justify-center items-center shadow-md w-full">
        <nav className="space-x-4 text-center">
          <a href="#about" className="hover:text-green transition">
            About
          </a>
          <a href="#projects" className="hover:text-green transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-green transition">
            Contact
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="px-8 py-20 text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello, I'm <span className="text-lavender">Stian</span>
        </motion.h2>
        <p className="text-overlay1 mt-2 text-rosewater">
          Lillestrøm, Akershus, Norway
        </p>
        <p className="text-overlay0 text-lg max-w-xl mx-auto">
          A front-end developer crafting responsive, accessible, and beautiful
          web experiences.
        </p>
        <div className="image-container flex justify-center">
          <img
            src={Image}
            className="rounded-full max-w-48 py-4 my-6"
            alt="Image of Stian, in gray-scale"
          />
        </div>
      </section>

      {/* Proficiencies */}
      <section
        id="about"
        className="px-6 py-20 rounded-lg mx-4 md:mx-16 shadow-card"
      >
        <h3 className="text-2xl font-semibold mb-4 text-lavender">
          Proficiencies
        </h3>
        <div className="grid-rows-2 flex p-4 gap-6">
          <img src={reactIcon} alt="React logo" className="h-16 w-16" />
          <img
            src={typescriptIcon}
            alt="Typescript logo"
            className="h-16 w-18"
          />
          <img src={jsIcon} alt="Javascript logo" className="h-16 w-16" />
          <img src={tailwindIcon} alt="Tailwind logo" className="h-16 w-16" />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-20">
        <h3 className="text-2xl font-semibold mb-6 text-lavender">Projects</h3>
        <h4 className="font-semibold mb-3">
          Currently working on a few that I will add here soon!
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-surface0 p-6 rounded-xl shadow-card hover:shadow-card-hover transition transform hover:-translate-y-1">
            <div className="flex-col gap-4">
              <div className="flex-col">
                <h4 className="text-xl font-bold text-rosewater mb-2">
                  Holidaze
                </h4>
                <p className="text-overlay0">
                  Booking website <br></br>
                  React, TailwindCSS <br></br>
                  API integration, Authorization, CRUD
                </p>
              </div>
              <div className="m-4">
                <img
                  className="rounded max-w-96 shadow-card"
                  src={holidazeImg}
                  alt="Image of my Holidaze project"
                />
              </div>
            </div>

            <div className="flex space-x-4 p-2">
              <a
                href="https://github.com/FadeCap/HolidazePE2"
                className="text-lavender hover:text-green underline text-sm"
              >
                GitHub
              </a>
              <a
                href="https://holidaze-stianlb.netlify.app/"
                className="text-lavender hover:text-green underline text-sm"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="bg-surface0 p-6 rounded-xl shadow-card hover:shadow-card-hover transition transform hover:-translate-y-1">
            <div className="flex-col gap-4">
              <div className="flex-col">
                <h4 className="text-xl font-bold text-rosewater mb-2">
                  FadeShop
                </h4>
                <p className="text-overlay0">
                  E-commerce <br></br>
                  React, TailwindCSS <br></br>
                  API integration, Cart
                </p>
              </div>
              <div className="m-4 flex justify-center">
                <img
                  className="rounded max-w-96 shadow-card"
                  src={fadeshopImg}
                  alt="Image of the project FadeShop"
                />
              </div>
            </div>
            <div className="flex space-x-4 p-2">
              <a
                href="https://github.com/FadeCap/JavaScript-Frameworks"
                className="text-lavender hover:text-green underline text-sm"
              >
                GitHub
              </a>
              <button
                href="https://javascript-fw-stianb.netlify.app/"
                className="text-lavender hover:text-green underline text-sm"
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-6 py-20 rounded-lg mx-4 md:mx-16 shadow-card"
      >
        <h3 className="text-2xl font-semibold mb-4 text-lavender">Contact</h3>
        <div className="space-y-4 max-w-md text-overlay0">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:stian94lb@gmail.com"
              className="text-lavender hover:text-green"
            >
              stian94lb@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+4799458676"
              className="text-lavender hover:text-green"
            >
              +47 99 45 86 76
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/stian-busengdal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lavender hover:text-green"
            >
              stian-busengdal
            </a>
          </p>
        </div>
      </section>

      <footer className="text-center text-sm text-overlay0 py-8">
        © {new Date().getFullYear()} Stian Busengdal. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
