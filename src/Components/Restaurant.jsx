import React, { useEffect, useState } from 'react'
import RestCard from './RestCard'
import Shimmer from './Shimmer'

const Restaurant = () => {
     const [resData, setResData] = useState([])

    const fetchData = async () => {
        const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5929605&lng=77.2972601&is-seo-homepage-enabled=true")
        const data = await res.json()
        setResData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
    }
    useEffect(()=>{
       fetchData()
    },[])

    //Shimmer UI
    if(resData.length === 0)
      return(
      <Shimmer />
    )
    
  return (
    <div className='flex flex-wrap max-w-[80%] container mx-auto gap-5 mt-20'>
        {resData.map((infoRest) => {
            return(
                <RestCard key={infoRest?.info?.id} infoRest={infoRest} />
            )
        })}
    </div>
  )
}

export default Restaurant;
//.data.cards[0].card.card.gridElements.infoWithStyle.info