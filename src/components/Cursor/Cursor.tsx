"use client";

import useHover from "@/store/useCursor";
import {
  AnimatePresence,
  animate,
  motion,
  transform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React, { useEffect, useRef } from "react";
import { content } from "./anim";

const Cursor = ({
  stickyElement,
}: {
  stickyElement: React.MutableRefObject<any>;
}) => {
  const [cursor, setCursor] = useHover((state) => [
    state.cursor,
    state.setCursor,
  ]);

  const cursorRef = useRef<any>();
  const cursorSize = cursor.size;

  const rotate = (distance: { x: number; y: number }) => {
    const newAngle = Math.atan2(distance.y, distance.x);
    animate(cursorRef.current, { rotate: `${newAngle}rad` }, { duration: 0 });
  };

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.1 };
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
    if (cursor.type === "scale") {
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
      return;
    }

    if (cursor.type === "none") {
      const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
      const newScaleX = transform(absDistance, [0, (width * 3) / 2], [1, 1.3]);
      const newScaleY = transform(absDistance, [0, (width * 3) / 2], [1, 0.7]);
      mouse.y.set(clientY - cursorSize / 2);
      mouse.x.set(clientX - cursorSize / 2);
      rotate(distance);
      scale.x.set(newScaleX);
      scale.y.set(newScaleY);

      console.log(smoothMouse.y.get());
      console.log(smoothMouse.x.get());
      return;
    }
  };

  const manageMouseOver = () => {
    setCursor({ size: 50, type: "menu" });
  };

  const manageMouseLeave = () => {
    setCursor({ type: "none", size: 16 });
    animate(cursorRef.current, { scaleX: 1, scaleY: 1 }, { duration: 0 });
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    if (cursor.type === "none")
      animate(
        cursorRef.current,
        { scaleX: 1, scaleY: 1 },
        { duration: 0, type: "spring" }
      );

    if (cursor.type === "scale") {
      animate(
        cursorRef.current,
        { scaleX: 1, scaleY: 1, rotate: 0 },
        { duration: 0 }
      );
    }
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [cursor]);

  useEffect(() => {
    const element = stickyElement.current;

    element.addEventListener("mouseenter", manageMouseOver);
    element.addEventListener("mouseleave", manageMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", manageMouseOver);
      element.removeEventListener("mouseleave", manageMouseLeave);
    };
  }, [cursor]);

  return (
    <motion.div
      ref={cursorRef}
      transformTemplate={({ rotate, scaleX, scaleY }) =>
        `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`
      }
      className={`${cursor.className} ${
        cursor.colour ? cursor.colour : "bg-common-cream mix-blend-difference"
      } flex justify-center items-center w-4 h-4 fixed rounded-full z-20 pointer-events-none overflow-hidden transition-colors duration-500`}
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
      {/* Animate the exit of cursor content otherwise itll just drop out, this way its scaled down and opacity 0 */}

      <AnimatePresence>
        {cursor.content && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={cursor.type}
            exit={{ opacity: 0, scale: 0 }}
            variants={content}
          >
            {cursor.content}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Cursor;
