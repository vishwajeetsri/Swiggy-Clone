import React from 'react'

const DineCard = ({ dineRest }) => {
  return (
    <a href={dineRest?.cta?.link}>
    <div className="flex-none relative w-80 h-48 overflow-hidden rounded-lg">
      <img
        className="w-full h-full object-cover"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${dineRest?.info?.mediaFiles[0]?.url}`}
        alt={dineRest?.info?.name}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-10"></div>
      
      {/* Text on top of gradient */}
      <div className="absolute bottom-1 left-2 right-2 flex justify-between items-center z-20">
        <p className="text-white text-lg font-semibold">{dineRest?.info?.name}</p>
        <p className="text-white text-lg font-semibold">{dineRest?.info?.rating?.value}</p>
      </div>
    </div>
    </a>
  )
}

export default DineCard
