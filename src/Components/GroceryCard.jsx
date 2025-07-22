import React from 'react'

const GroceryCard = ({foodData}) => {
  return (
    <div className='flex-none'>
        <a href={foodData?.action?.link}>
        <img className='w-40 h-50' src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId} alt="" />
        <h1 className='text-center font-serif font-bold'>{foodData?.action?.text}</h1>
        </a>
    </div>
  )
}

export default GroceryCard