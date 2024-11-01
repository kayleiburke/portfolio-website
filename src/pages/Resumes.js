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
        "Supported a custom metadata management system written in Ruby on Rails.",
        "Implemented a custom-built Shibboleth SSO application connected to Sierra ILS for use among patrons across the library."
      ],
    },
    {
      id: 2,
      year: "10/2021 - 06/2023",
      position: "Senior Software Engineer",
      company: "Techstreet",
      details: [
        "Managed Level 3 support tickets, including database fixes and feature enhancements.",
        "Completed more than 650 support tickets, many involving querying or modifying live production code or database data.",
        "Supported SSO integration with storefront sites, using the ruby-saml gem for compatibility with Okta, OpenAthens, and Azure.",
        "Helped manage applications daily in AWS, using EC2, Amplify, ECS, Lambda, CloudWatch, Athena, CodeBuild, and CodePipeline."
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
        "Supported payroll, billing, freight management, routing, and customer surveys for J.B. Hunt’s Dedicated Contract Services.",
        "Enhanced an automated customer satisfaction survey system by gathering and refining user requirements and constructing advanced SQL queries."
      ],
    },
    {
      id: 8,
      year: "09/2013 - 09/2014",
      position: "Software Developer",
      company: "J.B. Hunt",
      details: [
        "Supported various systems including payroll, freight management, and order processing applications, providing on-call service and implementing bug fixes.",
        "Enhanced a customer satisfaction survey system with custom criteria for call survey records."
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
              <Smalltitle title="Working Experience" icon="briefcase" />
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
