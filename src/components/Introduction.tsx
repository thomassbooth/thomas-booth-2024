"use client";
import React, { useRef } from "react";
import Word from "./TextOpacity/Word";
import { useScroll, motion, useTransform, useVelocity } from "framer-motion";

const paragraph = `With a passion for pioneering tech and driving impactful projects, I specialize in architecting innovative solutions that exceed expectations. Leveraging dynamic leadership, adept management, and strong technical prowess in software engineering, I foster collaboration for exceptional results.`;

const Introduction = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start 0.8", "end 0.25"],
  });
  const words = paragraph.split(" ");

  const yintro = useTransform(scrollYProgress, [0, 1], ["0vh", "10vh"]);

  const speed = useVelocity(scrollYProgress);

  return (
    <>
      <div className="relative py-[10%] px-[7%] bg-common-gray flex justify-between">
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
          className="font-light text-text text-common-cream flex flex-wrap w-2/3 pointer-events-none"
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
            <span className="font-light pointer-events-none text-heading text-common-cream">
              Introduction
            </span>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
