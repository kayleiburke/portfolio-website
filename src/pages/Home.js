import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Github, Linkedin, Code2, Server, Cloud, ArrowRight } from "lucide-react";
import Layout from "../components/Layout";

function Home({ lightMode }) {
  const [information, setInformation] = useState({});

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Home - Kaylei Burke</title>
        <meta name="description" content="Kaylei Burke Homepage" />
      </Helmet>
      <div className="mi-home-area">
        {/* backgrounds */}
        <div className="mi-home-grid-bg" />
        <div className="mi-home-glow" />

        <div className="mi-home-hero">
          <p className="mi-section-label">Senior Software Engineer &amp; Technical Lead</p>
          <h1 className="mi-home-h1">
            Hi, I'm <span className="mi-gradient-text">{information.name || "Kaylei Burke"}</span>
          </h1>
          <p className="mi-home-tagline">
            {information.aboutContent || "10 years building large-scale web applications - from greenfield products to legacy modernization, cloud infrastructure, and complex integrations."}
          </p>
          <div className="mi-home-buttons">
            <Link to="/portfolios" className="mi-btn-primary">
              View My Work <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="mi-btn-outline">
              Get In Touch
            </Link>
          </div>
          <div className="mi-home-social">
            <a href={information.socialLinks?.linkedin || "https://www.linkedin.com/in/kayleiburke"} target="_blank" rel="noopener noreferrer" className="mi-home-social-link">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href={information.socialLinks?.github || "https://github.com/kayleiburke"} target="_blank" rel="noopener noreferrer" className="mi-home-social-link">
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="mi-home-stats">
        <div className="mi-home-stats-inner">
          {[
            { icon: <Code2 size={24} />, stat: "10 Years", sub: "Professional Engineering" },
            { icon: <Server size={24} />, stat: "Full Stack", sub: "Rails · React · SQL · AWS" },
            { icon: <Cloud size={24} />, stat: "Technical Lead", sub: "Architecture · Mentorship · Delivery" },
          ].map(({ icon, stat, sub }) => (
            <div key={stat} className="mi-home-stat">
              <div className="mi-icon-box">{icon}</div>
              <div>
                <p className="mi-home-stat-value">{stat}</p>
                <p className="mi-home-stat-label">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
