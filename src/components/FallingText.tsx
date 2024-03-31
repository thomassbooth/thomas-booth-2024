'use client'
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const fallDown = {
  init: {
    y: "0%"
  },

  hover: (i: number) => ({
    y: "-200%",
    transition: { ease: [0.83, 0, 0.17, 1], delay: i * 0.024, duration: 0.5}
  }),

  exit: (i: number) => ({
    y: "0%",
    transition: { ease: [0.83, 0, 0.17, 1], delay: i * 0.024, duration: 0.5}
  })
};


export default function FallingText({ text }: { text: string }) {
  const wrapper = useRef(null);
  const [y, setY] = useState('init');

  const letters = text.split('').map((letter, i) => (
    <motion.span
      className="relative inline-block "
      key={i}
      custom = {i}
      variants = {fallDown}
      animate = {y}
    >
      {letter === ' ' ? <>&nbsp;</> : letter}
    </motion.span>
  ));

  return (
    <span
      onMouseEnter = {() => setY('hover')}
      onMouseLeave = {() => setY('exit')}
      ref={wrapper}
      className="relative leading-none inline-flex overflow-hidden"
    >
      <span className = 'pointer-events-none'>
        {letters}
      </span>
      <span className="absolute top-0 left-0 translate-y-[200%] pointer-events-none" >
        {letters}
      </span>
    </span>
  );
}