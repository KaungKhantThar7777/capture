import React from "react";
import About from "../components/About";
import Faq from "../components/Faq";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <React.Fragment>
      <About />
      <Services />
      <Faq />
    </React.Fragment>
  );
};

export default HomePage;
