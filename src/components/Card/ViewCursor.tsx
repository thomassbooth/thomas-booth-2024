"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface ViewCursorProps {
  initial: { x: number; y: number };
}

const cursorSize = 100;

const ViewCursor: React.FC<ViewCursorProps> = ({initial}) => {
  // Initialize motion values
  var mouse = {
    x: useMotionValue(initial.x),
    y: useMotionValue(initial.y),
  };

  const smoothOptions = { damping: 30, stiffness: 300, mass: 0.5 };

  // Create smooth animated mouse positions using springs
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    // Update the motion values with the new mouse position
    mouse.y.set(clientY - cursorSize / 2);
    mouse.x.set(clientX - cursorSize / 2);
  };

  useEffect(() => {
    // Then continue listening for mouse move events
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
      className="w-24 h-24 rounded-full bg-blue-400 z-30 flex justify-center items-center fixed pointer-events-none"
    >
      View
    </motion.div>
  );
};

export default ViewCursor;
