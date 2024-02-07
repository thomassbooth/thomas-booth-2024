"use client";

import useHover from "@/store/useCursor";
import React, { useRef } from "react";
import Me from "./Hover/Me";
import { motion, useScroll, useTransform } from "framer-motion";
import { CgMouse } from "react-icons/cg";
import HalfMoon from "./Svgs/HalfMoon";

const Hero = () => {
  const container = useRef(null);
  const [cursor, setCursor] = useHover((state) => [
    state.cursor,
    state.setCursor,
  ]);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const ysmaller = useTransform(scrollYProgress, [0, 1], ["0vh", "24vh"]);
  const ybehind = useTransform(scrollYProgress, [0, 1], ["0vh", "20vh"]);
  const ysmallest = useTransform(scrollYProgress, [0, 1], ["0vh", "19vh"]);
  const ymoon = useTransform(scrollYProgress, [0, 1], ["0vh", "15vh"]);
  const scrollopacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  return (
    <div
      ref={container}
      className="h-screen w-screen px-[7%] flex flex-col items-center justify-center top-0"
    >
      {/* FOLIO 2024 line */}
      <HalfMoon
        style={{ y: ymoon }}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 0.2 },
        }}
        transition={{ delay: 2, duration: 1, ease: "easeIn" }}
        className="absolute left-0 w-1/2 h-1/2 pointer-events-none"
      />
      <h1 className="w-full flex flex-col text-common-gray uppercase cursor-default">
        <motion.span
          style={{ y: ysmaller }}
          className="inline-flex overflow-hidden"
        >
          <motion.span
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={{
              hidden: { y: "100%", opacity: 0.5 },
              visible: { y: "0%", opacity: 1 },
            }}
            transition={{ delay: 1, duration: 1, ease: "easeIn" }}
            className="font-semibold text-left text-subtitle"
          >
            Folio&nbsp;
          </motion.span>
          <motion.span
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={{
              hidden: { y: "100%", opacity: 0.5 },
              visible: { y: "0%", opacity: 1 },
            }}
            transition={{ delay: 1.2, duration: 1, ease: "easeIn" }}
            className="font-light text-left text-subtitle"
          >
            2024,
          </motion.span>
        </motion.span>
        {/* THOMAS BOOTH LINE */}
        <motion.div
          style={{ y: ybehind }}
          className="w-full justify-end leading-none inline-flex overflow-hidden"
        >
          <motion.span
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={{
              hidden: { y: "100%", opacity: 0.5 },
              visible: { y: "0%", opacity: 1 },
            }}
            transition={{ delay: 1.5, duration: 1, ease: "easeIn" }}
            className="font-semibold text-right block text-title"
            onMouseLeave={() => {
              setCursor({ size: 16, type: "none" });
            }}
            onMouseEnter={() => {
              setCursor({
                size: 100,
                type: "scale",
                colour: "bg-palette-green-light",
                content: <Me />,
              });
            }}
          >
            Thomas&nbsp;
          </motion.span>
          <motion.span
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={{
              hidden: { y: "100%", opacity: 0.5 },
              visible: { y: "0%", opacity: 1 },
            }}
            transition={{ delay: 1.8, duration: 1, ease: "easeIn" }}
            className="font-light text-right flex text-title"
            onMouseLeave={() => {
              setCursor({ size: 16, type: "none" });
            }}
            onMouseEnter={() => {
              setCursor({
                size: 100,
                type: "scale",
                colour: "bg-palette-green-light",
                content: <Me />,
              });
            }}
          >
            Booth
            <div className="w-3 h-3 mt-9 ml-2 rounded-full bg-common-gray" />
          </motion.span>
        </motion.div>
      </h1>
      <motion.div
        style={{ y: ysmallest }}
        className="w-full cursor-default text-lg inline-flex justify-end overflow-hidden"
      >
        <motion.h2
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          variants={{
            hidden: { y: "100%", opacity: 0.5 },
            visible: { y: "0%", opacity: 1 },
          }}
          transition={{ delay: 2, duration: 1, ease: "easeIn" }}
          className="uppercase text-right font-light text-common-gray tracking-[.01rem]"
        >
          Dubai, United Arab Emirates.
        </motion.h2>
      </motion.div>
      <motion.div className="cursor-default text-lg inline-flex overflow-hidden absolute bottom-0  mb-[5vh]">
        <motion.h2
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ delay: 2.5, duration: 0.5, ease: "easeIn" }}
          style={{ opacity: scrollopacity }}
          className="uppercase gap-2 flex items-center text-right font-light text-common-gray tracking-[.01rem] "
        >
          scroll
          <CgMouse size = {20} />
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Hero;
