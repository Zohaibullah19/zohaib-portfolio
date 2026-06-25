import "./Certifications.css";

function Certifications() {
  const certificates = [
    {
      title: "Flutter Developer Internship",
      issuer: "Optimus Automate",
      year: "2025",
      description:
        "Completed internship focused on Flutter, Dart, Firebase, and mobile application development."
    },

    {
      title: "Full Stack Development Internship",
      issuer: "CodeAlpha",
      year: "2025",
      description:
        "Built full-stack web applications including e-commerce and social networking platforms."
    },

    {
      title: "Social Media Marketing",
      issuer: "UNDP & USAID",
      year: "2024",
      description:
        "Completed professional training in social media marketing, branding, and digital promotion."
    },

    {
      title: "Typing Master Certificate",
      issuer: "Khyber Stenography Institute",
      year: "2022",
      description:
        "Certified typing speed of 50 WPM with 95% accuracy."
    }
  ];

  return (
    <section
  className="certifications"
  id="certifications"
  data-aos="zoom-in-up"
>
      <h2 className="section-title">Certifications</h2>

      <div className="certifications-container">
        {certificates.map((certificate, index) => (
          <div key={index} className="certificate-card">
            <h3>{certificate.title}</h3>

            <p className="issuer">
              {certificate.issuer}
            </p>

            <span className="year">
              {certificate.year}
            </span>

            <p>
              {certificate.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;