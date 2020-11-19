import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContactUspage = () => {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <h1>Contact Us page</h1>
    </motion.div>
  );
};

export default ContactUspage;
