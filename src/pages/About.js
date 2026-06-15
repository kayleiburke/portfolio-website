import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import Layout from "../components/Layout";
import { Image } from "../components/common/Image";

function About() {
  const [information, setInformation] = useState({});

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>About - Kaylei Burke</title>
        <meta name="description" content="Kaylei Burke About Page" />
      </Helmet>
      <div className="mi-page-container">
        {/* Page header */}
        <div className="mi-about-v2-header">
          <p className="mi-section-label">About Me</p>
          <h1 className="mi-section-heading">
            Engineer. Problem-solver.{" "}
            <span className="mi-gradient-text">Builder.</span>
          </h1>
        </div>

        {/* Two-column */}
        <div className="mi-about-v2-grid">
          {/* Image */}
          <div className="mi-about-v2-image-col">
            <div className="mi-about-v2-image-wrap">
              <div className="mi-about-v2-image-glow" />
              <div className="mi-about-v2-image-inner">
                <Image
                  src={information.aboutImage || "/images/about-image.jpg"}
                  loader="/images/about-image-placeholder.png"
                  alt="Kaylei Burke"
                />
              </div>
              <div className="mi-about-v2-badge">
                <p className="mi-about-v2-badge-num">10+</p>
                <p className="mi-about-v2-badge-label">Years Exp.</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="mi-about-v2-bio-col">
            <p className="mi-about-v2-para">
              I'm a Senior Software Engineer and Technical Lead with 10 years of experience designing, building, and operating large-scale web applications. My work spans Ruby on Rails, React, JavaScript, SQL, and AWS — from greenfield builds to legacy modernization, cloud infrastructure, and complex third-party integrations.
            </p>
            <p className="mi-about-v2-para">
              Currently I serve as the technical lead and primary engineer for Triton, a business-critical insurance platform at Ryan Specialty, supporting underwriting, claims, policy administration, and workflow automation for enterprise clients nationwide. I take full ownership of architecture, production systems, cloud infrastructure, and delivery planning — and coordinate directly with executives, product owners, and external vendors.
            </p>
            <p className="mi-about-v2-para">
              Reach out through the <Link to="/contact">contact page</Link> if you'd like to collaborate, discuss projects, or connect!
            </p>

            <div className="mi-about-v2-buttons">
              <a href={information.cvfile || "/files/KayleiBurkeResume.pdf"} download className="mi-btn-primary">
                <Download size={18} /> Download CV
              </a>
              <Link to="/contact" className="mi-btn-outline">
                Get In Touch <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mi-about-v2-facts">
              {[
                { label: "Location", value: "Omaha, Nebraska" },
                { label: "Email", value: "info@kayleiburke.com" },
                { label: "Specialty", value: "Full Stack Engineering" },
                { label: "Focus", value: "Rails · React · AWS" },
              ].map(({ label, value }) => (
                <div key={label} className="mi-about-v2-fact">
                  <p className="mi-about-v2-fact-label">{label}</p>
                  <p className="mi-about-v2-fact-value">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
