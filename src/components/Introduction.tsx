import React, { useRef } from "react";
import Word from "./TextOpacity/Word";
import { useScroll } from "framer-motion";

const paragraph = `Empowering all-scale startups with custom web experiences that are memorable and drive success. With a passion for design and development, I take projects from ideation to launch, ensuring a seamless journey that leaves a lasting impact in the digital landscape.`;

const Introduction = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start 0.9", "end 0.25"],
  });
  const words = paragraph.split(" ");

  return (
    <>
      <div className="h-screen px-[5%] bg-common-background-gray flex justify-center items-center ">
        <span className="font-light text-heading text-common-background-cream">
          Introduction
        </span>
        <span
          ref={container}
          className="font-light text-heading text-common-background-cream flex flex-wrap w-1/3"
        >
          {words.map((word, indx) => {
            const start = indx / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={indx} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </>
  );
};

export default Introduction;
