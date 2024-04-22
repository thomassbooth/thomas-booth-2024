"use client";

import React, { useEffect, useState } from "react";
import { motion, useTransform } from "framer-motion";

const Curve = ({ scrollYProgress }: any) => {
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null
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
  L${width} ${200 + 300}
  Q${width / 2} ${200 + 600} 0 ${200 + 300}
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
    <motion.svg className="w-full absolute h-screen bg-common-gray">
      <motion.path d={curve} fill="#f8fafc"/>
    </motion.svg>
  );
};

export default Curve;
