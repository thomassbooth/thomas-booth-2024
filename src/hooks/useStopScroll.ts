import { useEffect, useState } from "react";

const useStopScroll = () => {
  const overWriteScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      overWriteScroll();
    };

    // Attach event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Run only once on mount
};

export default useStopScroll;
