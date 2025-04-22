import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Projects from "./components/Projects";
import ExpertiseSection from "./components/ExpertiseSection";
import ContactSection from "./components/ContactSection";

const App = () => {
  return (
    <div className="min-h-screen text-white">
      <Header />
      <main>
        <Welcome />
        <Projects />
        <ExpertiseSection />
        <ContactSection />
      </main>
      <footer className="text-center p-4">
        <h3>© 2023 Stian Busengdal. All rights reserved.</h3>
      </footer>
    </div>
  );
};

export default App;
