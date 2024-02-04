"use client";

import useHover from "@/store/useCursor";
import React from "react";
import Me from "./Hover/Me";
import { motion } from "framer-motion";
import { easein, easing } from "./anim";

const Hero = () => {
  const [cursor, setCursor] = useHover((state) => [
    state.cursor,
    state.setCursor,
  ]);
  return (
    <div className="h-screen w-screen px-[7%] flex flex-col items-center justify-center">
      <h1 className="w-full flex flex-col text-common-gray uppercase text-hero cursor-default">
        <span className="inline-flex overflow-hidden">
          <motion.span
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={{
              hidden: { y: "100%", opacity: 0.5 },
              visible: { y: "0%", opacity: 1 },
            }}
            transition={{ delay: 1, duration: 1, ease: "easeIn" }}
            className="font-light text-left"
          >
            Folio 2024,
          </motion.span>
        </span>
        <div className="w-full justify-end leading-none inline-flex overflow-hidden">
          <motion.span
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={{
              hidden: { y: "100%", opacity: 0.5 },
              visible: { y: "0%", opacity: 1 },
            }}
            transition={{ delay: 1.2, duration: 1, ease: "easeIn" }}
            className="font-semibold text-right block"
            onMouseLeave={() => {
              setCursor({ size: 16, type: "none" });
            }}
            onMouseEnter={() => {
              setCursor({
                size: 100,
                type: "random",
                colour: "bg-palette-green-light",
                content: <Me />,
              });
            }}
          >
            Thomas Booth
          </motion.span>
          <div className="w-4 h-4 mt-7 ml-2 rounded-full bg-common-gray"></div>
        </div>
      </h1>
      <div className="w-full cursor-default text-lg inline-flex justify-end overflow-hidden">
        <motion.h2
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          variants={{
            hidden: { y: "100%", opacity: 0.5 },
            visible: { y: "0%", opacity: 1 },
          }}
          transition={{ delay: 1.4, duration: 1, ease: "easeIn" }}
          className="uppercase text-right font-light tracking-[.01rem]"
        >
          Dubai, United Arab Emirates.
        </motion.h2>
      </div>
    </div>
  );
};

export default Hero;
