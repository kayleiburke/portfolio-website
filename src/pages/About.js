import axios from "axios";
import FsLightbox from "fslightbox-react";
import React, { Suspense, useEffect, useState } from "react";
import * as Icon from "react-feather";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Service from "../components/Service";
import Spinner from "../components/Spinner";
import Testimonial from "../components/Testimonial";
import { Image } from "../components/common/Image";
import { Link } from "react-router-dom";

function About() {
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState("");
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleToggler = (event) => {
    setToggler(!toggler);
  };

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
    axios.get("/api/services").then((response) => {
      setServices(response.data);
    });
    axios.get("/api/reviews").then((response) => {
      setReviews(response.data);
    });
  }, []);

  return (
      <Layout>
        <Helmet>
          <title>About - Kaylei Burke</title>
          <meta
              name="description"
              content="Kaylei Burke About Page"
          />
        </Helmet>
        <Suspense fallback={<Spinner />}>
          <div className="mi-about-area mi-section mi-padding-top">
            <div className="container">
              <Sectiontitle title="About Me" />
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="mi-about-image">
                    <Image
                        src={information.aboutImage}
                        loader="/images/about-image-placeholder.png"
                        alt="aboutimage"
                        onClick={() => handleToggler(!toggler)}
                    />
                    <span className="mi-about-image-icon">
                    <Icon.ZoomIn />
                  </span>
                    <FsLightbox
                        toggler={toggler}
                        sources={[information.aboutImageLg]}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mi-about-content">
                    <h3>
                      Hi! I'm <span className="color-theme">{information.name}</span>
                    </h3>
                    <p>

                      Throughout my career, I've contributed to a range of complex Ruby on Rails projects across various organizations, delivering scalable, high-quality solutions. I have built and managed several Rails applications, including custom CRMs, ERP systems, and digital storefronts. My experience includes balancing multiple roles across software development, infrastructure, and DevOps, working closely with cloud providers to optimize environments and ensure smooth deployments.
                    </p>
                    <p>
                      Currently, I am a senior developer at the New York Public Library, where I developed a custom Shibboleth Single Sign-On solution integrated with the Sierra ILS. This project required extensive research and collaboration to overcome challenges in modifying Shibboleth configurations and integrating with HathiTrust, enabling library patrons to access a vast repository of digitized texts.
                    </p>
                    <p>
                      Reach out to me through the <Link to="/contact">contact page</Link> page if you'd like to collaborate, discuss projects, or connect!  🎉
                    </p>
                    <a href={information.cvfile} className="mi-button">
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mi-service-area mi-section mi-padding-top">
            {/*<div className="container">
              <Sectiontitle title="Services" />
              <div className="mi-service-wrapper">
                <div className="row mt-30-reverse">
                  <div className="col-lg-4 col-md-6 col-12 mt-30">
                    <Service content={{ title: "Full-Stack Development", description: "Developing scalable, maintainable applications using Ruby on Rails, JavaScript, and cloud-based services." }} />
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 mt-30">
                    <Service content={{ title: "Cloud Infrastructure Management", description: "Managing and optimizing AWS environments with EC2, Lambda, CodePipeline, and ECS." }} />
                  </div>
                  <div className="col-lg-4 col-md-6 col-12 mt-30">
                    <Service content={{ title: "Custom SSO Integrations", description: "Building and integrating custom SSO solutions, including Shibboleth and API-based authentication." }} />
                  </div>
                </div>
              </div>
            </div>*/}
          </div>
          {/*<div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
            <div className="container">
              <Sectiontitle title="Reviews" />
              <div className="row justify-content-center">
                <div className="col-12">
                  <Slider className="mi-testimonial-slider" {...sliderSettings}>
                    {reviews.map((review) => (
                        <Testimonial key={review.id} content={review} />
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>*/}
        </Suspense>
      </Layout>
  );
}

export default About;
