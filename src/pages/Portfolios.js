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
      subtitle: "This website! Built with React, and leveraging AWS ECS and Nginx for containerized deployment",
      imageUrl: "/images/portfolio-website.png",
      githubUrl: "https://github.com/kayleiburke/portfolio-website",
      url: "https://kayleiburke.com"
    },
    {
      id: 2,
      title: "Weather Forecaster App",
      subtitle: "A sample Rails app that provides real-time weather updates, leveraging OpenWeather and Geocodio APIs",
      imageUrl: "/images/weather-forecaster-app.png",
      githubUrl: "https://github.com/kayleiburke/weather-forecaster",
      url: "https://weather-forecaster-116cd0fccb32.herokuapp.com/"
    },
    {
      id: 3,
      title: "Sample Meetup Site",
      subtitle: "A sample Rails app allowing users to create and manage meetup groups, featuring CSV bulk uploads and role-based permissions.",
      imageUrl: "/images/sample-meetup-app.png",
      githubUrl: "https://github.com/kayleiburke/sample-meetup",
      url: "https://sample-meetup-site-heroku-22.herokuapp.com/"
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
