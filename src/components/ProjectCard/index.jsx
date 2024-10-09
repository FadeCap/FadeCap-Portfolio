const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2">
      <h2 className="text-xl font-semibold">{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.link} className="text-blue-500">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
