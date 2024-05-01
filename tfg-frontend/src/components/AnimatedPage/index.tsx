import { motion } from 'framer-motion'
import React from 'react'
import { Container } from './styles'

const animations = {
  initial: {opacity:0, y:100},
  animate: {opacity:1, y:0},
  exit: {opacity:0, y:-100},
}

export const AnimatedPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div variants={animations} 
      initial="initial" 
      animate="animate"
      exit="exit"
      transition={{duration:0.5, type:"spring", stiffness:90}}
    >
      <Container>
        {children}
      </Container>
    </motion.div>
  )
}
