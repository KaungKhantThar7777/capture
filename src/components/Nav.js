import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
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
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
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
    }
  }
`;

export default Nav;
