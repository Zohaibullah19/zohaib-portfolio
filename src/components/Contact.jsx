import "./Contact.css";

function Contact() {
  return (
    <section
  className="contact"
  id="contact"
  data-aos="fade-up"
>
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">
        <div className="contact-card">
          <h3>Email</h3>
          <p>engrzohaibullah@gmail.com</p>
        </div>

        <div className="contact-card">
          <h3>WhatsApp</h3>
          <p>+92 328 560 4960</p>
        </div>

        <div className="contact-card">
          <h3>GitHub</h3>
          <p>Zohaibullah19</p>
        </div>

        <div className="contact-card">
          <h3>LinkedIn</h3>
          <p>Zohaib Ullah</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;