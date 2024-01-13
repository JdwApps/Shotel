import React from "react";
import { motion } from "framer-motion";
import { styleScript } from "../fonts";

const AniText = ({ text }) => {
  // splitting text into letters
  const letters = Array.from(text);

  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 * i },
    }),
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className={styleScript.className}>
    <motion.div
      className="overflow-hidden  p-12 text-4xl md:text-8xl"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span    
        style={{ textShadow: "2px 2px 4px rgba(255,255,255,0.3)" }}       
        className="font-great-vibes  justify-center text-gray-800" 
        variants={child} 
        key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
    </div>
  );
};

export default AniText;
