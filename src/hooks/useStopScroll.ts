import { useEffect, useState } from "react";

const useStopScroll = () => {
  const overWriteScroll = () => {
    window.scroll(0, 0);
  };

  useEffect(() => {
    console.log('run')
    addEventListener("scroll", overWriteScroll);

    return () => {
      console.log("removed")
      removeEventListener("scroll", overWriteScroll, false);
    };
  }, []);
};

export default useStopScroll;
