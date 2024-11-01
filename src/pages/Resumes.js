import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import TrackVisibility from "react-on-screen";
import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Resume from "../components/Resume";
import Sectiontitle from "../components/Sectiontitle";
import Smalltitle from "../components/Smalltitle";
import Spinner from "../components/Spinner";

function Resumes() {
  const skills = [
    { title: "Ruby on Rails", value: 80 },
    { title: "JavaScript", value: 50 },
    { title: "SQL", value: 70 },
    { title: "AWS", value: 70 },
    { title: "CSS", value: 50 },
    { title: "HTML", value: 60 },
  ];

  const workingExperience = [
    {
      id: 1,
      year: "08/2024 - 10/2024",
      position: "Senior Ruby on Rails Developer (Contractor)",
      company: "New York Public Library",
      details: [
        "Led the integration of a custom Shibboleth Single Sign-On (SSO) solution to enable seamless authentication for library patrons.",
        "Developed a solution for Shibboleth to authenticate directly through the Sierra ILS, which does not support LDAP, by leveraging the Sierra API for validating user credentials (barcode and PIN) and dynamically retrieving patron data.",
        "Collaborated closely with DevOps to set up Docker-based and EC2 testing environments, building the custom Shibboleth configuration from scratch.",
        "Managed the upgrade process from Shibboleth v3 to v5, enhancing security and creating a foundation for future integrations with resources like HathiTrust and internal NYPL applications.",
        "Successfully completed HathiTrust integration, enabling patrons to access thousands of digitized academic resources with their library credentials."
      ],
    },
    {
      id: 2,
      year: "10/2021 - 06/2023",
      position: "Senior Software Engineer",
      company: "Techstreet",
      details: [
        "Supported several Ruby on Rails applications (versions 1-6), including custom storefronts, CRM, ERP, order tracking, and digital product management systems. I was primarily in charge of managing the Level 3 support ticket queue - which involved regular database and bug fixes by directly modifying code on our EC2 instances, running custom scripts, manipulating data through Rails console, and generating complex reports in Oracle, Postgres, MySQL, and MongoDB.",
        "Completed more than 650 support tickets, many of which involved querying or modifying live production code or database data",
        "Completed numerous feature enhancements, including integration with PDF Repair and Optimization tools into our custom product management system.",
        "Helped create a custom Ruby on Jets CRM application with a new development team from the ground up",
        "Played a pivotal role in support of SSO integration with storefront sites - including compatibility with Okta, OpenAthens, and Azure - using the ruby-saml gem. We supported both IdP and SP-initiated logins.",
        "Helped manage applications on a daily basis in AWS using EC2 (for Rails applications), Amplify (for Angular applications), ECS (for Java applications), Lambda (for Ruby on Jets application), CloudWatch (for Lambda and ECS debugging), Athena (querying SES logs), and Code Build and Code Pipeline for continuous integration with Github projects."
      ],
    },
    {
      id: 3,
      year: "10/2020 - 04/2021",
      position: "Software Developer",
      company: "Unabridged Software",
      details: [
        "Created custom Ruby on Rails applications for clients.",
        "Added file attachment functionality to a custom CRM application, enabling file management and activity tracking for users.",
        "Collaborated with a UI/UX designer to customize user experience and implemented test suites using RSpec, Minitest, and Capybara."
      ],
    },
    {
      id: 4,
      year: "08/2018 - 01/2019",
      position: "Software Developer (Contractor)",
      company: "5&2 Studio",
      details: [
        "Used C#, Vue.js, and Ruby on Rails to customize customer-facing and ERP websites for clients.",
        "Collaborated with executives to build new features, including a replacement website for PhysEmp, a job search engine for doctors."
      ],
    },
    {
      id: 5,
      year: "02/2016 - 07/2018",
      position: "Software Developer",
      company: "Voxtelesys",
      details: [
        "Developed internal and external data management web applications using Ruby on Rails, Angular, and Vue.js.",
        "Led development of a customer portal website, creating a Vue.js frontend and Ruby on Rails API backend.",
        "Worked closely with UI/UX and marketing experts to enhance the Bootstrap theme with customizations."
      ],
    },
    {
      id: 6,
      year: "03/2015 - 10/2015",
      position: "Software Developer",
      company: "Mersoft Corporation",
      details: [
        "Replaced a client's ERP, sales, and marketing platform with a new application built in Ruby on Rails and PostgreSQL, integrated with Joomla CMS.",
        "Learned Ruby on Rails rapidly and worked daily with the architect, engaging with clients and authoring user documentation."
      ],
    },
    {
      id: 7,
      year: "10/2014 - 03/2015",
      position: "Software Developer (Contractor)",
      company: "YRC Freight",
      details: [
        "Created, modified, and managed financial reports using SAS, VBA, R, and JCL, providing critical insights for executives.",
        "Built a consolidated historical dataset of common operating metrics using SAS and R, which improved data accessibility for analysis.",
        "Enabled efficient analysis of scattered data by centralizing operating metrics for better decision-making support."
      ],
    },
    {
      id: 8,
      year: "09/2013 - 09/2014",
      position: "Software Developer",
      company: "J.B. Hunt",
      details: [
        "Supported various systems including payroll, freight management, and order processing applications, providing on-call service and implementing bug fixes.",
        "Enhanced an automated customer satisfaction survey system by gathering and refining user requirements and constructing advanced SQL queries.",
        "Languages and tools used at this position included: C#, Java, SSRS, T-SQL, and DB2."
      ],
    },
  ];

  const educationExperience = [
    {
      id: 1,
      year: "08/2007 - 05/2011",
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Nebraska-Lincoln",
      details: "Upsilon Pi Epsilon Honor Society - President for 2 years.",
    },
  ];

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
              <div className="mi-skills">
                <div className="row mt-30-reverse">
                  {skills.map((skill) => (
                      <TrackVisibility
                          once
                          className="col-lg-6 mt-30"
                          key={skill.title}
                      >
                        <Progress title={skill.title} percentage={skill.value} />
                      </TrackVisibility>
                  ))}
                </div>
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
