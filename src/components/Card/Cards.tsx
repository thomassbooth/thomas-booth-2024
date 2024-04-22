'use client'

import { useScroll } from "framer-motion";
import React, { useRef } from "react";
import Card from "./Card";

const projects = [
    {
      title: "Project 1",
      description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
      src: "rock.jpg",
      link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
      color: "#BBACAF"
    },
    {
      title: "Project 2",
      description: "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
      src: "tree.jpg",
      link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
      color: "#977F6D"
    },
  ]

const Cards = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} >
      {projects.map((project, i) => {
        return (
          <Card
            key={`p_${i}`}
            i={i}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            project = {project}
          />
        );
      })}
    </div>
  );
};

export default Cards;
