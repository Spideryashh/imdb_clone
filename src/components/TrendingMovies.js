import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Oval } from 'react-loader-spinner'
import Pagination from './Pagination'

function TrendingMovies() {

    const [movies,setMovies] = useState([])
    const [fav,setFav] = useState([])
    const [page,setPage]= useState(1)
    const [hover, setHover] = useState('')

    function goAhead(){
        setPage(page + 1)
    }
    function goBack(){
        if(page>1){
            setPage(page - 1)
        } 
    }

    useEffect(function(){
        // api (getting data of api using axios)
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=469acef9f4326bdc9094e38f470f1935&page=${page}`).then((res)=>
        {console.table(res.data.results)
        setMovies(res.data.results);}
    )
    },[page])

    let add = (movies) => {
        let newArray = [...fav,movies]
        setFav([...newArray])
        console.log(newArray)
    }
  return (
    <>
        {/* <h2>TrendingMovies</h2> */}
        <div>
        <div className='text-center text-xl md:text-3xl font-bold mt-3 mb-5 '>Trending Movies</div>
        {
            movies.length === 0 ? 
            <div className='flex justify-center'>
            <Oval
                height="80"
                width="80"
                radius="9"
                color="orange"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass />
            </div> : 
            <div className='flex flex-wrap justify-center '>
                {
                    movies.map((movies)=>(

                        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-110 ease-out duration-300">
                            <div className={` m-4 bg-[url(https://image.tmdb.org/t/p/w500/${movies.backdrop_path})] h-[35vh]  bg-center bg-cover`}
                                    onMouseEnter={() => {
                                        setHover(movies.id)
                                    }}

                                    onMouseLeave={() =>
                                        setHover("")}
                            >
                                {
                                hover === movies.id && <> {!fav.find((m) => m.id === movies.id) ?
                                        <div className='absolute top-2 right-2 p-2 bg-gray-800 rounded-xl text-xl cursor-pointer' onClick={() => add(movies)}>😍</div> : 
                                        <div className='absolute top-2 right-2 p-2 bg-gray-800 rounded-xl text-xl cursor-pointer' onClick={() => add(movies)}>📍</div>
                                } </>
                                }

                            </div> 
                                <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{movies.title}</div>
                                <p className="text-gray-700 text-base">{movies.overview}</p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{movies.release_date}</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{movies.vote_count}</span>
                                <span className="inline-block mr-3 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{movies.vote_average}</span>
                                
                            </div>
                            </div>
    
                    ))
                }
            </div>
        }
        </div>
        
        <Pagination pageProp={page} goAhead={goAhead} goBack={goBack}/>       
    </>
  )
}

export default TrendingMovies