import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import * as Icon from "react-feather";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";

const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

// Toggle reCAPTCHA badge visibility
const toggleCaptchaBadge = (show) => {
  const badge = document.getElementsByClassName("grecaptcha-badge")[0];
  if (badge && badge instanceof HTMLElement) {
    badge.style.visibility = show ? "visible" : "hidden";
  }
};

function Contact() {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [emailAddress, setEmailAddress] = useState([]);
  const [address, setAddress] = useState([]);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("/api/contactinfo").then((response) => {
      setPhoneNumbers(response.data.phoneNumbers);
      setEmailAddress(response.data.emailAddress);
      setAddress(response.data.address);
    });

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
        setMessage("Your message has been sent!");
        setFormdata({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(true);
        setMessage("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(true);
      setMessage("An error occurred. Please try again later.");
    }
  };

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact - Kaylei Burke</title>
        <meta name="description" content="Kaylei Burke Contact Page" />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Contact Me" />
            <div className="row">
              <div className="col-lg-6">
                <div className="mi-contact-formwrapper">
                  <h4>Get In Touch</h4>
                  <form
                    action="#"
                    className="mi-form mi-contact-form"
                    onSubmit={submitHandler}
                  >
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-name">
                        Enter your name*
                      </label>
                      <input
                          onChange={handleChange}
                          type="text"
                          name="name"
                          id="contact-form-name"
                          value={formdata.name}
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-email">
                        Enter your email*
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        name="email"
                        id="contact-form-email"
                        value={formdata.email}
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-subject">
                        Enter your subject*
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        name="subject"
                        id="contact-form-subject"
                        value={formdata.subject}
                      />
                    </div>
                    <div className="mi-form-field">
                      <label htmlFor="contact-form-message">
                        Enter your Message*
                      </label>
                      <textarea
                        onChange={handleChange}
                        name="message"
                        id="contact-form-message"
                        cols="30"
                        rows="6"
                        value={formdata.message}
                      ></textarea>
                    </div>
                    <div className="mi-form-field">
                      <button className="mi-button" type="submit">
                        Send Mail
                      </button>
                    </div>
                  </form>
                  {handleAlerts()}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mi-contact-info">
                  {phoneNumbers.length > 0 && (
                      <div className="mi-contact-infoblock">
                      <span className="mi-contact-infoblock-icon">
                        <Icon.Phone />
                      </span>
                      <div className="mi-contact-infoblock-content">
                        <h6>Phone</h6>
                        {phoneNumbers.map((phoneNumber) => (
                          <p key={phoneNumber}>
                            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                  {emailAddress.length > 0 && (
                      <div className="mi-contact-infoblock">
                      <span className="mi-contact-infoblock-icon">
                        <Icon.Mail />
                      </span>
                      <div className="mi-contact-infoblock-content">
                        <h6>Email</h6>
                        {emailAddress.map((email) => (
                          <p key={email}>
                            <a href={`mailto:${email}`}>{email}</a>
                          </p>
                        ))}
                      </div>
                    </div>
                )}
                {address && (
                    <div className="mi-contact-infoblock">
                      <span className="mi-contact-infoblock-icon">
                        <Icon.MapPin />
                      </span>
                      <div className="mi-contact-infoblock-content">
                        <h6>Address</h6>
                        <p>{address}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default Contact;
