"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const Marquee = ({ children }: { children: React.ReactNode }) => {
  const textRef = useRef<HTMLDivElement | null>(null);

  const [textSize, setTextSize] = useState<number>(0);

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(
    smoothVelocity,
    [-3000, 0, 3000],
    [-10, 1, 10]
  );


  useEffect(() => {
    if (textRef.current) {
      setTextSize(textRef.current.offsetWidth);
    }
  }, [textRef]);

  useAnimationFrame((t, delta) => {
    let moveBy = velocityFactor.get() * (delta/5);

    if (Math.abs(baseX.get()) >= textSize) {
      baseX.set(0);
      return;
    }

    baseX.set(baseX.get() + moveBy);
  });

  //   const marqueeVariants = {
  //     animate: {
  //       x: ["0%", "100%"],
  //       transition: {
  //         x: {
  //           repeat: Infinity,
  //           repeatType: "loop",
  //           duration: 5,
  //           ease: "linear",
  //         },
  //       },
  //     },
  //   };

  return (
    <div className="w-full relative flex pointer-events-none">
      <motion.div
        style={{ x: baseX }}
        className=" relative items-center font-semibold text-title uppercase "
        // variants={marqueeVariants}
        animate="animate"
      >
        <h1 ref={textRef} className="whitespace-nowrap relative">
          {children}
        </h1>
      </motion.div>
      <motion.div
        style={{ left: `-${textSize}px`, x: baseX }}
        className=" absolute items-center font-semibold text-title uppercase"
        // variants={marqueeVariants}
        animate="animate"
      >
        <h1 className="whitespace-nowrap relative">{children}</h1>
      </motion.div>
    </div>
  );
};

export default Marquee;
