import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle } from "lucide-react";
import Layout from "../components/Layout";

const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

// Toggle reCAPTCHA badge visibility
const toggleCaptchaBadge = (show) => {
  const badge = document.getElementsByClassName("grecaptcha-badge")[0];
  if (badge && badge instanceof HTMLElement) {
    badge.style.visibility = show ? "visible" : "hidden";
  }
};

function Contact() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Load the reCAPTCHA v3 script
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.body.appendChild(script);

    // Show reCAPTCHA badge only on this page
    toggleCaptchaBadge(true);

    return () => {
      document.body.removeChild(script);
      delete window.grecaptcha;
      toggleCaptchaBadge(false); // Hide badge when leaving page
    };
  }, []);

  const submitHandler = async (event) => {
    event.preventDefault();

    const { name, email, subject, message } = formdata;

    // Client-side validation
    if (!name || !email || !subject || !message) {
      setError(true);
      setMessage("All fields are required.");
      return;
    }

    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError(true);
      setMessage("Please enter a valid email address.");
      return;
    }

    setError(false);
    setLoading(true);

    try {
      // Execute reCAPTCHA v3 to get the token
      const captchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "submit" });

      const response = await fetch('https://dmu903rqzb.execute-api.us-east-2.amazonaws.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message, captchaToken }),
      });

      if (response.ok) {
        setSuccess(true);
        setMessage("Your message has been sent!");
        setFormdata({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(true);
        setMessage("Failed to send message.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError(true);
      setMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact - Kaylei Burke</title>
        <meta name="description" content="Kaylei Burke Contact Page" />
      </Helmet>
      <div className="mi-page-container">
        <div className="mi-contact-v2-header">
          <p className="mi-section-label">Contact</p>
          <h1 className="mi-section-heading">
            Get In <span className="mi-gradient-text">Touch</span>
          </h1>
        </div>

        <div className="mi-contact-v2-grid">
          {/* Left column: info + social */}
          <div className="mi-contact-v2-sidebar">
            <div className="mi-card mi-contact-v2-info-card">
              <h3 className="mi-contact-v2-card-title">Contact Info</h3>
              <div className="mi-contact-v2-info-item">
                <div className="mi-icon-box mi-contact-v2-info-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="mi-contact-v2-info-label">Email</p>
                  <a href="mailto:info@kayleiburke.com" className="mi-contact-v2-info-value">
                    info@kayleiburke.com
                  </a>
                </div>
              </div>
              <div className="mi-contact-v2-info-item">
                <div className="mi-icon-box mi-contact-v2-info-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="mi-contact-v2-info-label">Location</p>
                  <p className="mi-contact-v2-info-value">Omaha, Nebraska</p>
                </div>
              </div>
            </div>

            <div className="mi-card mi-contact-v2-social-card">
              <h3 className="mi-contact-v2-card-title">Connect</h3>
              <div className="mi-contact-v2-social-links">
                <a
                  href="https://www.linkedin.com/in/kayleiburke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mi-contact-v2-social-link"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/kayleiburke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mi-contact-v2-social-link"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right column: form */}
          <div className="mi-card mi-contact-v2-form-card">
            {success ? (
              <div className="mi-contact-v2-success">
                <CheckCircle size={48} className="mi-contact-v2-success-icon" />
                <h3 className="mi-contact-v2-success-title">Message Sent!</h3>
                <p className="mi-contact-v2-success-text">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={submitHandler} className="mi-contact-v2-form">
                <h3 className="mi-contact-v2-card-title">Send a Message</h3>
                <div className="mi-contact-v2-fields">
                  <div className="mi-contact-v2-field">
                    <label htmlFor="contact-name" className="mi-contact-v2-label">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formdata.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="mi-contact-v2-input"
                    />
                  </div>
                  <div className="mi-contact-v2-field">
                    <label htmlFor="contact-email" className="mi-contact-v2-label">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="text"
                      name="email"
                      value={formdata.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="mi-contact-v2-input"
                    />
                  </div>
                  <div className="mi-contact-v2-field mi-contact-v2-field-full">
                    <label htmlFor="contact-subject" className="mi-contact-v2-label">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formdata.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="mi-contact-v2-input"
                    />
                  </div>
                  <div className="mi-contact-v2-field mi-contact-v2-field-full">
                    <label htmlFor="contact-message" className="mi-contact-v2-label">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formdata.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={6}
                      className="mi-contact-v2-textarea"
                    />
                  </div>
                </div>

                {error && message && (
                  <p className="mi-contact-v2-error">{message}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mi-btn-primary mi-contact-v2-submit"
                >
                  {loading ? (
                    <span className="mi-contact-v2-loading">Sending...</span>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
