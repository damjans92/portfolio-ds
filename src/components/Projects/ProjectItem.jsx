import React from 'react'
import { motion } from 'framer-motion'

const ProjectItem = ({ title, url, image, tags, order }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: order * 0.2 }}
      viewport={{ once: true, amount: 0.25 }}
      className='relative flex flex-col font-mont'
    >
      <a
        href={url}
        target='_blank'
        className='relative max-h-[300px] shadow-lg shadow-gray-400 rounded-xl items-center justify-center w-full group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'
      >
        <img
          src={image}
          alt=''
          className='object-left-top object-cover w-full h-full rounded-xl group-hover:opacity-10 transition-opacity duration-300'
        />
        <div className='hidden group-hover:flex flex-col items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
          <h3 className='text-2xl mb-6 font-bold text-white tracking-wider text-center'>
            {title}
          </h3>
        </div>
      </a>
      <div className='flex flex-wrap gap-1 mt-5'>
        {tags.map((tag, i) => (
          <span
            className='py-2 px-2 bg-blue-900 text-white rounded-lg text-sm'
            key={i}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default ProjectItem
