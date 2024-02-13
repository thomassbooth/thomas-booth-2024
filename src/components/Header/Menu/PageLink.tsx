"use client";
import Link from "next/link";
import React, { SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { pageLink, linkBorder } from "../anim";
import Magnetic from "../../Magnetic";

interface linkProps {
  custom: number;
  link: string;
  title: string;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  position: string;
}

const PageLink: React.FC<linkProps> = ({
  custom,
  title,
  link,
  setIsOpen,
  isOpen,
  position,
}) => {
  const [hovered, setHovered] = useState("reset");

  return (
    // <div style = {{top: position}} className = 'group absolute h-1/4 left-0 w-full overflow-y-hidden'>
    <Link
      href={link}
      style={{ top: position }}
      className="group absolute h-1/4 left-0 w-full overflow-y-hidden"
    >
      <li
        className="flex flex-col h-full justify-center"
        onClick={() => {
          setHovered("normal");
          setIsOpen(false);
        }}
        onMouseEnter={() => {
          setHovered("hovered");
        }}
        onMouseLeave={() => {
          setHovered("normal");
        }}
      >
        <div className="inline-block overflow-hidden z-20">
          <motion.div
            initial="initial"
            animate="open"
            exit="closed"
            custom={custom}
            variants={pageLink}
          >
            <div className="group-hover:text-common-background-cream transition-all group-hover:font-medium text-subtitle inline-flex w-full font-light text-common-gray justify-between items-center px-[7%]">
              <div>
                <span className="text-text mr-10">{custom}.</span>
                <span className="group-hover:-translate-x-5 transition-all">
                  {title}
                </span>
              </div>
              <span className="text-text group-hover:translate-x-5 border rounded-full transition-all leading-[0]">
                {">"}
              </span>
            </div>
          </motion.div>
        </div>
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
      </li>
      <motion.div
        initial="initial"
        animate="open"
        exit="closed"
        custom={custom}
        variants={linkBorder}
        className="absolute bottom-0 w-full h-0.5 bg-common-background-gray"
      />
    </Link>
  );
};

export default PageLink;
