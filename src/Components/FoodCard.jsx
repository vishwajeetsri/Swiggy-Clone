import React from 'react'

const FoodCard = ({foodData}) => {
  return (
    <div>
        <a href={foodData?.action?.link}>
        <img className='w-40 h-50 ' src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId } alt="" />
        </a>
    </div>
  )
}

export default FoodCard