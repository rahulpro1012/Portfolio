import React from 'react'

function Navbar() {
  return (
    <div className='flex-col height-30 border-x-8 border-red-500 border-y-8 w-full justify-stretch'>
          
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-950 font-serif py-2 px-4 font-semibold rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Home
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-950 font-serif py-2 px-4 font-semibold rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Contact Me-
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-950 font-serif py-2 px-4 font-semibold rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Projects
            </button>
    </div>
  )
}

export default Navbar