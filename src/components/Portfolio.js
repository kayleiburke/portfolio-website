import FsLightbox from "fslightbox-react";
import React, { useState } from "react";
import * as Icon from "react-feather";
import { Image } from "./common/Image";

function Portfolio(props) {
    const [toggler, setToggler] = useState(false);
    const { title, subtitle, imageUrl, largeImageUrl, githubUrl, url, creditsUrl } = props.content;

    const handleToggler = (value) => {
        setToggler(value);
    };

    return (
        <div className="mi-portfolio mi-portfolio-visible">
            <div className="mi-portfolio-image">
                <Image
                    src={imageUrl}
                    loader="/images/portfolio-image-placeholder.png"
                    alt={title}
                />
                <ul>
                    {/* Image Zoom Icon */}
                    {!largeImageUrl ? null : (
                        <li>
                            <button onClick={() => handleToggler(!toggler)}>
                                <Icon.ZoomIn />
                            </button>
                        </li>
                    )}
                    {/* Deployed Site Link Icon */}
                    {url && (
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href={url} title="View Deployed Site">
                                <Icon.Link />
                            </a>
                        </li>
                    )}
                    {/* GitHub Code Link Icon */}
                    {githubUrl && (
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href={githubUrl} title="View Code on GitHub">
                                <Icon.GitHub />
                            </a>
                        </li>
                    )}
                    {/* Template Credit Link Icon */}
                    {creditsUrl && (
                        <li>
                            <a rel="noopener noreferrer" target="_blank" href={creditsUrl} title="View Template Credit">
                                <Icon.ExternalLink />
                            </a>
                        </li>
                    )}
                </ul>
            </div>
            <h5>{title}</h5>
            {subtitle && <h6>{subtitle}</h6>}
            {largeImageUrl && (
                <FsLightbox toggler={toggler} sources={largeImageUrl} />
            )}
        </div>
    );
}

export default Portfolio;
