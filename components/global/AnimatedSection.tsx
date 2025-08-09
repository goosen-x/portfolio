'use client'

import { motion, useInView, Variants } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  animation?: 'fade' | 'slide' | 'scale' | 'blur'
}

export const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  animation = 'slide'
}: AnimatedSectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    margin: '-50px'
  })

  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 }
  }

  const animations: Record<string, Variants> = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    slide: {
      hidden: { 
        opacity: 0,
        ...directionOffset[direction]
      },
      visible: { 
        opacity: 1,
        x: 0,
        y: 0
      }
    },
    scale: {
      hidden: { 
        opacity: 0,
        scale: 0.9,
        ...directionOffset[direction]
      },
      visible: { 
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0
      }
    },
    blur: {
      hidden: { 
        opacity: 0,
        filter: 'blur(10px)',
        ...directionOffset[direction]
      },
      visible: { 
        opacity: 1,
        filter: 'blur(0px)',
        x: 0,
        y: 0
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animations[animation]}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.21, 1.11, 0.81, 0.99]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Дополнительный компонент для анимации списков
export const AnimatedList = ({ 
  children, 
  className = '',
  delay = 0
}: {
  children: ReactNode
  className?: string
  delay?: number
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    margin: '-50px'
  })

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.21, 1.11, 0.81, 0.99]
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const AnimatedListItem = motion.div