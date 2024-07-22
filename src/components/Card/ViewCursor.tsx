"use client";
import React, { useEffect } from "react";

import { motion, useMotionValue, useSpring } from "framer-motion";

const cursorSize = 100;

const ViewCursor = () => {

  var mouse = {
    x: useMotionValue(200),
    y: useMotionValue(200),
  };

  const smoothOptions = { damping: 30, stiffness: 300, mass: 0.5 };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    mouse.y.set(clientY - cursorSize / 2);
    mouse.x.set(clientX - cursorSize / 2);
    console.log(clientX, clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        className="w-24 h-24 rounded-full bg-blue-400 z-30 flex justify-center items-center fixed pointer-events-none"
      >
        View
      </motion.div>
    </>
  );
};

export default ViewCursor;
