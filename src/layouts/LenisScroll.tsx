"use client";

import Lenis from '@studio-freight/lenis'
import React, { useEffect } from "react";

const LenisScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: any) => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);
  return <div>{children}</div>;
};

export default LenisScroll;
