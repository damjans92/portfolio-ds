import React from 'react'

const AnimatedBackground = () => {
  return (
    <div className='animate-slideinX absolute right-0 top-0 h-full w-full overflow-hidden bg-slate-100 z-[10]'>
      <div className='absolute right-0 top-0 bg-[#141946]   -skew-x-1 h-full animate-grow1 z-[5]' />
      <div className='absolute right-0 top-0 bg-[#385dff] skew-x-3 h-full animate-grow2 z-[4]' />
      <div className='absolute right-0 top-0  bg-slate-300 -skew-x-3 h-full   animate-grow3 z-[3]' />
    </div>
  )
}

export default AnimatedBackground
