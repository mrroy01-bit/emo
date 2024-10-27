import React from 'react'

function Header() {
  return (
    <div className="flex items-end justify-between m-4">
        <h1 className="text-2xl font-bold"> <span className='text-xl'>Hello</span><br />Mr Roy 👋</h1>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Log Out</button>
    </div>
  )
}

export default Header