import React, { useEffect } from 'react'

import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Login() {
    const[username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [event,setEvent]=useState(false)
    const navgeit=useNavigate();

    const hundle=()=>{
        event(true)
    }
    useEffect(()=>{
        axios.get(`https://6657373e9f970b3b36c869e6.mockapi.io/api`)
        .then(res=>{
            setUsername(res.data);
        }).then(
            navgeit('/Home')
        )
    })

    
  return (
    <div>
        <div class="max-w-xl py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">
  <form action="">
    <div class="mb-6">
      <label for="name" class="block text-gray-800 font-bold">Name:</label>
      <input type="text" name="name" id="name" placeholder="username" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" value={username} onChange={(e)=>setUsername(e.target.value)} />
    </div>
    <div>
      <label for="email" class="block text-gray-800 font-bold">Email:</label>
      <input type="text" name="email" id="email" placeholder="@email" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <a href="#" class="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600">Forget Password</a>
    </div>
    <Link to="/Home">
    <button class="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Login</button>
    </Link>
  </form>
</div>
    </div>
  )
}

export default Login