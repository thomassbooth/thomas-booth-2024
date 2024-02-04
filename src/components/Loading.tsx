"use client";

import useStopScroll from "@/hooks/useStopScroll";
import { motion, AnimatePresence } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";

const Loading = ({ children }: any) => {
  const [loaded, setLoaded] = useState(false);

  setTimeout(() => setLoaded(true), 2000);


  return (
    <AnimatePresence>
      {!loaded && (
        <motion.div
          exit={{ height: 0 }}
          className="fixed top-0 flex justify-center items-center w-screen bg-black z-20 h-screen"
        >
          <span className="text-loading-background text-9xl font-bold">
            THOMAS BOOTH FOLIO
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
