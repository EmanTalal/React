import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

function Deteils() {
    const[products,setProcts]=useState([])
    const {id}=useParams();


    const iddata=(id)=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>{
            setProcts(res.data)
            console.log(res.data)
        })
    }
         useEffect(()=>{
            iddata()
     },[])

  return (
    <div>
        
{products.map((item,index)=>(
        <div className="p-2 max-w-sm" key={index}> 
        <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
            <div className="flex items-center mb-3">
                <div
                    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </div>
                <h2 className="text-white dark:text-white text-lg font-medium">Name:{item.title}</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-base text-white dark:text-gray-300">description:{item.description}
                </p>
            </div>
            <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-base text-white dark:text-gray-300">price:{item.price}
                </p>
            </div>
            <Link to= '/Caed'>
            <button className='px-6 py-2 min-w-[120px] text-center text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring'>add to shopping</button>
            </Link>
        </div>
    </div>
 ))} 

    </div>
  )
}

export default Deteils