import React from 'react'
import ExperienceItem from './ExperienceItem'
import { motion } from 'framer-motion'
import { expData } from '../data/experiences'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // Adjust y for desired offset
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }, // Adjust duration for animation speed
}

const Experience = () => {
  return (
    <div
      id='experience'
      className='max-w-[1040px] m-auto md:pl-20 p-4 py-10 md:py-16'
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className='relative w-fit mx-auto py-4 px-2 mb-16 text-4xl font-fira font-extrabold text-center gradient-text overflow-hidden group'>
          Experience
        </h1>
      </motion.div>
      <div className=''>
        {expData.map((exp, i) => (
          <motion.ul
            key={i}
            initial={{ opacity: 0, translateX: -50 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className='flex flex-col md:flex-row relative border-l border-stone-200 font-mont'
          >
            <ExperienceItem
              key={i}
              year={exp.year}
              title={exp.title}
              duration={exp.duration}
              details={exp.details}
            />
          </motion.ul>
        ))}
      </div>
    </div>
  )
}

export default Experience
