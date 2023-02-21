import React from 'react'

function Pagination({pageProp,goAhead,goBack}) {
  
  return (
    <>
        {/* <h2>Pagination</h2> */}
        <div class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
          <span class="text-xm text-gray-900 font-bold">
            Page - {pageProp}
          </span>
          <div className="inline-flex mt-2 xs:mt-0">
          <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l" onClick={goBack}>
            Prev</button>
          <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r" onClick={goAhead}>
          Next</button>
          </div>
        </div>

        {/* <div className='w-full flex justify-center mt-5 mb-5'>
            <button className='p-2 border-2 border-orange-500  rounded-l-xl border-r-0 hover:scale-110 ease-out duration-300 bg-yellow-400' onClick={goBack}>Previous</button>
            <button className='p-2 border-2 border-orange-500  hover:scale-110 ease-out duration-300 font-bold bg-yellow-400'>{pageProp}</button>
            <button className='p-2 border-2 border-orange-500  rounded-r-xl border-l-0 hover:scale-110 ease-out duration-300 bg-yellow-400' onClick={goAhead}>Next</button>
        </div> */}
    </>
  )
}

export default Pagination