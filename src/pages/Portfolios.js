import React, {Suspense, useEffect, useState} from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import PortfoliosView from "../components/PortfoliosView";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";
import axios from "axios";

function Portfolios() {
  const [portfolios, setPortfolios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [portfoliosPerPage] = useState(9);

  const indexOfLastPortfolios = currentPage * portfoliosPerPage;
  const indexOfFirstPortfolios = indexOfLastPortfolios - portfoliosPerPage;
  const currentPortfolios = portfolios.slice(
      indexOfFirstPortfolios,
      indexOfLastPortfolios
  );

  useEffect(() => {
    axios.get("/api/portfolios").then((response) => {
      setPortfolios(response.data);
    });
  }, []);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
      <Layout>
        <Helmet>
          <title>Portfolio - Kaylei Burke</title>
          <meta name="description" content="Kaylei Burke Portfolios Page" />
        </Helmet>
        <Suspense fallback={<Spinner />}>
          <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
            <div className="container">
              <Sectiontitle title="Portfolio" />
              <p className="mi-portfolio-intro">A collection of personal and sample projects built over the years to explore different technologies and frameworks.</p>
              <p className="mi-portfolio-intro">These are independently deployed but not representative of the scale or complexity of my professional work.</p>
              <p className="mi-portfolio-note"><strong>Note:</strong> <em>Heroku-hosted projects may take up to 30 seconds to load on first visit due to cold starts on free-tier dynos.</em></p>
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
