'use client'

import { motion } from 'framer-motion'

const slideDown = {
  initial: {
    y: '100%',
    opacity: 0,
    rotate: 15,
  },
  open: (i: number) => ({
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      delay: 2 + (i) * 0.02,
      duration: 0.5,
      
    }
  })
}

interface titleProps {
  text: string
  className?: string
}

/**
 * Takes in a title string and animates it
 * 
 * @param text: text string to animate 
 * @returns an animated div with each character in an individual span that will animate with different delays
 */
const Title: React.FC<titleProps> = ({text, className}) => {


  return (
    <p className = 'm-0 inline-block'>
      {text.split('').map((str, i) => {
        return (
        <span className = 'relative inline-flex overflow-hidden' key = {i}>
          <motion.span
            className = {`${className} text-center tracking-tight uppercase`}
            custom = {i}
            whileInView="open"
            viewport={{ once: true }}
            initial={'initial'}
            variants={slideDown}>
              {str}
          </motion.span>
        </span>
      )})}
    </p>
  )
}

export default Title