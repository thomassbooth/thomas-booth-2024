"use client";

import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import useHover from "@/store/useCursor";

const About = () => {
  const [cursor, setCursor] = useHover((state) => [
    state.cursor,
    state.setCursor,
  ]);
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

  const imageY = useTransform(scrollYProgress, [0, 1], ["0vh", "-25vh"]);
  const imageWrapperY = useTransform(scrollYProgress, [0, 1], ["0vh", "10vh"]);
  const imageTextY = useTransform(scrollYProgress, [0.2, 1], ["0vh", "50vh"]);

  const ballX = useTransform(scrollYProgress, [0, 0.7], ["50vw", "40vw"]);
  const rotateArrow = useTransform(
    scrollYProgress,
    [0.25, 0.7],
    ["0deg", "90deg"]
  );
  const rotateIcon = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["-40deg", "50deg"]
  );

  return (
    <div
      ref={container}
      className="bg-common-cream text-common-gray px-[7%] pt-[10%] pb-[15%]"
    >
      <motion.h2
        style={{ y: titleY }}
        className="flex flex-col text-subtitle font-semibold pb-[15%] px-[10%] pointer-events-none"
      >
        <span>Technical prowess</span>
        <span>to put you ahead</span>
        <div className="mt-[15%] flex items-center w-full">
          <div className="h-[1px] bg-slate-500/30 w-full" />
          {/* travelling ball */}
          <motion.div
            style={{ x: ballX }}
            className="absolute flex justify-center items-center transform  w-[11vw] h-[11vw] rounded-[50%] bg-palette-green-light"
            onMouseEnter={() => {
              setCursor({
                type: "scale",
                size: 0,
                colour: "bg-palette-green-light",
              });
            }}
            onMouseLeave={() => {
              setCursor({ type: "none", size: 15 });
            }}
          >
            <motion.div style={{ rotate: rotateIcon }}>
              <AiOutlineGlobal size={80} className="text-white" />
            </motion.div>
          </motion.div>
        </div>
      </motion.h2>

      <motion.div className="flex w-full justify-between">
        <div className="flex w-1/2">
          <motion.div style = {{y: imageWrapperY, rotate: rotateArrow}} className = 'absolute'>
            <FaArrowRight size={50} />
          </motion.div>
          <motion.p style={{ y: imageTextY }} className = 'px-20 text-lg font-light'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
            non enim praesent elementum facilisis leo. Gravida rutrum quisque
            non tellus. Quis vel eros donec ac odio tempor orci. Ullamcorper sit
            amet risus nullam eget.
          </motion.p>
        </div>
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
