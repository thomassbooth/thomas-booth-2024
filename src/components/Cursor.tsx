"use client";

import useHover from "@/store/useHover";
import {
  animate,
  motion,
  transform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const [hover, setHover] = useHover((state) => [state.hover, state.setHover]);

  const cursorRef = useRef<any>();
  const cursorSize = 24;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  const manageMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      cursorRef.current.getBoundingClientRect();

    const centerCursorDrag = { x: left + width / 2, y: top + height / 2 };
    const distance = {
      x: clientX - centerCursorDrag.x,
      y: clientY - centerCursorDrag.y,
    };

    if (!hover) {
      const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
      const newScaleX = transform(absDistance, [0, (width * 3) / 2], [1, 1.3]);
      const newScaleY = transform(absDistance, [0, (width * 3) / 2], [1, 0.6]);

      const newAngle = Math.atan2(distance.y, distance.x);
      animate(cursorRef.current, { rotate: `${newAngle}rad` }, { duration: 0 });
      scale.x.set(newScaleX);
      scale.y.set(newScaleY);
    }
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    if (!hover)
      animate(
        cursorRef.current,
        { scaleX: 1, scaleY: 1 },
        { duration: 0.5, type: "spring" }
      );
    if (hover) {
      animate(
        cursorRef.current,
        { scaleX: 5, scaleY: 5 },
        { duration: 0.5, type: "spring" }
      );
      animate(
        cursorRef.current,
        { rotate: 0 },
        { duration: 0, type: "spring" }
      );
    }
    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, [hover]);

  return (
    <motion.div
      ref={cursorRef}
      transformTemplate={({ rotate, scaleX, scaleY }) =>
        `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`
      }
      className="w-6 h-6 fixed rounded-full z-10 border-2 border-black pointer-events-none"
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        scaleX: scale.x,
        scaleY: scale.y,
      }}
    >
      {hover && <span>HELLOOO</span>}
    </motion.div>
  );
};

export default Cursor;
