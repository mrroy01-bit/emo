import React, { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);

    setEmail("")
    setPassword("")
  };

  return (
    <>
      <div className='flex h-screen w-screen items-center justify-center'>
        <div className="container border-2  p-4 rounded-lg w-[300px] h-[300px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-10">
            <input required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
             type="email" placeholder='Email' className="border-2 p-2 rounded-lg" />
            <input required 
            value={password}
             onChange={(e) => setPassword(e.target.value)}
              type="password" placeholder='Password' className="border-2 p-2 rounded-lg" />
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