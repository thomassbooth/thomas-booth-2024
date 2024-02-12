"use client";

import { useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaRegPaperPlane } from "react-icons/fa";
import Marquee from "../Marquee";
import Button from "../Button";
import Magnetic from "../Magnetic";

const links = [
  { text: "linkedin", link: "https://linkedin.com" },
  { text: "github", link: "https://github.com" },
  { text: "instagram", link: "https://instagram.com" },
  { text: "twitter ", link: "https://twitter.com" },
];

const Info = () => {
  const container = useRef(null);
  const [dimensions, setDimensions] = useState<{
    width: number | null;
    height: number | null;
  }>({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    resize();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["50vh", "0vh"]);

  return (
    <div ref={container} className="w-screen mt-[-100vh]">
      <div className="h-screen"></div>
      <div className="sticky -bottom-0 h-[80vh] bg-common-background-cream text-common-gray">
        <motion.div
          style={{ y }}
          className="w-full h-full relative flex justify-between"
        >
          <div className="items-start h-full w-full flex flex-col justify-between">
            <div className="w-full pt-[1vh] px-[7%] flex justify-center">
              <div>
                <button
                  className="text-right font-semibold text-text-sm"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <motion.h2
                    id="scrollText"
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    transition={{ delay: 2.5, duration: 0.5, ease: "easeIn" }}
                    className="uppercase text-sm flex items-center text-right font-light text-common-gray tracking-[.01rem] "
                  >
                    back to top
                  </motion.h2>
                </button>
              </div>
            </div>
            <section className="px-[7%]">
              <div className="flex flex-col pointer-events-none">
                <span className="text-subtitle font-semibold">
                  <span className="font-light">Lets</span> work
                </span>
                <span className="text-title font-semibold line">together.</span>
              </div>
              <div className="flex gap-4 items-end mt-10">
                {links.map((link, indx) => {
                  return (
                    <Magnetic key={indx}>
                      <Button className="px-8 py-2">
                        <a href={link.link} className="text-text">
                          {link.text}
                        </a>
                      </Button>
                    </Magnetic>
                  );
                })}
              </div>
            </section>
            <motion.span className="w-screen text-title tracking-tight font-semibold overflow-hidden">
              <Marquee>
                <span className="inline-flex">
                  thomasbooth26@gmail.com
                  <FaRegPaperPlane className="block mx-5" />
                </span>
              </Marquee>
            </motion.span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Info;
