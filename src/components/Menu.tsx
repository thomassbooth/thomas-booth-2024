"use client";

import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const Menu = forwardRef<HTMLDivElement>(function Menu(props, ref) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed flex w-full justify-end p-[10px] z-20">
        <Magnetic>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="cursor-none relative flex gap-2 flex-col p-[30px] pointer-events-none before:block before:w-[30px] before:h-[2px] before:bg-white after:block after:w-[30px] after:h-[2px] after:bg-white"
          >
            <div
              ref={ref}
              className="absolute left-0 top-0 w-full h-full pointer-events-auto hover:scale-[3]"
            ></div>
          </button>
        </Magnetic>
      </div>

      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={{ open: { height: "100vh" }, closed: { height: "0vh" } }}
        className="z-10 fixed top-0 left-0 h-screen w-screen bg-blue-400"
      ></motion.div>
    </>
  );
});

export default Menu;
