"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import useHover from "@/store/useCursor";

const Button = ({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick: () => void; 
  children: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState("reset");
  const [cursor, setCursor] = useHover((state) => [
    state.cursor,
    state.setCursor,
  ]);
  const buttonRef = useRef(null);
  return (
    <div>
      <button
        onMouseEnter={() => {
          setCursor({
            type: "scale",
            size: 0,
            colour: "bg-palette-green-light",
          });
          setHovered("hovered");
        }}
        onMouseLeave={() => {
          setCursor({ type: "none", size: 15 });
          setHovered("normal");
        }}
        ref={buttonRef}
        onClick = {() => onClick()}
        className={`${className} group relative border border-common-gray rounded-full overflow-hidden`}
      >
        <span className="relative z-20 text-common-gray group-hover:text-common-background-cream transition-all">{children}</span>
        <motion.div
          initial={{ y: "100%" }}
          animate={hovered}
          variants={{
            hovered: { y: "-20%" },
            normal: { y: "-120%" },
            reset: { y: "120%", transition: { duration: 0 } },
          }}
          onAnimationComplete={() => {
            if (hovered === "normal") setHovered("reset");
          }}
          transition={{ duration: 0.4, easing: "easeIn" }}
          className="absolute top-0 left-[-25%] rounded-[50%] h-[200%] w-[150%]  bg-palette-green-light pointer-events-none"
        />
      </button>
    </div>
  );
};

export default Button;
