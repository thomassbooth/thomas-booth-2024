"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";

const overWriteScroll = () => {
    scroll(0, 0);
  }

const Loading = ({ children }: any) => {
  const [loaded, setLoaded] = useState(false);



  useEffect(() => {
    addEventListener("scroll", overWriteScroll);
    setTimeout(() => setLoaded(true), 2000);
    console.log(loaded)
    if (loaded) {
        removeEventListener("scroll", overWriteScroll, false);
      }

  }, [loaded]);

  return (
    <AnimatePresence>
      {!loaded && (
        <motion.div
          exit={{ height: 0 }}
          className="fixed top-0 flex justify-center items-center w-screen bg-black z-20 h-screen"
        >
          <span className = 'text-gray-text text-9xl font-bold'>THOMAS BOOTH FOLIO</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
