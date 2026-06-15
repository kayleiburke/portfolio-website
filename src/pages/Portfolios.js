import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Github, ExternalLink, Clock } from "lucide-react";
import Layout from "../components/Layout";
import { Image } from "../components/common/Image";

function Portfolios() {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    axios.get("/api/portfolios").then((r) => setPortfolios(r.data));
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Portfolio - Kaylei Burke</title>
        <meta name="description" content="Kaylei Burke Portfolios Page" />
      </Helmet>
      <div className="mi-page-container">
        <div className="mi-portfolio-v2-header">
          <p className="mi-section-label">Portfolio</p>
          <h1 className="mi-section-heading">
            Sample <span className="mi-gradient-text">Projects</span>
          </h1>
        </div>

        <div className="mi-portfolio-v2-intro">
          <p>A collection of personal and sample projects built over the years to explore different technologies and frameworks.</p>
          <p>These are independently deployed but not representative of the scale or complexity of my professional work.</p>
          <p className="mi-portfolio-v2-note"><em>Note: Heroku-hosted projects may take ~30s to load on first visit due to cold starts.</em></p>
        </div>

        <div className="mi-portfolio-v2-grid">
          {portfolios.map((project) => {
            const isHeroku = project.url && project.url.includes("herokuapp.com");
            return (
              <div key={project.id} className="mi-card mi-portfolio-v2-card">
                <div className="mi-portfolio-v2-image">
                  <Image
                    src={project.imageUrl}
                    loader="/images/portfolio-image-placeholder.png"
                    alt={project.title}
                  />
                  {isHeroku && (
                    <div className="mi-portfolio-v2-heroku-badge">
                      <Clock size={12} /> May take ~30s to load
                    </div>
                  )}
                </div>
                <div className="mi-portfolio-v2-content">
                  <h2 className="mi-portfolio-v2-title">{project.title}</h2>
                  <p
                    className="mi-portfolio-v2-desc"
                    dangerouslySetInnerHTML={{ __html: project.subtitle }}
                  />
                  <div className="mi-portfolio-v2-links">
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="mi-portfolio-v2-link mi-portfolio-v2-link-accent">
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="mi-portfolio-v2-link">
                        <Github size={14} /> {project.backendUrl ? "Frontend" : "Code"}
                      </a>
                    )}
                    {project.backendUrl && (
                      <a href={project.backendUrl} target="_blank" rel="noopener noreferrer" className="mi-portfolio-v2-link">
                        <Github size={14} /> Backend
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Portfolios;
