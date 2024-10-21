"use client";

import React, { useEffect, useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import Image from "next/image";
import FallingText from "@/components/FallingText";
import FormElement from "@/components/FormElement";
import Title from "@/components/Title";
import Button from "@/components/Button";
import Magnetic from "@/components/Magnetic";

const imageOpen = {
  initial: {
    y: "50%",
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 0.5,
    },
  },
};

const ContactPage = () => {
  const container = useRef(null);
  const title = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "5vw"]);

  const imageWrapperY = useTransform(scrollYProgress, [0, 1], ["0vh", "12vh"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0vh", "10vh"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0vh", "2vh"]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-[5vw] w-screen flex flex-col justify-center bg-pastel-gray-light">
      <header
        ref={container}
        className="flex flex-col h-screen justify-end text-background-gray text-common-gray"
      >
        <div className="flex w-full justify-between items-center">
          <div className="inline-flex flex-col gap-5" ref={title}>
            <Title className="text-[9rem] leading-[7.2rem] " text={"Lets"} />
            <motion.div className="inline-block" style={{ x }} ref={container}>
              <Title
                className="font-bold text-[9rem] leading-[7.2rem]"
                text={"Work"}
              />
            </motion.div>
            <Title
              className="font-bold text-[9rem] leading-[7.2rem]"
              text={"Together"}
            />
          </div>
          <motion.div style={{ y: imageWrapperY }}>
            <motion.div
              whileInView="open"
              viewport={{ once: true }}
              initial={"initial"}
              variants={imageOpen}
              className="flex justify-start items-end w-[30vw] h-[54vh] relative overflow-hidden grayscale-[0.3]"
            >
              <motion.div
                style={{ y: imageY }}
                className="w-[32vw] h-[57vh] relative"
              >
                <Image
                  className="object-cover"
                  src="/tom_monkey.JPG"
                  alt="polar bear"
                  fill
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.p
            style={{ y: textY }}
            whileInView="open"
            viewport={{ once: true }}
            initial={"initial"}
            variants={imageOpen}
            className="py-[7vh] font-[300] text-[1.3vw]"
          >
            Have a few questions? Let me know.
          </motion.p>
        </div>
      </header>
      <form className="mt-10 w-3/4">
        <FormElement
          no={"01"}
          title={"WHATS YOUR NAME?"}
          placeholder={"John Doe *"}
          input={true}
        />
        <FormElement
          no={"02"}
          title={"WHATS YOUR EMAIL?"}
          placeholder={"John@doe.com *"}
          input={true}
        />
        <FormElement
          no={"03"}
          title={"WHAT SERVICE ARE YOU LOOKING FOR?"}
          placeholder={"Purchasing, workshop or trips..."}
          input={true}
        />
        <FormElement
          no={"04"}
          title={"YOUR MESSAGE"}
          placeholder={"Hey Tom, i have an awesome new idea for a project!"}
          input={false}
        />
        <section className="w-full flex justify-end py-10">
          <Magnetic>
            <Button
              className="px-8 py-2"
              onClick={() => {}}
            >
              <a className="text-2xl">SEND MESSAGE</a>
            </Button>
          </Magnetic>
        </section>
      </form>
    </div>
  );
};

export default ContactPage;
