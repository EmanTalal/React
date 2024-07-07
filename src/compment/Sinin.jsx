import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import { Link } from 'react-router-dom'
function Sinin() {
    const[username,setUsername]=useState('')
    const [pssword,setPswwrod]=useState('')
    const [email,setEmail]=useState('')
    const[errr,setError]=useState('')
    const Navgate=useNavigate();

    const clicksim=(e)=>{
        e.pe.preventdefault();
    }
    const usrnamevilde=(username)=>{
        const userVaild=5
        return username.length>=userVaild
    }
    const emailvaild=(email)=>{
        const emailvaild=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return emailRegex.text(email);
    }
    const passwordvaild=(pssword)=>{
        const passwordvaild=5
        return pssword.length>=passwordvaild
    }

    if(!userVaild(username)){
        setError('plase enter username!')
        return;
    }
    if(!passwordvaild(pssword)){
        setError('plase enter password!')
        return;
    }
    if(!emailvaild(email)){
        setError('plase enter email!')
        return;
    }
    setError('')
    axios.get(`https://6657373e9f970b3b36c869e6.mockapi.io/api`)
    .then((res)=>{
        const user =res.data;
        const usernameall=user.find(e=>e.username ===username)
        const useremail=user.find(e=>e.email===email)

        axios.post(`https://6657373e9f970b3b36c869e6.mockapi.io/api`,{
            username:username,
            email:email,
            pssword:pssword,
        }).then(
            navigator('/Login')
        )
    })

  return (
    <div>
        <div class="max-w-xl py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">
  <form action="">
    <div class="mb-6">
      <label for="name" class="block text-gray-800 font-bold">Name:</label>
      <input type="text" name="name" id="name" placeholder="username" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"value={username} onChange={(e)=>setUsername(e.target.value)}/>
    </div>
    <div>
      <label for="email" class="block text-gray-800 font-bold">Email:</label>
      <input type="text" name="email" id="email" placeholder="@email" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <a href="#" class="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600">Forget Password</a>
    </div>

    <div>
      <label for="number" class="block text-gray-800 font-bold">Password:</label>
      <input type="number" name="email" id="email" placeholder="@email" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"value={pssword} onChange={(e)=>setPswwrod(e.target.value)} />
      <a href="#" class="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600">Forget Password</a>
    </div>

    <Link to='/Login'>
    <button class="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">SinUp</button>
    </Link>
  </form>
</div>
    </div>
  )
}

export default Sinin