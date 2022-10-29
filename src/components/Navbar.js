import React from 'react'
import Logo from '../img/imdb-logo.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
        {/* <h2>Navbar</h2> */}
        <nav className='flex bg-gray-900 space-x-8  items-center pl-5 py-1'>
            <img src={Logo} alt='Logo' className={`bg-[url(${Logo})] h-[6vh] md:h-[8vh] bg-center bg-cover`}></img>
            <Link to="/" className='text-yellow-400 text-xl md:text-3xl font-bold cursor-pointer hover:scale-110 ease-out duration-300'>Movies</Link>
            <Link to="fav" className='text-rose-500 text-xl md:text-3xl font-bold cursor-pointer hover:scale-110 ease-out duration-300'>Favourites</Link>
            <button className='text-black text-xl md:text-xl font-bold bg-yellow-400 p-2 rounded-xl hover:scale-110 ease-out duration-300 absolute top-2 right-2'>Login</button>
        </nav>
    </>

  )
}

export default Navbar