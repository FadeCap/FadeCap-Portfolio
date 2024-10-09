const Header = () => {
  return (
    <header className="shadow-lg mb-8">
      <div className="flex justify-center p-5">
        <nav>
          <ul className="flex gap-20">
            <li><a href="#home" className="text-white font-bold hover:text-gray-300">Home</a></li>
            <li><a href="#projects" className="text-white font-bold hover:text-gray-300">Projects</a></li>
            <li><a href="#expertise" className="text-white font-bold hover:text-gray-300">Expertise</a></li>
            <li><a href="#contact" className="text-white font-bold hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
