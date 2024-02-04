"use client";

import useStopScroll from "@/hooks/useStopScroll";
import { motion, AnimatePresence } from "framer-motion";
import React, { SetStateAction, useCallback, useEffect, useState } from "react";
import { transition } from "./anim";

interface loadingProps {
  loaded: boolean;
  setLoaded: React.Dispatch<SetStateAction<boolean>>;
}

const Loading: React.FC<loadingProps> = ({ loaded, setLoaded }) => {
  useEffect(() => {
    setTimeout(() => setLoaded(true), 1000);
  }, []);

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <span className="fixed leading-none inline-flex overflow-hidden uppercase gap-10 text-common-background-cream">
          <motion.span
            initial={{ y: 100 }}
            animate={{ y: 0, transition: { delay: 0.5, duration: 0.5 } }}
            exit={{ opacity: 0 }}
            className="text-loading-background text-9xl font-bold z-50"
          >
            THOMAS
          </motion.span>
          <motion.span
            initial={{ y: -150 }}
            animate={{ y: 0, transition: { delay: 0.5, duration: 0.5 } }}
            exit={{ opacity: 0 }}
            className="text-loading-background text-9xl font-bold z-50"
          >
            BOOTH
          </motion.span>
          <motion.span
            initial={{ y: 100 }}
            animate={{ y: 0, transition: { delay: 0.5, duration: 0.5 } }}
            exit={{ opacity: 0 }}
            className="text-loading-background text-9xl font-bold z-50"
          >
            FOLIO
          </motion.span>
        </span>
      </div>
      <motion.div
        exit={{ height: 0, transition: transition }}
        className="fixed top-0 bg-common-gray left-0 w-1/4 z-40 h-screen"
      />
      <motion.div
        exit={{ height: 0, transition: transition }}
        className="fixed bottom-0 bg-common-gray left-[25%] w-1/4 z-40 h-screen"
      />
      <motion.div
        exit={{ height: 0, transition: transition }}
        className="fixed top-0 bg-common-gray w-1/4 left-[50%] flex justify-center items-center z-40 h-screen"
      />
      <motion.div
        exit={{ height: 0, transition: transition }}
        className="fixed bottom-0 bg-common-gray w-1/4 left-[75%] flex justify-center items-center z-40 h-screen"
      />
    </>
  );
};

export default Loading;
