import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const RestaurantMenu = () => {

    const [resData, setResData] = useState(null)
  
    let {id} = useParams()
    console.log(id);

    const fetchData = async () => {
        const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5929605&lng=77.2972601&restaurantId=${id}`)
        const data = await res.json()
        setResData(data)
    }

    useEffect(()=>{
         fetchData()
    },[])

    console.log(resData)

  return (
    <div>
       Hii 
    </div>
  )
}

export default RestaurantMenu;