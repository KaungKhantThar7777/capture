import React from "react";
import styled from "styled-components";
import { StyledAbout } from "../styles";

const Faq = () => {
  return (
    <StyledFaq>
      <h2>
        Ask Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>Where to Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, modi.
          </p>
        </div>
        <div className="faq-line"> </div>
      </div>
      <div className="question">
        <h4>Needed prequisites?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, modi.
          </p>
        </div>
        <div className="faq-line"> </div>
      </div>
      <div className="question">
        <h4>How many kinds of cost?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, modi.
          </p>
        </div>
        <div className="faq-line"> </div>
      </div>
      <div className="question">
        <h4>Good Communicating Skills?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, modi.
          </p>
        </div>
        <div className="faq-line"> </div>
      </div>
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
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;

export default Faq;
