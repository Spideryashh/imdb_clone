import React from 'react'

function favourites() {
  return (
    <>
        <h1>Favourites <hr /><br /></h1>
        <div className='flex justify-center flex-wrap space-x-3 items-center p-3'>Genre
            <button className='text-xl p-2 bg-gray-800 hover:bg-orange-800 hover:scale-110 ease-out duration-300 text-rose-400 font-bold rounded-xl '>All Genre</button>
            <button className='text-xl p-2 bg-gray-800 hover:bg-orange-800 hover:scale-110 ease-out duration-300 text-yellow-400 font-bold rounded-xl '>Action</button>
            <button className='text-xl p-2 bg-gray-800 hover:bg-orange-800 hover:scale-110 ease-out duration-300 text-yellow-400 font-bold rounded-xl '>Comedy</button>
            <button className='text-xl p-2 bg-gray-800 hover:bg-orange-800 hover:scale-110 ease-out duration-300 text-yellow-400 font-bold rounded-xl '>Romance</button>
        </div>
        <div>input Container</div>
        <div>Table</div>
        <div>Pagination</div>
    </>
  )
}

export default favourites