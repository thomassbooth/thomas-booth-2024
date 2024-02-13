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

  // useStopScroll()
  return (
    <>
      <div className="fixed w-screen h-screen flex justify-center items-center z-50 top-0 pointer-events-none">
        <span className="leading-none inline-flex overflow-hidden uppercase text-common-background-cream">
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0, transition: { duration: 0.4, ease: "easeIn" } }}
            exit={{ y: -150, transition: { duration: 0.5 } }}
            className="w-4 h-4 mt-16 mr-2 rounded-full z-50 bg-common-background-cream"
          />
          <motion.span
            initial={{ y: 100 }}
            animate={{
              y: 0,
              transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
            }}
            exit={{ y: -150, transition: { duration: 0.5 } }}
            className="text-9xl font-semibold z-50"
          >
            T
          </motion.span>
          <motion.span
            initial={{ y: 100 }}
            animate={{
              y: 0,
              transition: { delay: 0.25, duration: 0.4, ease: "easeIn" },
            }}
            exit={{ y: -150, transition: { duration: 0.5 } }}
            className="text-9xl font-semibold z-50"
          >
            B
          </motion.span>
          <motion.span
            initial={{ y: -100 }}
            animate={{ y: 0, transition: { duration: 0.4, ease: "easeIn" } }}
            exit={{ y: -150, transition: { duration: 0.5 } }}
            className="text-lg font-light z-50"
          >
            2024
          </motion.span>
        </span>
      </div>
      <motion.div
        exit={{ height: 0, transition: transition }}
        className="fixed top-0 bg-common-background-gray left-0 w-1/4 z-40 h-screen"
      />
      <motion.div
        exit={{ height: 0, transition: transition }}
        className="fixed bottom-0 bg-common-background-gray left-[25%] w-1/4 z-40 h-screen"
      />
      <motion.div
        exit={{ height: 0, transition: transition }}
        className="fixed top-0 bg-common-background-gray w-1/4 left-[50%] flex justify-center items-center z-40 h-screen"
      />
      <motion.div
        exit={{ height: 0, transition: transition }}
        className="fixed bottom-0 bg-common-background-gray w-1/4 left-[75%] flex justify-center items-center z-40 h-screen"
      />
    </>
  );
};

export default Loading;
