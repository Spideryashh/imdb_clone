import React from 'react'

function Pagination({pageProp,goAhead,goBack}) {
  
  return (
    <>
        {/* <h2>Pagination</h2> */}
        <div className='w-full flex justify-center mt-5 mb-5'>
            <button className='p-2 border-2 border-orange-500  rounded-l-xl border-r-0 hover:scale-110 ease-out duration-300 bg-yellow-400' onClick={goBack}>Previous</button>
            <button className='p-2 border-2 border-orange-500  hover:scale-110 ease-out duration-300 font-bold bg-yellow-400'>{pageProp}</button>
            <button className='p-2 border-2 border-orange-500  rounded-r-xl border-l-0 hover:scale-110 ease-out duration-300 bg-yellow-400' onClick={goAhead}>Next</button>
        </div>
    </>
  )
}

export default Pagination