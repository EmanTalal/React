import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [prcuct,setProct]=useState([])

    const getdata=()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            setProct(res.data)
            console.log(res.data)
        })
    }

         useEffect(()=>{
            getdata();
     },[])



    // const shodata =()=>{
    //     axios.post('https://fakestoreapi.com/products').then()

    //     }).then(res=>{
    //         console.log(res.data)
    //     })
    //  }


     const serch=prcuct.filter(e=>e.title.toLowerCase().includes(prcuct))

  return (
    <div>


        
{/* <div class="flex p-2 justify-between items-center border-b border-gray-300 flex-wrap">
    <div class="flex items-center">
        <img  className='logo'src="data:image/png;base64,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" class="w-10 h-10"/>
    </div>
    <div class="relative flex items-center hidden md:inline-flex">
        <input type="text" placeholder="Search" class="border border-gray-200 rounded-md py-1 px-2"/>
    </div>
    <div class="flex items-center gap-2">
        <button class="border px-2 py-1 rounded-md">Home</button>
        <button class="border px-2 py-1 rounded-md">Location
        </button>
        <button class="border px-2 py-1 rounded-md bg-purple-600 text-white hover:bg-purple-700">Teams</button>
    </div>
</div> */}

{/* 
{prcuct.map((item,index)=>(
        <div class="p-4 max-w-sm flex flex-row" key={index}> 
        <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
            <div class="flex items-center mb-3">
                <div
                    class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </div>
                <h2 class="text-white dark:text-white text-lg font-medium">title:{item.title}</h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
                <p class="leading-relaxed text-base text-white dark:text-gray-300">Prise
                </p>
                <a href="#" class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Show Proucts:
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>

 ))}  */}


 

{prcuct.map((item,index)=>(
    
    <div className='contner'>
<div className="card bg-base-120 w-96 m-8" key={index}>
  <figure>
    <img className='imge'
      src={item.image}
      alt="Shoes"/>
  </figure>
  <div className="">
    <h2 className="card-title p-7"> Name :{item.title}
    </h2>
    <div className="card-actions justify-end">
      <div className="badge badge-outline p-7 ">Prise {item.price}</div>
    </div>
    <Link to="/Detils">
    <button className="btn btn-success m-8">Show Detiles</button>
    </Link>
   </div>

</div>

</div>
))}
    </div>
  )
}

export default Home