"use client";

import useHover from "@/store/useCursor";
import React from "react";
import Me from "./Hover/Me";

const Hero = () => {
  const [cursor, setCursor] = useHover((state) => [
    state.cursor,
    state.setCursor,
  ]);
  return (
    <div className="h-screen w-screen px-[5%] flex flex-col items-center">
      <h1 className="mt-[17.5rem] w-full flex flex-col text-common-gray uppercase text-hero cursor-default">
        <span className="font-extralight text-left">Folio 2024,</span>
        <div className="w-full flex justify-end">
          <span
            className="font-semibold text-right block"
            onMouseLeave={() => {
              setCursor({ size: 16, type: "none" });
            }}
            onMouseEnter={() => {
              setCursor({
                size: 100,
                type: "random",
                colour: "bg-red-200",
                content: <Me />,
              });
            }}
          >
            Thomas Booth
          </span>
          <div className="w-4 h-4 mt-7 ml-2 rounded-full bg-common-gray"></div>
        </div>
      </h1>
      <div className="w-full">
        <h2 className="uppercase text-right font-light text-[1rem] tracking-[.01rem]">
          Dubai, United Arab Emirates.
        </h2>
      </div>
    </div>
  );
};

export default Hero;
