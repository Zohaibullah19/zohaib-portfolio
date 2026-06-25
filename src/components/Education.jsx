import "./Education.css";

function Education() {
  return (
   <section
  className="education"
  id="education"
  data-aos="fade-up"
>
      <h2 className="section-title">Education</h2>

      <div className="education-container">

        <div className="education-card">
          <h3>Bachelor of Science in Software Engineering</h3>
          <p className="institute">
            University Student
          </p>
          <span className="duration">
            2024 - Present (5th Semester)
          </span>

          <p>
            Currently pursuing BS Software Engineering with a strong focus on
            Full Stack Development, Mobile App Development, Database Systems,
            Software Design, and Modern Web Technologies.
          </p>
        </div>

        <div className="education-card">
          <h3>Higher Secondary School Certificate (FSc Pre-Medical)</h3>
          <p className="institute">
            BISE Bannu
          </p>
          <span className="duration">
            2023
          </span>

          <p>
            Completed FSc Pre-Medical with 899/1100 marks. Developed strong
            analytical and problem-solving skills through Biology, Chemistry,
            and Physics.
          </p>
        </div>

        <div className="education-card">
          <h3>Secondary School Certificate (Matric Science)</h3>
          <p className="institute">
            BISE Kohat
          </p>
          <span className="duration">
            2021
          </span>

          <p>
            Completed Matriculation in Science Group with 938/1100 marks,
            building a strong academic foundation in Mathematics and Science.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Education;