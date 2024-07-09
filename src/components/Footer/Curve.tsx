"use client";

import React, { useEffect, useState } from "react";
import { motion, useTransform } from "framer-motion";

const Curve = ({ scrollYProgress, colour }: any) => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  const {width, height} = dimensions
  const initialPath = `
    M0 ${height}
    Q${width / 2} ${height} ${width} 300
    L${width} ${200 }
    Q${width / 2} ${200 + 300} 0 ${200 }
    L0 0
`;

  const targetPath = `
    M0 ${height}
    Q${width / 2} ${height} ${width} ${height}
    L${width} 0
    Q${width / 2} 0 0 0
    L0 0
`;

  const curve = useTransform(
    scrollYProgress,
    [0, 1],
    [initialPath, targetPath]
  );

  return (
    <motion.svg className={`w-full absolute h-screen ${colour}`}>
      <motion.path d={curve} fill="#f8fafc"/>
    </motion.svg>
  );
};

export default Curve;
