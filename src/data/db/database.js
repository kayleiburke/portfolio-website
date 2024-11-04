import Mock from "../mock";

const database = {
  information: {
    name: "Kaylei Burke",
    aboutContent:
      "I'm a software developer specializing in building scalable, secure solutions with Ruby on Rails, AWS, and javascript frameworks.",
    age: 24,
    phone: "",
    nationality: "American",
    language: "English, French",
    email: "",
    address: "121 King Street, Melbourne, Australia",
    freelanceStatus: "Available",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/kayleiburke",
      github: "https://github.com/kayleiburke",
    },
    brandImage: "/images/kayleiburke.jpg",
    aboutImage: "/images/about-image.jpg",
    aboutImageLg: "/images/about-image-lg.jpg",
    cvfile: "/files/KayleiBurkeResume.pdf",
  },
  services: [
    {
      title: "Web Design",
      icon: "brush-alt",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
    {
      title: "Web Development",
      icon: "code",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
    {
      title: "Mobile Application",
      icon: "mobile",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
  ],
  reviews: [
    {
      id: 1,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: "Burdette Turner",
        designation: "Web Developer, Abc Company",
      },
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: "Susan Yost",
        designation: "Client",
      },
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: "Irving Feeney",
        designation: "Fiverr Client",
      },
    },
  ],
  skills: [
    { title: "Ruby on Rails", value: 80 },
    { title: "JavaScript", value: 50 },
    { title: "SQL", value: 70 },
    { title: "AWS", value: 70 },
    { title: "CSS", value: 50 },
    { title: "HTML", value: 60 }
  ],
  portfolios: [
    {
      id: 1,
      title: "Portfolio Website",
      subtitle: `This website! Built with React, and deployed with AWS. Based on the <a href="https://themeforest.net/item/chester-react-personal-portfolio-template/24952954?utm_source=Iterable&utm_medium=email&utm_campaign=market_email_workflow_t_orderconfirmation_all" target="_blank" rel="noopener noreferrer">Chester React Personal Portfolio Template</a>`,
      imageUrl: "/images/portfolio-website.png",
      githubUrl: "https://github.com/kayleiburke/portfolio-website",
      url: "https://kayleiburke.com"
    },
    {
      id: 2,
      title: "Weather Forecaster",
      subtitle: "A sample Ruby on Rails app that provides real-time weather updates, leveraging OpenWeather and Geocodio APIs",
      imageUrl: "/images/weather-forecaster-app.png",
      githubUrl: "https://github.com/kayleiburke/weather-forecaster",
      url: "https://weather-forecaster-116cd0fccb32.herokuapp.com/"
    },
    {
      id: 3,
      title: "Sample Meetup Site",
      subtitle: "A sample Ruby on Rails app allowing users to create and manage meetup groups, featuring CSV bulk uploads and role-based permissions",
      imageUrl: "/images/sample-meetup-app.png",
      githubUrl: "https://github.com/kayleiburke/sample-meetup",
      url: "https://sample-meetup-site-heroku-22.herokuapp.com/"
    },
    {
      id: 4,
      title: "Movie Search",
      subtitle: "A small Ruby on Rails app that interacts with the OMDB API to search and display information about movies",
      imageUrl: "/images/movie-search-app.png",
      githubUrl: "https://github.com/kayleiburke/movie-search",
      url: "https://omdb-database-search-demo.herokuapp.com/"
    },
    {
      id: 5,
      title: "PaymentSpring Demo",
      subtitle: "An authenticated Vue application with a Ruby on Rails back end that processes sample payments through PaymentSpring",
      imageUrl: "/images/payment-spring-demo-app.png",
      githubUrl: "https://github.com/kayleiburke/paymentspring-demo",
      url: "https://payment-spring-demo.herokuapp.com/",
      backendUrl: "https://github.com/kayleiburke/paymentspring-demo-backend"
    },
    {
      id: 6,
      title: "Beehiiv Challenge",
      subtitle: `A Ruby on Rails and React application, featuring user management and API integration. This project was created by <a href="https://github.com/beehiiv/challenge" target="_blank" rel="noopener noreferrer">Beehiiv</a> and modified as per their coding challenge instructions. See original project instructions <a href="https://github.com/kayleiburke/kaylei-burke-beehiiv-challenge/blob/kaylei-burke-challenge/README.md#project-requirements" target="_blank" rel="noopener noreferrer">here</a>, and login credentials <a href="https://github.com/kayleiburke/kaylei-burke-beehiiv-challenge/blob/kaylei-burke-challenge/README.md#login-credentials" target="_blank" rel="noopener noreferrer">here</a>.`,
      imageUrl: "/images/beehiiv-challenge-app.png",
      githubUrl: "https://github.com/kayleiburke/kaylei-burke-beehiiv-challenge",
      url: "https://beehiiv-challenge-kaylei-burke-e3444692c205.herokuapp.com/"
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "08/2024 - 10/2024",
        position: "Senior Ruby on Rails Developer (Contractor)",
        company: "New York Public Library",
        details: [
          "Contributed to the development and maintenance of a metadata management system in Ruby on Rails that populated content for the Digital Collections platform, NYPL's online archive of digitized books, images, and artifacts.",
          "Led the integration of a custom Shibboleth Single Sign-On (SSO) solution to enable seamless authentication for library patrons.",
          "Developed a solution for Shibboleth to authenticate directly through Sierra ILS by leveraging the Sierra API for validating user credentials (barcode and PIN) and dynamically retrieving patron data. ",
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
    ],
    educationExperience: [
      {
        id: 1,
        year: "08/2007 - 05/2011",
        degree: "Bachelor of Science in Computer Science",
        institution: "University of Nebraska-Lincoln",
        details: "Upsilon Pi Epsilon Honor Society - President for 2 years.",
      }
    ],
  },
  blogs: [
    {
      id: 1,
      title: "Markdown & Html supported blog.",
      featuredImage: "/images/rocket.jpg",
      filesource: "../../blog/markdown-html-supported-blog.md",
      createDay: "3",
      createMonth: "November",
      createYear: "2024",
    }
  ],
  contactInfo: {
    phoneNumbers: ["+1 402-909-3286"],
    emailAddress: ["kaylei.burke@gmail.com"],
    address: "Omaha, Nebraska",
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
