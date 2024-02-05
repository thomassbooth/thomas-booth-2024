import React from "react";
import { HTMLMotionProps, SVGMotionProps, motion } from 'framer-motion'

interface halfMoonProps extends SVGMotionProps<SVGSVGElement> {
    className?: string;
    style?: any
  }

const HalfMoon: React.FC<halfMoonProps> = ({className, style,  ...props}) => {
  return (
    <>
      <motion.svg
        {...props}
        style = {{...style}}
        className = {className}
        width="1186"
        height="1186"
        viewBox="0 0 1186 1186"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="593"
          cy="593"
          r="593"
          fill="url(#paint0_linear_4949_267)"
        ></circle>
        <defs>
          <linearGradient
            id="paint0_linear_4949_267"
            x1="593"
            y1="0"
            x2="593"
            y2="1186"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#DDDDD5"></stop>
            <stop offset="1" stop-color="#DDDDD5" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </motion.svg>
    </>
  );
};

export default HalfMoon;
