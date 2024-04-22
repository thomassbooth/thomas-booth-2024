"use client";
import React from "react";
import { IoHandLeftOutline } from "react-icons/io5";

import { motion } from "framer-motion";
import { reverse } from "dns";

const Me = () => {
  return (
    <div
      className="h-full w-full justify-center items-center  text-common-cream"
    >
      <motion.div
        animate={{ rotate: "10deg" } as any}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatType: "mirror",
          from: "-10deg",
          ease: "easeOut",
        }}
        className=" text-common-cream flex origin-bottom"
      >
        <IoHandLeftOutline size = {35}/>
      </motion.div>
    </div>
  );
};

export default Me;
