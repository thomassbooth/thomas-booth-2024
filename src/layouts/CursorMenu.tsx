"use client";

import Cursor from "@/components/Cursor/Cursor";
import MenuButton from "@/components/Header/MenuButton";
import Menu from "@/components/Header/Nav/Menu";
import Loading from "@/components/Loading";
import { AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";

const CursorMenu = ({ children }: { children: React.ReactNode }) => {
  const stickyElement = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <MenuButton ref={stickyElement} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Cursor stickyElement={stickyElement} />
      <AnimatePresence mode="wait">
        {!loaded && <Loading loaded={loaded} setLoaded={setLoaded} />}
      </AnimatePresence>
      {children}
    </div>
  );
};

export default CursorMenu;
