"use client";

import Cursor from "@/components/Cursor/Cursor";
import MenuButton from "@/components/Header/Menu/MenuButton";
import Menu from "@/components/Header/Menu/NavMenu";
import Navbar from "@/components/Header/Navbar";
import Loading from "@/components/Loading";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const LoadingLayout = ({ children }: { children: React.ReactNode }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!loaded && <Loading loaded={loaded} setLoaded={setLoaded} />}
      </AnimatePresence>
      {children}
    </>
  );
};

export default LoadingLayout;
