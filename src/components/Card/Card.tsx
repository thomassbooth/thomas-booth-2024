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
}

const Card: React.FC<cardProps> = ({
  i,
  progress,
  range,
  targetScale,
  project,
}) => {
  const [cursor, setCursor] = useCursor((state) => [
    state.cursor,
    state.setCursor,
  ]);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <motion.div className="flex items-center justify-center sticky top-0 h-screen pointer-events-none">
      <motion.a
        href={project.link}
        target="_blank"
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          backgroundColor: project.color,
        }}
        className="relative -top-1/4 h-[500px] w-[1000px] p-12 rounded-lg pointer-events-auto"
        onMouseLeave={() => {
          setCursor({ size: 16, type: "none" });
        }}
        onMouseEnter={() => {
          setCursor({
            size: 300,
            type: "scale",
            className: "rounded-none",
            colour: "bg-black",
            content: <Projects imageUrl={project.image} key={i} />,
          });
        }}
      >
        <div className="relative ">
          <p className="font-bold	text-9xl text-center">{project.title}</p>
        </div>
      </motion.a>
    </motion.div>
  );
};

export default Card;
