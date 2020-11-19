import { motion } from "framer-motion";
import React from "react";
import { fade, titleAnim } from "../animation";
import home1 from "../img/home1.png";
import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from "../styles";
import Wave from "./Wave";

const About = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}> come true.</motion.h2>
          </StyledHide>
        </div>
        <motion.p variants={fade}>
          Contact us for any photography and videography ideas.We will make any
          ideas to real case professionally
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="A guy with camera" />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default About;
