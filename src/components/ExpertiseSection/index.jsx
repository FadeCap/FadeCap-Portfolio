const expertiseData = [
  { id: 1, name: 'HTML', imgSrc: '/assets/HTML-icon.svg' },
  { id: 2, name: 'CSS', imgSrc: '/assets/CSS-icon.png' },
  { id: 3, name: 'JavaScript', imgSrc: '/assets/Javascript-icon.svg' },
  { id: 4, name: 'React', imgSrc: '/assets/React-icon.png' },
  { id: 5, name: 'Tailwind', imgSrc: '/assets/tailwind-logo.png' },
  { id: 6, name: 'Bootstrap', imgSrc: '/assets/bootstrap.png' },
];

const ExpertiseSection = () => {
  return (
    <section id="proficiencies" className="my-10">
      <h2 className="text-2xl font-bold text-center mb-6">Proficiencies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {expertiseData.map(skill => (
          <div key={skill.id} className="flex flex-col items-center">
            <img src={skill.imgSrc} alt={skill.name} className="w-24 h-24 mb-2" />
            <p className="text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;