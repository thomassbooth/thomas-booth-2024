"use client";

import useCursor from "@/store/useCursor";
import { MotionValue, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { project } from "@/lib/types";

interface cardProps {
  i: number;
  progress: any;
  range: number[];
  targetScale: number;
  project: project
}

const Card: React.FC<cardProps> = ({
  i,
  progress,
  range,
  targetScale,
  project
}) => {
  const [cursor, setCursor] = useCursor((state) => [
    state.cursor,
    state.cursor,
  ]);
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <motion.div
      ref={container}
      className="flex items-center justify-center sticky top-0 h-screen"
    >
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 25}px)`, backgroundColor: project.color }}
        className="relative -top-1/4 h-[500px] w-[1000px] p-12 rounded-lg"
      >
        <div className="relative ">
          <p className="font-bold	text-9xl text-center">{project.title}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
