import React, { Suspense, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import PortfoliosView from "../components/PortfoliosView";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";

function Portfolios() {
  const projectData = [
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
      subtitle: `A Ruby on Rails and React application, featuring user management and API integration. This project was created by <a href="https://github.com/beehiiv/challenge" target="_blank" rel="noopener noreferrer">Beehiiv</a> and modified as per their coding challenge instructions. See original project instructions <a href="https://github.com/kayleiburke/kaylei-burke-beehiiv-challenge/blob/kaylei-burke-challenge/README.md#project-requirements" target="_blank" rel="noopener noreferrer">here</a> and login credentials <a href="https://github.com/kayleiburke/kaylei-burke-beehiiv-challenge/blob/kaylei-burke-challenge/README.md#login-credentials" target="_blank" rel="noopener noreferrer">here</a>.`,
      imageUrl: "/images/beehiiv-challenge-app.png",
      githubUrl: "https://github.com/kayleiburke/kaylei-burke-beehiiv-challenge",
      url: "https://beehiiv-challenge-kaylei-burke-e3444692c205.herokuapp.com/"
    }
  ];

  const [portfolios, setPortfolios] = useState(projectData);
  const [currentPage, setCurrentPage] = useState(1);
  const [portfoliosPerPage] = useState(9);

  const indexOfLastPortfolios = currentPage * portfoliosPerPage;
  const indexOfFirstPortfolios = indexOfLastPortfolios - portfoliosPerPage;
  const currentPortfolios = portfolios.slice(
      indexOfFirstPortfolios,
      indexOfLastPortfolios
  );

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
      <Layout>
        <Helmet>
          <title>Portfolios - Kaylei Burke</title>
          <meta name="description" content="Kaylei Burke Portfolios Page" />
        </Helmet>
        <Suspense fallback={<Spinner />}>
          <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
            <div className="container">
              <Sectiontitle title="Portfolios" />
              <PortfoliosView portfolios={currentPortfolios} />
              {!(portfolios.length > portfoliosPerPage) ? null : (
                  <Pagination
                      className="mt-50"
                      itemsPerPage={portfoliosPerPage}
                      totalItems={portfolios.length}
                      paginate={paginate}
                      currentPage={currentPage}
                  />
              )}
            </div>
          </div>
        </Suspense>
      </Layout>
  );
}

export default Portfolios;
