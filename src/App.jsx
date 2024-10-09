import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';

const App = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1.',
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'Description of project 2.',
      link: '#',
    },
    // Add more projects as needed
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
