'use client'

import { useScroll } from "framer-motion";
import React, { useRef } from "react";
import Card from "./Card";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";


const Cards = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  
  return (
    <motion.div style = {{}} ref={container} className = 'bg-common-gray'>
      {projects.map((project, i) => {
        const targetScale = 1 - ( (projects.length - i) * 0.05);
        return (
          <Card
            key={`p_${i}`}
            i={i}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            project = {project}
            targetScale={targetScale}
          />
        );
      })}
    </motion.div>
  );
};

export default Cards;
