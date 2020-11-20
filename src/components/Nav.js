import { motion } from "framer-motion";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Line
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "80%" : "0%" }}
            transition={{ duration: 0.75 }}
          />
        </li>
        <li>
          <Link to="/work">Our Work</Link>
          <Line
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "80%" : "0%" }}
            transition={{ duration: 0.75 }}
          />
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <Line
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "80%" : "0%" }}
            transition={{ duration: 0.75 }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 3;
  @media (max-width: 1300px) {
    display: block;
    text-align: center;
    padding: 1rem;
    #logo {
      display: inline-block;
      font-size: 2rem;
      padding: 1rem;
    }
  }
  a {
    color: white;
    text-decoration: none;
  }
  #logo {
    font-size: 1.8rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    li {
      margin-left: 3rem;
      padding: 1rem;
      position: relative;
    }
  }
`;

const Line = styled(motion.div)`
  width: 0%;
  height: 0.3rem;
  background-color: #23d997;
  position: absolute;
  bottom: 15%;
  left: 10%;
`;
export default Nav;
