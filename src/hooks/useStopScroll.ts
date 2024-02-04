import { useEffect, useState } from "react";

const useStopScroll = () => {
  const overWriteScroll = () => {
    scroll(0, 0);
  };

  useEffect(() => {
    addEventListener("scroll", overWriteScroll);

    return () => removeEventListener("scroll", overWriteScroll, false);
  }, []);
};

export default useStopScroll;
