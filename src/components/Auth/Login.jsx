import React from 'react'

function Login() {
  return (
    <>
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className="container border-2  p-4 rounded-lg w-[300px] h-[300px]">
            <form action="" className="flex flex-col gap-4 mt-10">
                <input required   type="email" placeholder='Email' className="border-2 p-2 rounded-lg" />
                <input required   type="password" placeholder='Password' className="border-2 p-2 rounded-lg" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Login
                </button>
            </form>
        </div>
    </div>
    
    </>
  )
}

export default Login