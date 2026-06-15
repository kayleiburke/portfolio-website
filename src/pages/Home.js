import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Socialicons from "../components/Socialicons";

function Home() {
  const [information, setInformation] = useState("");

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
        <div className="mi-home-content">
          <span className="mi-home-label">
            Senior Software Engineer &amp; Technical Lead
          </span>
          <h1>
            Hi, I&apos;m{" "}
            <span className="color-theme">{information.name}</span>
          </h1>
          <p>{information.aboutContent}</p>
          <div className="mi-home-buttons">
            <Link to="/portfolios" className="mi-button">
              View My Work
            </Link>
            <Link to="/contact" className="mi-button-outline">
              Get In Touch
            </Link>
          </div>
          <Socialicons bordered />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
