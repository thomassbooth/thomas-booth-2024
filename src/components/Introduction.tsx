"use client";
import React, { useRef } from "react";
import Word from "./TextOpacity/Word";
import { useScroll, motion, useTransform } from "framer-motion";
import Magnetic from "./Magnetic";

const paragraph = `Empowering all-scale startups with custom web experiences that are memorable and drive success. With a passion for design and development, I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting impact in the digital landscape.`;

const Introduction = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start 0.8", "end 0.25"],
  });
  const words = paragraph.split(" ");

  const yintro = useTransform(scrollYProgress, [0, 1], ["0vh", "10vh"]);
  return (
    <>
      <div className="relative py-[10%] px-[7%] bg-common-background-gray flex justify-between">
        <motion.span
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ delay: 0.1, duration: 1, ease: "easeIn" }}
          ref={container}
          className="font-light text-text text-common-background-cream flex flex-wrap w-2/3 pointer-events-none"
        >
          {words.map((word, indx) => {
            const start = indx / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={indx} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </motion.span>
        <div className="inline-flex flex-col overflow-y-hidden">
          <motion.div
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={{
              hidden: { width: 0 },
              visible: { width: "100%" },
            }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeIn" }}
            style={{ y: yintro }}
            className="inline-flex flex-col overflow-hidden"
          >
            <span className="font-light pointer-events-none text-heading text-common-background-cream">
              Introduction
            </span>
          </motion.div>
        </div>
        
      </div>
    </>
  );
};

export default Introduction;
