"use client";

import React, { useEffect, useState } from "react";
import { motion, useTransform } from "framer-motion";
import { transition } from "../anim";

const Curve = () => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  const { width, height } = dimensions;
  const initialPath = `
  M0 300 
  Q${width/2} 0 ${width} 300
  L${width} ${height + 300}
  Q${width/2} ${height + 600} 0 ${height + 300}
  L0 0
`



const targetPath = `
  M0 300
  Q${width/2} 0 ${width} 300
  L${width} ${height}
  Q${width/2} ${height} 0 ${height}
  L0 0
`


  return (
    <div>
    <div style={{opacity: dimensions.width == null ? 1 : 0}} className='background'/>
    <motion.svg className="w-full absolute h-screen bg-common-gray">
      <motion.path
        initial={{ d: initialPath }}
        exit={{ d: targetPath, transition: {...transition} }}
        fill="#f8fafc"
      />
    </motion.svg>
    </div>
  );
};

export default Curve;
