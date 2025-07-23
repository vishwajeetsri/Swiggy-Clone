import React from 'react'
import { dineoutRestaurants } from '../Utils/DineoutData'
import DineCard from './DineCard'

const DineOptions = () => {
  return (
    
    <div className='w-[80%] container mx-auto mt-20  font-serif'>
        <h1 className='text-2xl font-bold'>Discover best restaurants on Dineout</h1>
        <div className='container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-4'>
             {
                dineoutRestaurants.map((dineRest) => {
                    return(
                        <DineCard key={dineRest?.info?.id} dineRest={dineRest} />
                    )
                })
             }
        </div>

    </div>
  )
}

export default DineOptions