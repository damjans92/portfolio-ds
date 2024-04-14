import React from 'react'

const ExperienceItem = ({ year, duration, title, details }) => {
  return (
    <li className='mb-10 ml-4 '>
      <div className='absolute w-3 h-3 bg-stone-200 rounded-full -left-[6px] top-[7px] border border-white' />
      <p className='flex flex-wrap gap-4 items-center justify-start text-xs md:text-sm'>
        <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>
          {year}
        </span>
        <span className='text-lg font-semibold text-[#001b5e]'>{title}</span>
        <span className='my-1 text-sm font-normal leading-none text-stone-400'>
          {duration}
        </span>
      </p>
      <div className='my-2 text-base font-normal text-stone-500'>{details}</div>
    </li>
  )
}

export default ExperienceItem
