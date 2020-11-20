import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  fade,
  lineAnim,
  pageAnimation,
  photoAnim,
  sliderAnim,
  sliderContainerAnim,
} from "../animation";

import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { Link } from "react-router-dom";
import { StyledHide } from "../styles";
import { useScroll } from "../hooks/useScroll";

const OurWorkPage = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      exit="exit"
      animate="show"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainerAnim}>
        <Frame1 variants={sliderAnim} />
        <Frame2 variants={sliderAnim} />
        <Frame3 variants={sliderAnim} />
        <Frame4 variants={sliderAnim} />
      </motion.div>

      <StyledMovie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <StyledHide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </StyledHide>
        </Link>
      </StyledMovie>
      <StyledHide>
        <StyledMovie
          ref={element}
          variants={fade}
          initial="hidden"
          animate={controls}
        >
          <motion.h2>The Racer</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/the-racer">
            <motion.img variants={photoAnim} src={theracer} alt="theracer" />
          </Link>
        </StyledMovie>
      </StyledHide>

      <StyledHide>
        <StyledMovie
          ref={element2}
          variants={fade}
          initial="hidden"
          animate={controls2}
        >
          <motion.h2>Good Times</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/good-times">
            <motion.img variants={photoAnim} src={goodtimes} alt="goodtimes" />
          </Link>
        </StyledMovie>
      </StyledHide>
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  color: #000;
`;
const StyledMovie = styled(motion.div)`
  padding-bottom: 5rem;
  h2 {
    padding: 1rem 0rem;
  }
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #ff8efb;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #fffebf;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWorkPage;
