import React from "react";

function Resume(props) {
    const { year, position, graduation, degree, university, institution, company, companyNote, details } = props.resumeData;
    return (
        <div className="mi-resume mt-30">
            <div className="mi-resume-summary">
                <h6 className="mi-resume-year">{year}</h6>
            </div>
            <div className="mi-resume-details">
                <h5>{position || graduation || degree}</h5>
                <h6 className="mi-resume-company">{company || university || institution}</h6>
                {companyNote && <p className="mi-resume-company-note">{companyNote}</p>}
                {Array.isArray(details) ? (
                    <ul>
                        {details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{details}</p>
                )}
            </div>
        </div>
    );
}

export default Resume;
