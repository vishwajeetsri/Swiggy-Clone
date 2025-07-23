import React from 'react'

const RestCard = ({infoRest}) => {
  return (
    <div>
        <img className='w-64 h-44 object-cover' src={"https://media-assets.swiggy.com/swiggy/image/upload/"+infoRest.info.cloudinaryImageId} alt="" />
    </div>
  )
}

export default RestCard