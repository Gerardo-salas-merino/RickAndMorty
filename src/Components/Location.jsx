import React, { useState } from 'react'
import axios from 'axios';
import { IconSearch } from "@tabler/icons-react";
import './style.css';


const Location = ({ locationInfo, setLocationInfo }) => {
  



  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocationID = e.target.newLocation.value;

    axios.get(`https://rickandmortyapi.com/api/location/${newLocationID}`)
    .then(({data}) => setLocationInfo(data))
    .catch((err) => console.log(err))
  }

  return (
    <section className='
      text-white 
      bg-[url(/public/media/backgroundHeader.png)] 
      bg-cover bg-center 
      items-center font-fira-code
      h-[90vh]
      lg:w-[100%]
      md:h-[90vh]
      max-sm:w-[700px]
      '
      
    >

      <div className='max-sm:h-[360px] lg:h-[360px] lg:w-[370px] md:w-[370px] mx-auto relative top-[-15%]'>
        <img 
          className='h-[360px] w-[350px] mx-auto rounded-full rotating-image' 
          src='/public/media/portal.png' alt=''  
        />

        <div className=' h-[250px] w-[300px] absolute top-28 left-20 max-sm:mx-auto max-sm:top-[40%] max-sm:left-[200px]'>

          <img 
            className='max-sm:w-[300px] max-sm:mx-auto h-[100px] w-[200px]'
            src='/public/media/phrase.png' alt=''

          />
        </div>

      </div>
      
      <form onSubmit={handleSubmit} className='max-sm:w-[60%] md:w-[60%]  lg:w-[36%] mx-auto mt-[-2%] rounded-sm border-green-700 border-2'>



        <div className='flex justify-between'>

          <input 

            className='bg-transparent text-white text-center w-[100%] font-medium text-lg'
            name='newLocation' 
            type='number'
            placeholder='Type a location Id...'
            required

          />

          <button 
            className='w-[150px] h-[45px] bg-green-700 text-white flex items-center justify-center gap-4 text-lg' 
            type='submit'
          >
            Search
            <IconSearch className='flex' />

          </button>

        </div>
      </form>

      <article className='max-sm:w-[90%] grid gap-9 mx-auto lg:w-[50%] h-[20%] bg-transparent border-2 border-green-700 mt-[40px]'>
        
        <h2 className='flex justify-center mt-7 text-green-700'>¡Wellcome to {locationInfo?.name}!</h2>


        <ul className='flex justify-evenly'>
          <li>Tipo: {locationInfo?.type}</li>
          <li>{locationInfo?.dimension}</li>
          <li>Poblacion: {locationInfo?.residents.length}</li>
        
        </ul>

      </article>



    </section>
  )
}

export default Location