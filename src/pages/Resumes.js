import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Download, GraduationCap, Award } from "lucide-react";
import Layout from "../components/Layout";

function Resumes() {
  const [skills, setSkills] = useState([]);
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);

  useEffect(() => {
    axios.get("/api/skills").then((r) => setSkills(r.data));
    axios.get("/api/experience").then((r) => {
      setWorkingExperience(r.data.workingExperience);
      setEducationExperience(r.data.educationExperience);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Resume - Kaylei Burke</title>
        <meta name="description" content="Kaylei Burke's Resume Page" />
      </Helmet>
      <div className="mi-page-container">
        {/* Header */}
        <div className="mi-resume-v2-header">
          <div>
            <p className="mi-section-label">Resume</p>
            <h1 className="mi-section-heading">
              Experience &amp; <span className="mi-gradient-text">Skills</span>
            </h1>
          </div>
          <a href="/files/KayleiBurkeResume.pdf" download className="mi-btn-primary">
            <Download size={18} /> Download PDF
          </a>
        </div>

        {/* Skills */}
        <section className="mi-resume-v2-section">
          <h2 className="mi-section-line-heading">Skills</h2>
          <div className="mi-resume-v2-skills-grid">
            {skills.map((group) => (
              <div key={group.category} className="mi-card mi-resume-v2-skill-card">
                <p className="mi-resume-v2-skill-category">{group.category}</p>
                <div className="mi-resume-v2-skill-tags">
                  {group.items.map((item) => (
                    <span key={item} className="mi-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="mi-resume-v2-section">
          <h2 className="mi-section-line-heading">Work Experience</h2>
          <div className="mi-resume-v2-timeline">
            <div className="mi-resume-v2-timeline-line" />
            {workingExperience.map((job) => (
              <div key={job.id} className="mi-resume-v2-entry">
                <div className="mi-resume-v2-dot">
                  <div className="mi-resume-v2-dot-inner" />
                </div>
                <div className="mi-card mi-resume-v2-card">
                  <div className="mi-resume-v2-card-header">
                    <div>
                      <h3 className="mi-resume-v2-job-title">{job.position}</h3>
                      <p className="mi-resume-v2-job-company">{job.company}</p>
                      {job.companyNote && (
                        <p className="mi-resume-v2-job-note">{job.companyNote}</p>
                      )}
                    </div>
                    <span className="mi-badge">{job.year}</span>
                  </div>
                  <ul className="mi-resume-v2-bullets">
                    {Array.isArray(job.details)
                      ? job.details.map((d, i) => (
                          <li key={i} className="mi-resume-v2-bullet">
                            <span className="mi-resume-v2-bullet-icon">›</span>
                            <span>{d}</span>
                          </li>
                        ))
                      : <li className="mi-resume-v2-bullet"><span className="mi-resume-v2-bullet-icon">›</span><span>{job.details}</span></li>
                    }
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mi-resume-v2-section">
          <h2 className="mi-section-line-heading">Education</h2>
          {educationExperience.map((edu) => (
            <div key={edu.id} className="mi-card mi-resume-v2-edu-card">
              <div className="mi-resume-v2-edu-inner">
                <div className="mi-icon-box mi-resume-v2-edu-icon">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="mi-resume-v2-job-title">{edu.degree}</h3>
                  <p className="mi-resume-v2-job-company">{edu.institution}</p>
                  <p className="mi-resume-v2-edu-year">{edu.year}</p>
                  <div className="mi-resume-v2-edu-award">
                    <Award size={15} className="mi-resume-v2-award-icon" />
                    <p>{edu.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
}

export default Resumes;
