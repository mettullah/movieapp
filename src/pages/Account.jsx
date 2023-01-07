import React from 'react'
import { SavedShows } from '../components/SavedShows'

export const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img className='w-full h-[400px] object-cover' src="https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png" alt="/" />

    <div className='bg-block/60 fixed top-0 w-full h-[550px]'></div>
    <div className='absolute top-[20%] p-4 md:p-8'>
    <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>  
    </div>

    </div>
    <SavedShows/>

    </>
  )
}
