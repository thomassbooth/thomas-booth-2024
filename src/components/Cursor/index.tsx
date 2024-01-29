"use client";

import { animate, motion, transform, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef<any>();
  const cursorSize = 20;

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


  const angle = useMotionValue(0)

  const manageMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      cursorRef.current.getBoundingClientRect();

    const centerCursorDrag = { x: left + width / 2, y: top + height / 2 };
    const distance = { x: clientX - centerCursorDrag.x, y: clientY - centerCursorDrag.y };

    const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y))
    const newScaleX = transform(absDistance, [0, width], [1, 1.3])
    const newScaleY = transform(absDistance, [0, width], [1, 0.8])

    const newAngle = Math.atan2(distance.y, distance.x)
    // angle.set(`${newAngle}rad`)
    animate(cursorRef.current, {rotate: `${newAngle}rad`}, {duration: 0})
    scale.x.set(newScaleX)
    scale.y.set(newScaleY)

    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, []);


  return (
    <motion.div
      ref={cursorRef}
      transformTemplate={({rotate, scaleX, scaleY}) =>  `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`}
      className="w-5 h-5 fixed rounded-full z-10 bg-black"
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        scaleX: scale.x,
        scaleY: scale.y,
      }}
    ></motion.div>
  );
};

export default Cursor;
