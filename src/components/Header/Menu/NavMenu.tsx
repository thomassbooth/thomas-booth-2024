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
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
];

const NavMenu: React.FC<menuProps> = ({ setIsOpen, isOpen }) => {
  return (
    <div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <motion.div
              variants={menu}
              initial="initial"
              animate="open"
              exit="closed"
              className="z-10 fixed top-0 left-0 h-screen w-1/2 bg-common-background-cream"
            >
              <ul className = 'h-full w-full'>
                {links.map((link, indx) => (
                  <PageLink key={indx} title={link.title} link={link.link} setIsOpen={setIsOpen} />
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={menu}
              initial="initial"
              animate="open"
              exit="closed"
              className="z-10 fixed bottom-0 right-0 h-screen w-1/2 bg-common-gray"
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMenu;
