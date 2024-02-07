"use client";
import useHover from "@/store/useCursor";
import React from "react";
import Card from "./Card";
import Project from "./Hover/Project";
import { useRouter } from "next/navigation";

const Random = () => {
  const [cursor, setCursor] = useHover((state) => [
    state.cursor,
    state.setCursor,
  ]);
  const router = useRouter();
  return (
    <div
      // onClick={() => {
      //   setCursor({size: 16, type: 'none'})
      //   router.push("test");
      // }}
      className="bg-red-300 w-[1000px] h-[200px] text-white z-20"
      onMouseLeave={() => {
        setCursor({ size: 16, type: "none" });
      }}
      onMouseEnter={() => {
        setCursor({ size: 100, type: "scale", colour: 'bg-green-200',  content: <Project /> });
      }}
    >
      {cursor.type === "scale" ? "true" : "false"}
    </div>
  );
};

export default Random;
