import React from "react";
import { motion, useTransform } from 'framer-motion'

const Curve = ({scrollYProgress, height, width }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${300}
        Q${width / 2} ${600} 0 ${300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} 0
        Q${width / 2} 0 0 0
        L0 0
        `;


    const curve = useTransform(scrollYProgress, [0, 1], [targetPath, initialPath])

  return (
    <motion.svg className = 'z-50 w-full bg-green-400'>
      <motion.path style = {{ d: curve}} />
    </motion.svg>
  );
};

export default Curve;
