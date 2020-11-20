import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import { StyledHide } from "../styles";

const ContactUspage = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <StyledHide>
        <StyledTitle variants={titleAnim}>Get in touch</StyledTitle>
      </StyledHide>

      <StyledHide>
        <StyledSocial variants={titleAnim}>
          <StyledCircle />
          <h4>Send me a message</h4>
        </StyledSocial>
      </StyledHide>
      <StyledHide>
        <StyledSocial variants={titleAnim}>
          <StyledCircle />
          <h4>Send me an email</h4>
        </StyledSocial>
      </StyledHide>
      <StyledHide>
        <StyledSocial variants={titleAnim}>
          <StyledCircle />
          <h4>Follow on social media</h4>
        </StyledSocial>
      </StyledHide>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  min-height: 90vh;
  color: #353535;
  @media (max-width: 1300px) {
    padding: 2rem;
    min-height: 80vh;
  }
`;

const StyledTitle = styled(motion.h2)`
  color: black;
  margin-bottom: 4rem;
`;

const StyledCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #353535;
  margin: 0rem 0.5rem;
`;
const StyledSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export default ContactUspage;
