import React from "react";
import styled from "styled-components";

import home2 from "../img/home2.png";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import { StyledAbout, StyledDescription, StyledImage } from "../styles";
import { scrollReveal } from "../animation";
import { useScroll } from "../hooks/useScroll";

const Services = () => {
  const [element, controls] = useScroll();

  return (
    <StyledServices
      ref={element}
      variants={scrollReveal}
      initial="hidden"
      animate={controls}
    >
      <StyledDescription>
        <h2>
          High <span>quality</span> services
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img src={clock} alt="clock-icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={teamwork} alt="teamwork-icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm-icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={money} alt="clock-icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={home2} alt="camera" />
      </StyledImage>
    </StyledServices>
  );
};

const StyledServices = styled(StyledAbout)`
  h2 {
    margin-bottom: 5rem;
    font-size: 3rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }

  @media (max-width: 1400px) {
    display: block;
    p {
      width: 100%;
      padding: 1rem;
    }
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 1300px) {
    justify-content: space-between;
  }
`;
const StyledCard = styled.div`
  flex-basis: 15rem;

  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background-color: white;
      padding: 1rem;
      color: #1b1b1b;
    }
    p {
      width: 100%;
    }
  }

  @media (max-width: 1300px) {
    flex-basis: 10rem;
  }
`;
export default Services;
