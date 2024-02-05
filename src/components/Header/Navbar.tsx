"use client";

import React, { useRef, useState } from "react";
import MenuButton from "./Menu/MenuButton";
import NavMenu from "./Menu/NavMenu";
import Cursor from "../Cursor/Cursor";
import { motion } from "framer-motion";

const Navbar = () => {
  const stickyElement = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="relative w-full flex justify-end">
        <MenuButton ref={stickyElement} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="absolute top-0 w-full h-[54px] flex items-center justify-between overflow-hidden pointer-events-none">
        <div className="inline-block overflow-hidden">
          <motion.div
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={{
              hidden: { y: "100%" },
              visible: { y: "0%" },
            }}
            transition={{ delay: 1.5, duration: 0.5, ease: "easeIn" }}
            className="flex items-center pl-5 gap-2"
          >
            <div className="w-0.5 h-0.5 z-30 bg-black rounded-full" />
            <span className="text-lg">T</span>
            <span className="text-lg">B</span>
          </motion.div>
        </div>
        <div className="inline-block overflow-hidden">
          <motion.div
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={{
              hidden: { y: "100%" },
              visible: { y: "0%" },
            }}
            transition={{ delay: 1.8, duration: 0.5, ease: "easeIn" }}
          >
            <span className = 'flex items-center'><div className = 'mr-2 w-2 h-2 bg-green-400 border border-common-gray rounded-full'/>2024 - Avalible For Work</span>
          </motion.div>
        </div>
        <div className="w-[69px]" />
      </div>
      <motion.div
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        variants={{
          hidden: { width: 0 },
          visible: { width: "100%" },
        }}
        transition={{ delay: 1.5, duration: 1, ease: "easeIn" }}
        className="absolute top-0 w-screen border-b mt-[54px] border-common-gray z-10"
      />
      <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Cursor stickyElement={stickyElement} />
    </>
  );
};

export default Navbar;
