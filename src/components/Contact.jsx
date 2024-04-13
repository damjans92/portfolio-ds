import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div
      id='contact'
      className='max-w-[1040px] m-auto md:pl-20 p-4 py-10 md:py-16'
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <h1 className='relative w-fit mx-auto py-4 px-2 mb-16 text-4xl font-fira font-extrabold text-center gradient-text overflow-hidden group'>
          Contact
        </h1>
        <form
          action='https://getform.io/f/paygywwa'
          method='POST'
          encType='multipart/form-data'
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 '>
            <div className='flex flex-col'>
              <label
                htmlFor=''
                className='uppercase font-semibold text-transform'
              >
                Name
              </label>
              <input
                type='text'
                name='name'
                className='border-2 mt-2 border-gray-300 p-2 rounded-lg focus:border-blue-400 focus:outline-none'
              />
            </div>
            <div className='flex flex-col '>
              <label
                htmlFor=''
                className='uppercase font-semibold text-transform'
              >
                Phone Number
              </label>
              <input
                type='text'
                name='phone'
                className='border-2 mt-2 border-gray-300 p-2 rounded-lg focus:border-blue-400 focus:outline-none'
              />
            </div>
          </div>
          <div className='flex flex-col mt-3'>
            <label
              htmlFor=''
              className='uppercase font-semibold text-transform'
            >
              Email
            </label>
            <input
              type='email'
              name='email'
              className='border-2 mt-2 border-gray-300 p-2 rounded-lg focus:border-blue-400 focus:outline-none'
            />
          </div>
          <div className='flex flex-col mt-3'>
            <label
              htmlFor=''
              className='uppercase font-semibold text-transform'
            >
              Subject
            </label>
            <input
              type='text'
              name='subject'
              className='border-2 mt-2 border-gray-300 p-2 rounded-lg focus:border-blue-400 focus:outline-none'
            />
          </div>
          <div className='flex flex-col mt-3'>
            <label
              htmlFor=''
              className='uppercase font-semibold text-transform'
            >
              Message
            </label>
            <textarea
              rows='10'
              name='message'
              className='border-2 mt-2 border-gray-300 p-2 rounded-lg focus:border-blue-400 focus:outline-none'
            />
          </div>
          <div className='mt-6'>
            <button
              type='submit'
              className='flex text-center bg-blue-900 w-full rounded-lg p-4 justify-center text-white font-semibold'
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default Contact
