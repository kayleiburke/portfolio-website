import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Resume from "../components/Resume";
import Sectiontitle from "../components/Sectiontitle";
import Smalltitle from "../components/Smalltitle";
import Spinner from "../components/Spinner";

function Resumes() {
  const [skills, setSkills] = useState([]);
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);

  useEffect(() => {
    axios.get("/api/skills").then((response) => {
      setSkills(response.data);
    });
    axios.get("/api/experience").then((response) => {
      setWorkingExperience(response.data.workingExperience);
      setEducationExperience(response.data.educationExperience);
    });
  }, []);

  return (
      <Layout>
        <Helmet>
          <title>Resume - Kaylei Burke</title>
          <meta
              name="description"
              content="Kaylei Burke's Resume Page"
          />
        </Helmet>
        <Suspense fallback={<Spinner />}>
          <div className="mi-skills-area mi-section mi-padding-top">
            <div className="container">
              <Sectiontitle title="My Skills" />
              <div className="mi-skills-categories">
                {skills.map((skillGroup) => (
                  <div className="mi-skill-category" key={skillGroup.category}>
                    <h6 className="mi-skill-category-title">{skillGroup.category}</h6>
                    <div className="mi-skill-tags">
                      {skillGroup.items.map((item) => (
                        <span className="mi-skill-tag" key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
            <div className="container">
              <Sectiontitle title="Resume" />
              <Smalltitle title="Work Experience" icon="briefcase" />
              <div className="mi-resume-wrapper">
                {workingExperience.map((workingExp) => (
                    <Resume key={workingExp.id} resumeData={workingExp} />
                ))}
              </div>
              <div className="mt-30"></div>
              <Smalltitle title="Educational Qualifications" icon="book" />
              <div className="mi-resume-wrapper">
                {educationExperience.map((educatonExp) => (
                    <Resume key={educatonExp.id} resumeData={educatonExp} />
                ))}
              </div>
            </div>
          </div>
        </Suspense>
      </Layout>
  );
}

export default Resumes;
