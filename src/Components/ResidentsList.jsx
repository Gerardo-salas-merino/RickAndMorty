import { useEffect, useState } from "react"
import { paginationLogic } from "../utils/Pagination"
import ResidentCard from "./ResidentCard"

const ResidentsList = ({ residents }) => {
  const [currentPages, setCurrentPages] = useState(1);


  const { pages, residentsInCurrentPages } = paginationLogic(
    currentPages, 
    residents
  );

  const handleChangeNewPages = (newPage) => {
    setCurrentPages(newPage)
  }


  useEffect(() => {
    
    setCurrentPages(1)
    
  }, [residents])

  return (
    <section className="max-sm:h-[100%] min-h-screen max-sm:w-[700px] mx-auto bg-[url(/src/media/backgroundpage.png)] text-white sm:w-[100%]">

      <section 
        className=
        "grid gap-8 grid-cols-[repeat(auto-fill,_250px)] justify-center max-w-[1200px] mx-auto">

        {residentsInCurrentPages.map((resident) => (
        
          <ResidentCard key={resident} residentURL={resident}/>
        
        ))}
      </section>



      {/* Pagination */}
      <ul className="flex justify-center p-4 gap-6 flex-wrap">
        {pages.map((page) =>(
          <li key={page}>

            <button 
              className={`${currentPages === page  
              ? "bg-green-800 p-2 rounded-md text-white" 
              : "bg-black p-2 rounded-md text-white"
            }`}
              onClick={() => handleChangeNewPages(page)}>
              {page}

            </button>

          </li>

        ))}
      </ul>

    </section>
  )
}

export default ResidentsList