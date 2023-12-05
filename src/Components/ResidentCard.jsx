import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentCard = ({ residentURL }) => {
    const [residenInfo, setResidentInfo] = useState(null)



    const bgByStatus =  {
        Alive: "bg-green-500",
        Dead: "bg-red-500",
        unknown: "bg-slate-500",
    };

    useEffect(() => {

      axios.get(residentURL)
      .then(({data}) => setResidentInfo(data))
      .catch((err) => console.log(err))

    }, [])
    
    return (
        <article>
            <header className='relative border-t-2 border-l-2 border-r-2 border-green-700'>
                <img src={residenInfo?.image} alt='' />

                {/* Status */}
                <div className='flex items-center gap-2 absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 text-white p-1 px-2'>
                    <div className={`h-4 aspect-square rounded-full ${bgByStatus[residenInfo?.status]}`}></div>
                    <span>{residenInfo?.status}</span>
                </div>

            </header>

            <section className='border-2 border-green-700 font-fira-code'>
                <h5 className='flex justify-center text-xl font-bold mt-2'>{residenInfo?.name}</h5><hr className=' border-sky-950'/>
                
                <ul className='mt-4 h-24'>
                    <li className='flex gap-10'>
                        <span className='bg-black'>species:</span>
                        {residenInfo?.species}
                    </li>

                    <li className='flex gap-10'>
                        <span className=''>Origin:</span>
                        {residenInfo?.origin.name}
                    </li>

                    <li className='flex gap-10'>
                        <span className=''>Times appear:</span>
                        {residenInfo?.episode.length}
                    </li>
                    
                </ul>
            </section>

        </article>
    )
}

export default ResidentCard