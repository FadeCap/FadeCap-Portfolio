const ProjectCard = ({ title, description, githubLink, liveLink, images }) => {
  return (
    <div className="bg-purple-900/50 rounded-lg p-5 shadow-md mb-4 w-full max-w-md mx-auto"> {/* Updated width */}
      <div className="flex justify-center mb-3 gap-4 h-48 overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            className="rounded-lg object-cover max-w-full h-auto" 
            src={image}
            alt={`${title} view`}
          />
        ))}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white font-semibold mb-4">{description}</p>
      <div className="flex gap-4">
        <a
          href={githubLink}
          className="border-white border-2 text-white py-2 px-4 rounded hover:bg-purple-600"
        >
          GitHub
        </a>
        <a
          href={liveLink}
          className="border-white border-2 text-white py-2 px-4 rounded hover:bg-purple-600"
        >
          Netlify live host
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Holidaze",
      description:
        "Holidaze is a booking website where a registered customer can book a venue. There is also a toggle to become a venue manager, who can add, edit, and delete venues.",
      githubLink: "https://github.com/FadeCap/HolidazePE2",
      liveLink: "https://holidazestianlb.netlify.app/",
      images: [
        "./assets/Holidaze-desktop.png",
        "./assets/Holidaze-mobile.png",
      ],
    },
    {
      title: "FadeShop",
      description:
        "A javascript based e-commerce website. The user can add/remove products from their cart and see the total price.",
      githubLink:
        "https://github.com/FadeCap/JavaScript-Frameworks/tree/Javascript-Frameworks-Stian",
      liveLink: "https://javascript-fw-stianb.netlify.app/",
      images: [
        "./assets/JavascriptFrameworks-Desktop.png",
        "./assets/JavascriptFrameworks-mobile.png",
      ],
    },
    {
      title: "BidWear",
      description:
        "An auction website where a user has credits to bid on different products.",
      githubLink: "https://github.com/FadeCap/Semester-Project-2",
      liveLink: "https://semeter-project-2-stian.netlify.app/",
      images: [
        "./assets/SemesterProject2-desktop.png",
        "./assets/SemesterProject2-mobile.png",
      ],
    },
  ];

  return (
    <div id="projects" className="my-12">
      <h2 className="text-2xl font-bold text-center mb-8">Projects</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
