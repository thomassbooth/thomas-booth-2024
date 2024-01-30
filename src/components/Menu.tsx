"use client";

import { forwardRef } from "react";
import Magnetic from "./Magnetic";

const Menu = forwardRef<HTMLDivElement>(function index(props, ref) {
  return (
    <div className="fixed flex w-full justify-end p-[10px] z-10">
      <Magnetic>
        <div className="cursor-pointer relative flex gap-2 flex-col p-[30px] pointer-events-none before:block before:w-[30px] before:h-[2px] before:bg-white after:block after:w-[30px] after:h-[2px] after:bg-white">
          <div
            ref={ref}
            className="absolute left-0 top-0 w-full h-full pointer-events-auto hover:scale-[3]"
          ></div>
        </div>
      </Magnetic>
      <div></div>
    </div>
  );
});

export default Menu;
