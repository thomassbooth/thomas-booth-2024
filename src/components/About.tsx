"use client";

import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const About = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "20vh"]);
  const width = useTransform(scrollYProgress, [0, 1], ["50vh", "100vh"]);
  return (
    <div
      ref={container}
      className="bg-common-background-cream h-screen text-common-gray px-[7%]"
    >
      <div className="w-full flex justify-between">
        <span className="text-subtitle font-semibold">Software</span>
        <span className="text-subtitle font-semibold">Engineer</span>
      </div>
      {/* <motion.div>
        <Image
          src="/add new recipient empty.png"
          alt="test"
          width={100}
          height={100}
        />
      </motion.div> */}
    </div>
  );
};

export default About;
