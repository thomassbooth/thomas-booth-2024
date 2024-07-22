"use client";
import React, { useEffect } from "react";
import { IoHandLeftOutline } from "react-icons/io5";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Magnetic from "../Magnetic";

interface ProjectsProps {
  imageUrl: string;
}

const cursorSize = 100;

const Projects: React.FC<ProjectsProps> = ({ imageUrl }) => {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  return (
    <div className="h-full w-full  text-common-cream">
      <motion.div
        className=" text-common-cream flex origin-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Image
          className="h-auto object-cover w-full"
          src={imageUrl}
          fill
          alt="image"
          priority
        />
      </motion.div>
    </div>
  );
};

export default Projects;
