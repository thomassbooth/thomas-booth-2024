"use client";
import useHover from "@/store/useCursor";
import React from "react";
import Card from "./Card";

const Random = () => {
  const [cursor, setCursor] = useHover((state) => [state.cursor, state.setCursor]);
  return (
    <div
      className="bg-red-300 w-[1000px] h-[200px] text-white z-20"
      onMouseLeave={() => {
        console.log("leaving");
        setCursor({size: 16, type: 'none'});
      }}
      onMouseEnter={() => {
        console.log('entering')
        setCursor({size: 100, type: 'random', content: <Card colour="red"/>});
      }}
    >
      {cursor.type === 'random' ? "true" : "false"}
    </div>
  );
};

export default Random;
