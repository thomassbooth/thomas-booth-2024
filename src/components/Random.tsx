"use client";
import useHover from "@/store/useHover";
import React from "react";

const Random = () => {
  const [hover, setHover] = useHover((state) => [state.hover, state.setHover]);
  return (
    <div
      className="bg-red-300 w-[1000px] h-[200px] text-white z-20"
      onMouseLeave={() => {
        console.log("leaving");
        setHover(false);
      }}
      onMouseEnter={() => {
        console.log('entering')
        setHover(true);
      }}
    >
      {hover ? "true" : "false"}
    </div>
  );
};

export default Random;
