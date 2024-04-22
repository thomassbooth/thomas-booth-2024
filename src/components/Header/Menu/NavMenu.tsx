"use client";
import React, { SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { menu } from "../anim";
import PageLink from "./PageLink";

interface menuProps {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

const links = [
  { title: "Home", link: "/", position: "0%" },
  { title: "About", link: "/about", position: "25%" },
  { title: "Works", link: "/works", position: "50%" },
  { title: "Contact", link: "/contact", position: "75%" },
];

const NavMenu: React.FC<menuProps> = ({ setIsOpen, isOpen }) => {
  return (
    <div className={`${!isOpen && "pointer-events-none"}`}>
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <motion.div
              variants={menu}
              initial="initial"
              animate="open"
              exit="closed"
              className="z-20 fixed top-0 left-0 h-screen w-1/2 bg-common-cream"
            >
              <ul className="relative h-screen w-full">
                {links.map((link, indx) => (
                  <PageLink
                    custom={indx}
                    key={indx}
                    title={link.title}
                    link={link.link}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    position={link.position}
                  />
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={menu}
              initial="initial"
              animate="open"
              exit="closed"
              className="z-20 fixed bottom-0 right-0 h-screen w-1/2 bg-common-gray"
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMenu;
