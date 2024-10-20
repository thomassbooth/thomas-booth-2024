"use client";

import useCursor from "@/store/useCursor";
import { useTransform } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { project } from "@/lib/types";
import Projects from "../Hover/Projects";

interface cardProps {
  i: number;
  progress: any;
  range: number[];
  targetScale: number;
  project: project;
  setViewCursor: any;
}

const Card: React.FC<cardProps> = ({
  i,
  progress,
  range,
  targetScale,
  project,
  setViewCursor,
}) => {
  const [setCursor] = useCursor((state) => [state.setCursor]);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <motion.div className="flex items-center justify-center sticky top-0 h-screen pointer-events-none">
      {i == 0 && (
        <motion.div
          className="text-common-gray/80 absolute top-10 left-50 text-sm"
          whileInView="visible"
          initial="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeIn" }}
        >
          RECENT WORK
        </motion.div>
      )}
      <motion.a
        href={project.link}
        // this is to open in a new tab
        target="_blank"
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          backgroundColor: project.color,
        }}
        className={`${
          project.id % 2 !== 0 ? "text-common-gray" : "text-common-gray"
        } relative -top-1/4 h-[500px] w-[1000px] p-12 rounded-lg pointer-events-auto`}
        onMouseLeave={() => {
          setViewCursor(false);
          setCursor({ size: 16, type: "none" });
        }}
        onMouseEnter={() => {
          setViewCursor(true);
          setCursor(project.image ? {
            size: 300,
            type: "scale",
            className: "rounded-none",
            colour: "bg-black",
            content: <Projects imageUrl={project.image} key={i} />,
          }: {size: 0, type: "scale"});
        }}
      >
        <div className="relative flex flex-col h-full justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-bold	text-7xl pb-5">{project.title}</p>
            {project.description.map((d, i) => (
              <span key={`desc_{i}`} className="">
                - {d}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            {project.tech.map((t, i) => (
              <p
                className="border border-common-gray/80 px-3 py-1 rounded-full"
                key={i}
              >
                {t}
              </p>
            ))}
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
};

export default Card;
