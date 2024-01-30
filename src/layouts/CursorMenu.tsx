"use client";

import Cursor from "@/components/Cursor";
import Menu from "@/components/Header/Menu";
import React, { useRef } from "react";

const CursorMenu = ({ children }: { children: React.ReactNode }) => {
  const stickyElement = useRef(null);
  return (
    <div>
      <Menu ref={stickyElement} />
      <Cursor stickyElement={stickyElement} />
      {children}
    </div>
  );
};

export default CursorMenu;
