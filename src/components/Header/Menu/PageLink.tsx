"use client";
import Link from "next/link";
import React, { SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { pageLink, linkBorder } from "../anim";
import Magnetic from "../../Magnetic";
import useHover from "@/store/useCursor";
import { usePathname } from "next/navigation";

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
  const [cursor, setCursor] = useHover((state) => [
    state.cursor,
    state.setCursor,
  ]);

  const pathname = usePathname();

  const isActivePage = pathname == link;
  return (
    // <div style = {{top: position}} className = 'group absolute h-1/4 left-0 w-full overflow-y-hidden'>
    <Link
      href={link}
      style={{ top: position }}
      className={`group absolute h-1/4 left-0 w-full overflow-hidden`}
    >
      <li
        className="flex flex-col h-full justify-center "
        onClick={() => {
          setHovered("normal");
          setIsOpen(false);
        }}
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
      >
        <div className={`inline-block overflow-hidden z-20`}>
          <motion.div
            initial="initial"
            animate="open"
            exit="closed"
            custom={custom}
            variants={pageLink}
          >
            <div
              className={`group-hover:text-common-cream transition-all group-hover:font-medium text-subtitle inline-flex w-full font-light text-common-gray justify-between items-center px-[7%]`}
            >
              <div className="flex items-center">
                <span
                  className={`${isActivePage} text-text mr-10 group-hover:text-common-cream transition-all group-hover:font-medium duration-150`}
                >
                  {custom}.
                </span>
                <span
                  className={`${isActivePage} relative transition-all duration-150`}
                >
                  {title}
                </span>
              </div>
              {isActivePage || (
                <span
                  className={`${
                    isActivePage && "translate-x-5 "
                  } text-text group-hover:translate-x-5 duration-200 rounded-full transition-all leading-[0]`}
                >
                  {">"}
                </span>
              )}
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
        className="absolute bottom-0 w-full h-0.5 bg-common-gray"
      />
    </Link>
  );
};

export default PageLink;
