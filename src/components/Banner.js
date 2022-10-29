import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Banner() {

  const [movie,setMovie] = useState([])
  useEffect(function(){
    // api (getting data of api using axios)
    axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=469acef9f4326bdc9094e38f470f1935&page=1").then((res)=>
    {console.table(res.data.results)
    setMovie(res.data.results[0]);}
)
},[])
  return (
    <>
        {/* <h2>Banner</h2> */}
        <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[35vh] md:h-[60vh] bg-center bg-cover flex items-end`}>
            <div className='text-xl md:text-3xl text-white p-4 bg-gray-900 w-full flex justify-center bg-opacity-50'>{movie.title}</div>
        </div>
    </>
  )
}

export default Banner