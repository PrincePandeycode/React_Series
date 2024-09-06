import React, { useEffect, useState } from 'react'
import { useLoaderData} from 'react-router-dom'

function Github() {

    let data = useLoaderData()
//     const [data,Setdata] = useState({})

//    useEffect(() =>{
//     fetch('https://api.github.com/users/Princepandeycode')
//     .then((res) => res.json())
//     .then((res) =>{
//         Setdata(res)
//     })
//    },[])
  return (
    <>
    <div className=" flex bg-slate-600 text-white">
        <div className=" w-1/3">
          <img src="{data.avatar_url}" alt="Github pic" />
            
        </div>
        <div className="flex flex-col  justify-start text-left px-4">
            Name : {data.name} <br />
            Followers :{ data.followers} <br />
            Bio:  {data.bio} <br />
           
             <a href={data.html_url} className='text-blue-400 underline' target="_blank">Click here to visit</a>
        </div>
    </div>
        
    </>

  )
}

export default Github;

export const GitubInfo = ()=> {
   return fetch('https://api.github.com/users/Princepandeycode')
    .then((res) => res.json())
    
    // let data= await fetch('https://api.github.com/users/Princepandeycode')
    // return data
}