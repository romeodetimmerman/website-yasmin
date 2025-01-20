import React from "react";
import contentData from "../content.json";
import { Fade } from "react-awesome-reveal";

const Education = () => {
  const education = contentData.academics;

  return (
    <Fade triggerOnce={true}>
      <section id="education" className="education-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box">
                <h3 className="title-a">
                  {education.section.title} <div className="line-mf"></div>
                </h3>
                <p className="subtitle-a">{education.section.description}</p>
              </div>
            </div>
          </div>
          <div className="row">
            {education.degrees.map((degree, index) => (
              <div
                className="col-sm-12 col-md-12 mb-4"
                key={index}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Fade delay={index * 200} cascade={false} triggerOnce={true}>
                  <div className="education-box">
                    <h4 className="education-degree">{degree.degree}</h4>
                    <p className="education-school">{degree.school}</p>
                    <p className="education-years">
                      {degree.start_year} - {degree.end_year}
                    </p>
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Education;