import React from 'react'

function Navbar() {
  return (
    <div className='ml-7 flex '> 
        <ul className='flex-col justify-between'>
            <li className='text-3xl text-yellow-500'>Home</li>
            <li className='text-3xl text-yellow-500'>Contact Me</li>
            <li className='text-3xl text-yellow-500'>Projects</li>
        </ul>
    </div>
  )
}

export default Navbar