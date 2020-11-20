import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import React from "react";
import About from "../components/About";
import Faq from "../components/Faq";
import Services from "../components/Services";
import { ScrollTop } from "../hooks/useScroll";

const HomePage = () => {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <About />
      <Services />
      <Faq />
      <ScrollTop />
    </motion.div>
  );
};

export default HomePage;
