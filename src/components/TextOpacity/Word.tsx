import { MotionValue, useTransform } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";

interface wordProps {
    children: React.ReactNode
    progress: MotionValue<number>
    range: number[]
}

const Word: React.FC<wordProps> = ({ children, progress, range }) => {

  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mr-3 mt-3">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

export default Word;
