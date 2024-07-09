"use client";
import React from "react";
import { IoHandLeftOutline } from "react-icons/io5";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectsProps {
  imageUrl: string;
}

const Projects: React.FC<ProjectsProps> = ({imageUrl}) => {
  return (
    <div className="h-full w-full justify-center items-center text-common-cream">
      <motion.div
        className=" text-common-cream flex origin-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition = {{delay: 0.2}}
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
