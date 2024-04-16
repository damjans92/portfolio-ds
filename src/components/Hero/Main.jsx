import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { FaLinkedinIn } from 'react-icons/fa'
import AnimatedBackground from './AnimatedBackground'
import pdf from '../../pdf/Damjan_Savkovic_CV.pdf'

const Main = () => {
  return (
    <div id='main' className='h-screen overflow-hidden'>
      <AnimatedBackground />
      <div className='w-full h-screen absolute top-0 left-0   z-10'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 3 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1 className='sm:text-5xl  text-4xl  sm:leading-[1.5] font-fira font-extrabold text-gray-800 gradient-text'>
              I&apos;m Damjan Savkovic
            </h1>
            <h2 className='flex sm:text-3xl text-2xl mt-4  text-gray-800'>
              I&apos;m a
              <TypeAnimation
                sequence={['Web Developer', 1000, 'Tech Enthusiast', 2000]}
                wrapper='div'
                speed={50}
                style={{ fontSize: '1em', paddingLeft: '5px' }}
                repeat={Infinity}
              />
            </h2>
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className='flex gap-16 item mt-6'>
              <div className='flex justify-between pt-6 max-w-[200px]'>
                <a
                  href='https://www.linkedin.com/in/damjansavkovic/'
                  target='_blank'
                >
                  <FaLinkedinIn className='cursor-pointer' size={20} />
                </a>
              </div>
              <a
                href={pdf}
                className='relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md'
              >
                <span className='w-full h-full bg-gradient-to-br from-[#46ffff] via-[#0285ff] to-[#6936df] group-hover:from-[#46ffff] group-hover:via-[#0285ff] group-hover:to-[#6936df] absolute'></span>
                <span className='relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400'>
                  <span className='relative text-white'>Download My CV</span>
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Main
