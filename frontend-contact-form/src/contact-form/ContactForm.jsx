import { useState } from "react";
import { CiFacebook } from "react-icons/ci";
import { FaGithub, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { getContact } from "../api/api";
import "./ContactFormStyles.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const projects = [
    "Product Design",
    "UI/UX Design",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "Mobile Development",
    "Web Development",
    "Graphic Design",
    "SEO Optimization",
    "Responsive Web Design",
  ];

  const icons = [
    "/images/icons/product.png",
    "/images/icons/backend.png",
    "/images/icons/graphic.png",
    "/images/icons/internet.png",
    "/images/icons/mobile.png",
    "/images/icons/uı.png",
    "/images/icons/ui.png",
    "/images/icons/web.png",
    "/images/icons/seo.png",
    "/images/icons/responsive.png",
  ];

  const content =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel eligendi earum necessitatibus ea.";

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const response = await getContact(formData);
      console.log(response);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      {/* Başlık */}
      <div className="contact-page-title">
        <h1>Impressive, Simple, Professional</h1>
        <p>
          Your website should be visually striking while offering a seamless
          user experience. We make that happen.
        </p>
      </div>

      {/* Projeler */}
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {icons[index] && (
              <img src={icons[index]} alt={project} className="icon" />
            )}
            <h3>{project}</h3>
            <p>{content}</p>
          </div>
        ))}
      </div>

      <div className="projects-footer">
        <p>
          Which one do you need? Let’s build it for you with a professional
          touch.
        </p>
      </div>

      {/* Contact Form */}
      <div className="contact-page-heading">
        <h1>Contact Us</h1>
        <p>
          Ready to <span className="colored-text">start something</span> great?
          Reach out we’d love to hear from you.
        </p>
      </div>

      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>

          {success && (
            <p className="success-message">Message sent successfully!</p>
          )}
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>

      {/* Sosyal medya */}
      <div className="social-media-container">
        <CiFacebook className="social-icon" />
        <FaInstagram className="social-icon" />
        <FaGithub className="social-icon" />
        <FaWhatsapp className="social-icon" />
        <FaPhoneAlt className="social-icon" />
      </div>
    </div>
  );
};

export default ContactForm;
