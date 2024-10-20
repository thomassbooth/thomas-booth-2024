"use client";

import { useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import ViewCursor from "./ViewCursor";

const Cards = () => {
  const container = useRef(null);
  const [viewCursor, setViewCursor] = useState(false);
  const [initialMousePosition, setInitialMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const { scrollYProgress: scrollYProgressPage } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: scrollYProgressEnter } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const colourChange = useTransform(
    scrollYProgressEnter,
    [0, 1],
    ["#f8fafc", "#EEEDEB"]
  );

  const handleMouseEnter = (e: any) => {
    setInitialMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
    setViewCursor(true); // Enable view cursor
  };

  return (
    <motion.div
      style={{ background: colourChange }}
      ref={container}
      className={"bg-palette-off-white"}
    >
      {viewCursor && <ViewCursor initial = {initialMousePosition}/>}
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
            <Card
              setViewCursor={setViewCursor}
              key={`p_${i}`}
              i={i}
              progress={scrollYProgressPage}
              range={[i * 0.25, 1]}
              project={project}
              targetScale={targetScale}
            />
        );
      })}
    </motion.div>
  );
};

export default Cards;
