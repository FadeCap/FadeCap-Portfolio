import "./index.css";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="contact-section rounded-lg p-5 shadow-md mb-4 max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>
      <ul className="contact-list space-y-2">
        <li>
          <strong>Email:</strong>
          <a href="mailto:stian94lb@gmail.com" className="contact-link">
            {" "}
            stian94lb@gmail.com
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>
          <a
            href="https://github.com/FadeCap"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            {" "}
            FadeCap
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>
          <a
            href="https://www.linkedin.com/in/stian-busengdal/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            {" "}
            stian-busengdal
          </a>
        </li>
      </ul>
    </section>
  );
};

export default ContactSection;
