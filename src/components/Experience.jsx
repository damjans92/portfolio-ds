import React from 'react'
import ExperienceItem from './ExperienceItem'
import { motion } from 'framer-motion'

const data = [
  {
    id: 5,
    year: '2023',
    duration: 'current',
    title: 'Personal Projects',
    details:
      'Learning Blender and 3D modelling and doing personal projects in ReactJs',
  },
  {
    id: 4,
    year: 2022,
    title: 'LetsgoDev ',
    duration: '4 months',
    details:
      'Contributed to the development of the frontend using Angular for the BarrelFish candidate search app. Collaborated with the team to improve user interface',
  },
  {
    id: 3,
    year: 2021,
    title: 'Personal Projects',
    details: 'Learning ReactJs and doing personal projects and courses',
  },
  {
    id: 2,
    year: 2018,
    title: 'Optima Apps',
    duration: '2 years',
    details: (
      <>
        <ul>
          <li>
            - Creating frontend for websites mostly made in Zend framework.
          </li>
          <li>
            - Content management and improving existing websites. Creating
            newsletters.
          </li>
          <li>- Using Git version control system.</li>
          <li>- Creating newsletters, custom and Mailchimp</li>
        </ul>

        <span>Projects:</span>
        <ul>
          <li>
            Inspiracija (Live) - HTML, CS, JS, jQuery (based on existing design)
          </li>
          <li>
            Cuvam te (Live) - HTML, CS, JS, jQuery (based on existing design)
          </li>
          <li>eTurista (Live) - part of work – HTML, CS, JS, jQuery</li>
          <li>Alboomio - HTML, CS, SCSS, JS, jQuery</li>
          <li>
            Some content changes(HTML, CSS, JS) for Vlada Republike Srbije,
          </li>
          <li>Ministartstvo zdravlja, Kancelarija za ITE</li>
        </ul>
      </>
    ),
  },
  {
    id: 1,
    year: 2016,
    title: 'Smart Web Solutions',
    duration: '2 years',
    details: (
      <ul>
        <li>- Creating and maintaining custom HTML themes for Wordpress</li>
        <li>
          - Content management on many Wordpress sites and Magento websites
        </li>
        <li>- Redesign of Wordpress websites</li>
        <li>- Creating newsletters, custom and Mailchimp</li>
      </ul>
    ),
  },
]

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
        {data.map((exp, i) => (
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
