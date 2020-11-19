import { AnimateSharedLayout } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { StyledAbout } from "../styles";
import Toggle from "./Toggle";

const Faq = () => {
  return (
    <StyledFaq>
      <h2>
        Ask Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Where to Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              modi.
            </p>
          </div>
        </Toggle>
        <Toggle title="Needed prequisites?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              modi.
            </p>
          </div>
        </Toggle>
        <Toggle title="How many kinds of cost?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              modi.
            </p>
          </div>
        </Toggle>
        <Toggle title="Good Communicating Skills?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              modi.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding: 2rem 0;
  }
  .faq-line {
    width: 100%;
    height: 0.2rem;
    background-color: #cccccc;
    margin: 2rem 0;
  }
  .question {
    padding: 1rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 1rem 0;
    p {
      padding: 0.3rem 0;
    }
  }
`;

export default Faq;
