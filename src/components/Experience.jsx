import "../styles/Experience.css";
function Experience() {
  return (
    <section
  className="experience"
  id="experience"
  data-aos="fade-left"
>
      <h2 className="section-title">
        Experience
      </h2>

      <div className="experience-container">

        <div className="experience-card">
          <h3>
            Flutter Developer Intern
          </h3>

          <p className="company">
            Optimus Automate
          </p>

          <span className="duration">
            2025
          </span>

          <p>
            Developed mobile applications using Flutter,
            Firebase, and Dart. Built projects including
            FitTrack Pro and LinguaMaster.
          </p>
        </div>

        <div className="experience-card">
          <h3>
            Full Stack Development Intern
          </h3>

          <p className="company">
            CodeAlpha
          </p>

          <span className="duration">
            2025
          </span>

          <p>
            Built full-stack web applications including
            SocialSphere and ShopHub using Django,
            JavaScript, HTML, and CSS.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Experience;