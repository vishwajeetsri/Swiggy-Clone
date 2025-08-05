import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-wrap max-w-[80%] container mx-auto gap-5 mt-20'>
      {Array(12).fill("").map((_, index) => (
        <div
          key={index}
          className='w-[280px] p-4 bg-white shadow-md rounded-lg animate-pulse'
        >
          <div className='bg-gray-300 h-40 w-full rounded-md mb-4'></div>
          <div className='bg-gray-300 h-4 w-3/4 rounded mb-2'></div>
          <div className='bg-gray-300 h-4 w-1/2 rounded'></div>
        </div>
      ))}
    </div>
  )
}

export default Shimmer
