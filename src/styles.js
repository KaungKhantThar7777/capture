import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledAbout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem;
    button {
      margin: 1rem 0rem 3rem;
    }
  }
`;

export const StyledDescription = styled.div`
  flex: 1;
  margin-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  p {
    line-height: 150%;
  }
  @media (max-width: 1300px) {
    margin: 1rem 2rem;
  }
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;

export const StyledImage = styled(motion.div)`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    @media (max-width: 1300px) {
      height: 60vh;
    }
  }
`;
