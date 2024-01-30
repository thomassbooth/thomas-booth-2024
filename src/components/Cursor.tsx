"use client";

import useHover from "@/store/useCursor";
import {
  animate,
  motion,
  transform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React, { useEffect, useRef } from "react";

const Cursor = ({ stickyElement }: { stickyElement: React.MutableRefObject<any>}) => {
  const [cursor, setCursor] = useHover((state) => [state.cursor, state.setCursor]);

  const cursorRef = useRef<any>();
  const cursorSize = cursor.size

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
    
    if (cursor.type === "menu") {
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
    if (cursor.type === 'random') {
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }

    if (cursor.type === 'none') {
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
    setCursor({size: 60, type: "menu" });
  };

  const manageMouseLeave = () => {
    setCursor({type: 'none', size: 16});
    animate(
      cursorRef.current,
      { scaleX: 1, scaleY: 1 },
      { duration: 0, type: "spring" }
    );
  };
  
  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    if (cursor.type === 'none')
      animate(
        cursorRef.current,
        { scaleX: 1, scaleY: 1 },
        { duration: 0, type: "spring" }
      );
    if (cursor.type === "random") {
      animate(
        cursorRef.current,
        { scaleX: 1, scaleY: 1, rotate: 0  },
        { duration: 0, type: "spring" }
      );
    }
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [cursor]);

  useEffect(() => {
    stickyElement.current.addEventListener("mouseenter", manageMouseOver);
    stickyElement.current.addEventListener("mouseleave", manageMouseLeave);

    return () => {
      stickyElement.current.removeEventListener("mouseenter", manageMouseOver);
      stickyElement.current.removeEventListener("mouseleave", manageMouseLeave);
    };
  }, [cursor])

  return (
    <motion.div
      ref={cursorRef}
      transformTemplate={({ rotate, scaleX, scaleY }) =>
        `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`
      }
      className="flex justify-center items-center w-4 h-4 fixed rounded-full z-10 bg-black pointer-events-none"
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
