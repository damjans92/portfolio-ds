import React from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  const animation1 = {
    // Animation for first stripe
    translateX: ['-100px', 0], // Array for movement (right to left and back)
    duration: 10, // Adjust duration for desired speed (slower)
    ease: 'linear',
    loop: Infinity,
    yoyo: Infinity, // Reverses animation upon reaching the end
  }

  const animation2 = {
    // Animation for second stripe
    translateX: ['-80px', 0], // Adjust translation for different speed
    duration: 8, // Adjust duration for desired speed (faster)
    ease: 'linear',
    loop: Infinity,
    yoyo: Infinity,
  }

  const animation3 = {
    // Animation for third stripe
    translateX: ['-60px', 0], // Adjust translation for different speed (fastest)
    duration: 6, // Adjust duration for desired speed (fastest)
    ease: 'linear',
    loop: Infinity,
    yoyo: Infinity,
  }

  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <motion.path
        fill='#385DFF'
        stroke='#000'
        d='M39.197 55.449H179.732V305.927H39.197z'
        width='100%'
        animate={animation1}
      />
      {/* First stripe */}
      <motion.path
        fill='#313A94'
        stroke='#000'
        pathLength='60%'
        width='100%'
        d='M114.723 55.449H255.25799999999998V305.927H114.723z'
        animate={animation2}
        style={{ transform: 'translateX(20%)' }}
      />{' '}
      {/* Second stripe, adjusted width and position */}
      <motion.path
        fill='#17152C'
        stroke='#000'
        pathLength='40%'
        d='M166.348 55.405H306.88300000000004V305.88300000000004H166.348z'
        animate={animation3}
        style={{ transform: 'translateX(40%)' }}
      />{' '}
      {/* Third stripe, adjusted width and position */}
    </motion.svg>
  )
}

export default AnimatedBackground
