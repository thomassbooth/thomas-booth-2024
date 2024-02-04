"use client";

import { forwardRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Magnetic from "../Magnetic";
import NavMenu from "./Nav/Menu";

interface MenuProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const Menu = forwardRef<HTMLDivElement, MenuProps>(function Menu(props, ref) {
  const { setIsOpen, isOpen } = props;

  return (
    <>
      <div className="pointer-events-none mix-blend-difference fixed flex w-full justify-end p-[10px] z-20">
        <Magnetic>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className={`cursor-pointer relative flex gap-2 flex-col p-[30px] pointer-events-none before:block before:w-[30px] before:h-[2px] before:bg-common-background-cream ${
              isOpen &&
              "before:rotate-45 after:-rotate-45 before:translate-y-[10px]"
            }   after:block after:w-[30px] after:h-[2px] after:bg-common-background-cream after:transition-all before:transition-all before:duration-1000 after:duration-1000`}
          >
            <div
              ref={ref}
              className="absolute left-0 top-0 w-full h-full pointer-events-auto hover:scale-[3]"
            />
          </button>
        </Magnetic>
      </div>
    </>
  );
});

export default Menu;
