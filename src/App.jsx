
import { useEffect } from "react";
import { motion } from "framer-motion";
import "./index.css";
import Image from "./assets/my-image.png";

const App = () => {
  useEffect(() => {
    document.title = "Stian | Frontend Developer";
  }, []);

  return (
    <div className="bg-base min-h-screen text-rosewater font-sans">
      {/* NAVBAR */}
      <header className="bg-mantle text-rosewater px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold text-lavender">Stian.dev</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-green transition">About</a>
          <a href="#projects" className="hover:text-green transition">Projects</a>
          <a href="#contact" className="hover:text-green transition">Contact</a>
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
        <p className="text-overlay1 mt-2">Lillestrøm, Akershus, Norway</p>
        <p className="text-overlay0 text-lg max-w-xl mx-auto">
          A front-end developer crafting responsive, accessible, and beautiful web experiences.
        </p>
        <div className="image-container flex justify-center">
          <img src={Image} className="rounded-full size-2/12 py-4 my-6" alt="Image of Stian, in gray-scale" />
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="px-6 py-20 rounded-lg mx-4 md:mx-16 shadow-card">
        <h3 className="text-2xl font-semibold mb-4 text-lavender">About Me</h3>
        <p className="text-overlay0 max-w-3xl">
          I'm passionate about building elegant and functional interfaces with modern tools like React, TailwindCSS, and Framer Motion. I focus on clean code, pixel-perfect design, and accessibility.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-20">
        <h3 className="text-2xl font-semibold mb-6 text-lavender">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map((n) => (
            <div
              key={n}
              className="bg-surface0 p-6 rounded-xl shadow-card hover:shadow-card-hover transition transform hover:-translate-y-1"
            >
              <h4 className="text-xl font-bold text-rosewater mb-2">Project {n}</h4>
              <p className="text-overlay0 mb-4">
                A brief description of what the project is, what stack was used, and what you learned.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-lavender hover:text-green underline text-sm"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-lavender hover:text-green underline text-sm"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-20 rounded-lg mx-4 md:mx-16 shadow-card">
        <h3 className="text-2xl font-semibold mb-4 text-lavender">Contact</h3>
        <div className="space-y-4 max-w-md text-overlay0">
          <p><strong>Email:</strong> <a href="mailto:stian94lb@gmail.com" className="text-lavender hover:text-green">stian94lb@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+4799458676" className="text-lavender hover:text-green">+47 99 45 86 76</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/stian-busengdal/" target="_blank" rel="noopener noreferrer" className="text-lavender hover:text-green">stian-busengdal</a></p>
        </div>
      </section>

      <footer className="text-center text-sm text-overlay0 py-8">
        © {new Date().getFullYear()} Stian Busengdal. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
