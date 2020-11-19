import React from "react";
import home1 from "../img/home1.png";
import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from "../styles";

const About = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams</span>
            </h2>
          </StyledHide>
          <StyledHide>
            <h2> come true.</h2>
          </StyledHide>
        </div>
        <p>
          Contact us for any photography and videography ideas.We will make any
          ideas to real case professionally
        </p>
        <button>Contact us</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="A guy with camera" />
      </StyledImage>
    </StyledAbout>
  );
};

export default About;
