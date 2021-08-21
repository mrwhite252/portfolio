import React from "react";
import home1 from "../img/home1.png";

// styled

// import styled from "styled-components";

// framer motion

import { motion } from "framer-motion";

import { About, Description, Image, Hide } from "../style";

const AboutSection = () => {
  // // framer motion vairants

  // const titleAnim = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1, transition: { duration: 2 } },
  // };

  // // when use staggerChildren inside the parent, it will automatically stagger the animation in the parent and the children together.

  // const container = {
  //   hidden: { x: 100 },
  //   show: {
  //     x: 0,
  //     transition: { duration: 0.75, ease: "easeOut", staggerChildren: 1 },
  //   },
  // };

  return (
    <About>
      <Description>
        <motion.div
        // variants={container}
        // initial="hidden"
        // animate="show"
        // className="title"
        >
          <div className="hide">
            <motion.h2>We work to make</motion.h2>
          </div>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
        </motion.div>

        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="contact-us-img" />
      </Image>
    </About>
  );
};

// styled components

export default AboutSection;
