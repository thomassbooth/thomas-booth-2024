"use client";

import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineGlobal } from "react-icons/ai";

const About = () => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const { width, height } = dimensions;

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], ["0vh", "-10vh"]);

  const imageY = useTransform(scrollYProgress, [0, 1], ["10vh", "-20vh"]);
  const imageWrapperY = useTransform(scrollYProgress, [0, 1], ["0vh", "10vh"]);

  const imageTextY = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const ballX = useTransform(scrollYProgress, [0, 0.7], ["50vw", "40vw"]);
  const rotateIcon = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["-40deg", "50deg"]
  );

  return (
    <div
      ref={container}
      className="bg-common-cream text-common-gray px-[7%] py-[10%]"
    >
      <motion.h2 style = {{y: titleY}} className="flex flex-col text-subtitle font-semibold pb-[15%] px-[10%]">
        <span>Technical prowess</span>
        <span>to put you ahead</span>
        <div className="mt-[15%] flex items-center w-full">
          <div className="h-[1px] bg-slate-500/30 w-full" />
          {/* travelling ball */}
          <motion.div
            style={{ x: ballX }}
            className="absolute flex justify-center items-center transform  w-[11vw] h-[11vw] rounded-[50%] bg-palette-green-light"
          >
            <motion.div style={{ rotate: rotateIcon }}>
              <AiOutlineGlobal size={80} className="text-white" />
            </motion.div>
          </motion.div>
        </div>
      </motion.h2>

      <motion.div className="flex w-full justify-between">
        <motion.div style = {{y: imageTextY}}>
          <span>WAG1 BRUV</span>
        </motion.div>
        <motion.div
          style={{ y: imageWrapperY }}
          className="overflow-hidden h-[70vw]"
        >
          <motion.div
            style={{ y: imageY }}
            className={`relative overflow-hidden grayscale-[0.3]`}
          >
            <Image
              className="relative"
              quality={100}
              src="/tom_monkey.JPG"
              alt="test"
              width={width / 2}
              height={height / 2}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
