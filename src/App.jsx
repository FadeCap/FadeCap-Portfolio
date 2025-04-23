import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import Projects from "./Components/Projects";
import ExpertiseSection from "./Components/ExpertiseSection";
import ContactSection from "./Components/ContactSection";

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
      <footer className="text-center p-4"></footer>
    </div>
  );
};

export default App;
