import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import "./components/Loader.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

import Navbar from "./components/Navbar";
import "./styles/App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
  <div className={darkMode ? "dark-theme" : "light-theme"}>
      <Navbar />

      <section className="hero" id="home">
        <div className="hero-left">
          <p className="hero-greeting">Hi, I'm</p>

          <h1 className="hero-title">
            Zohaib Wazir
          </h1>

          <h2 className="hero-subtitle">
            Software Engineering Student
          </h2>

          <p className="hero-description">
            Full Stack Developer | Flutter Developer | Building modern web and
            mobile applications with React, Django, Node.js, Flutter, MongoDB,
            and MySQL.
          </p>

          <div className="hero-buttons">
  <a href="#projects" className="primary-btn">
  View Projects
</a>

  <a href="#contact" className="secondary-btn">
  Contact Me
</a>

  <a
    href="/resume/Zohaib-Ullah-Resume.pdf"
    download
    className="primary-btn"
  >
    Download Resume
  </a>
  <button
  className="secondary-btn"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
</button>
</div>

          <div className="social-icons">
            <a
              href="https://github.com/Zohaibullah19"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/zohaib-ullah-224841413"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:engrzohaibullah@gmail.com">
              <FaEnvelope />
            </a>

            <a
              href="https://wa.me/923285604960"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img
  src="/images/zohaib.jpg"
  alt="Zohaib Wazir"
  className="hero-image"
/>
        </div>
      </section>

      <About />
<Skills />
<Projects />
<Experience />
<Education />
<Certifications />
<Contact />
<Footer />
    </div>
  );
}

export default App;