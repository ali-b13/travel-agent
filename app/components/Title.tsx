"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface TitleProps {
  text:string,
  className?:string
}
const Title = ({ text,className }:TitleProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation once when in view

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.h2
      ref={ref}
      className={className&&className}
      variants={animationVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="font-extrabold text-dark text-center text-5xl lg:text-7xl font-amiri">
        {text}
      </div>
    </motion.h2>
  );
};

export default Title;
