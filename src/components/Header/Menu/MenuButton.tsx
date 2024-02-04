"use client";

import { forwardRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Magnetic from "../../Magnetic";
import NavMenu from "./NavMenu";

interface MenuProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const MenuButton = forwardRef<HTMLDivElement, MenuProps>(function Menu(props, ref) {
  const { setIsOpen, isOpen } = props;

  return (
    <>
      <div className="pointer-events-none mix-blend-difference fixed p-[10px] z-20">
        <Magnetic>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className={`cursor-pointer relative flex gap-[6px] flex-col p-[12px] pointer-events-none before:block before:w-[25px] before:h-[1px] before:bg-common-background-cream ${
              isOpen &&
              "before:rotate-45 after:-rotate-45 before:translate-y-[7px]"
            }   after:block after:w-[25px] after:h-[1px] after:bg-common-background-cream after:transition-all before:transition-all before:duration-1000 after:duration-1000`}
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

export default MenuButton;
