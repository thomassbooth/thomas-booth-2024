"use client";

import { useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Curve from "./Curve";

const Info = () => {
  const container = useRef(null);
  const [dimensions, setDimensions] = useState<{
    width: number | null;
    height: number | null;
  }>({
    width: null,
    height: null,
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
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["50vh", "0vh"]);

  return (
    <div ref={container} className="w-screen z-40 mt-[-100vh]">
      <div className="h-screen"></div>
      <div className="sticky -bottom-0 h-[70vh] bg-common-background-cream text-common-gray">
        <motion.div style={{ y }}>
          <span className="text-title">Lets work</span>
          <span className="text-title">Together</span>
          {/* <Curve scrollYProgress = {scrollYProgress} {...dimensions}/> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Info;
