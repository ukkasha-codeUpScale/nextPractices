import React from 'react'

export default function Login() {
  return (
    <div className=''>
      <h1>Login Page here......</h1>
        <form className='flex flex-col border-2 border-black'>
            <input className='border-2' type="text" placeholder='type anything here'/>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}
