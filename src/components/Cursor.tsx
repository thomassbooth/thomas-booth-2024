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

const Cursor = ({ stickyElement }: { stickyElement: React.MutableRefObject<any>}) => {
  const [hover, setHover] = useHover((state) => [state.hover, state.setHover]);

  const cursorRef = useRef<any>();
  const cursorSize = hover ? 60 : 24;
  const hoveredCursorSize = 60;

  const rotate = (distance: {x: number, y: number}) => {
    const newAngle = Math.atan2(distance.y, distance.x);
    animate(cursorRef.current, { rotate: `${newAngle}rad` }, { duration: 0 });
  };

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
    
    if (hover.type === "menu") {
      const { left, top, height, width } =
        stickyElement.current.getBoundingClientRect();

      //center position of the stickyElement
      const center = { x: left + width / 2, y: top + height / 2 };

      //distance between the mouse pointer and the center of the custom cursor and
      const distance = { x: clientX - center.x, y: clientY - center.y };

      //rotate
      rotate(distance);

      //stretch based on the distance
      const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
      const newScaleX = transform(absDistance, [0, height / 2], [1, 1.3]);
      const newScaleY = transform(absDistance, [0, width / 2], [1, 0.8]);
      scale.x.set(newScaleX);
      scale.y.set(newScaleY);

      //move mouse to center of stickyElement + slightly move it towards the mouse pointer
      mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1);
      mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1);
      return;
    }
    if (hover.type === 'other') {
      mouse.x.set(clientX - hoveredCursorSize / 2);
      mouse.y.set(clientY - hoveredCursorSize / 2);
    }

    if (!hover) {
      const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
      const newScaleX = transform(absDistance, [0, (width * 3) / 2], [1, 1.3]);
      const newScaleY = transform(absDistance, [0, (width * 3) / 2], [1, 0.7]);
      rotate(distance);
      scale.x.set(newScaleX);
      scale.y.set(newScaleY);
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  };

  const manageMouseOver = () => {
    setHover({ type: "menu" });
  };

  const manageMouseLeave = () => {
    setHover(false);
    animate(
      cursorRef.current,
      { scaleX: 1, scaleY: 1 },
      { duration: 0, type: "spring" }
    );
  };
  
  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    if (!hover)
      animate(
        cursorRef.current,
        { scaleX: 1, scaleY: 1 },
        { duration: 0, type: "spring" }
      );
    if (hover.type === "other") {
      animate(
        cursorRef.current,
        { scaleX: 1, scaleY: 1, rotate: 0  },
        { duration: 0, type: "spring" }
      );
    }
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [hover]);

  useEffect(() => {
    stickyElement.current.addEventListener("mouseenter", manageMouseOver);
    stickyElement.current.addEventListener("mouseleave", manageMouseLeave);

    return () => {
      stickyElement.current.removeEventListener("mouseenter", manageMouseOver);
      stickyElement.current.removeEventListener("mouseleave", manageMouseLeave);
    };
  }, [hover])

  return (
    <motion.div
      ref={cursorRef}
      transformTemplate={({ rotate, scaleX, scaleY }) =>
        `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`
      }
      className="flex justify-center items-center w-6 h-6 fixed rounded-full bg-black pointer-events-none"
      animate={{
        width: cursorSize,
        height: cursorSize,
      }}
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        scaleX: scale.x,
        scaleY: scale.y,
      }}
    >
      {/* {hover && <span className="text-lg">view</span>} */}
    </motion.div>
  );
};

export default Cursor;
