
import { useState } from 'react'
// import './App.css'
import './index.css'

function App() {
  let [color,setColor]= useState("black")
  let [hcol,setHcol] =useState("blue")

  return (
   <div className='w-screen h-screen bg-black flex justify-center' style={{backgroundColor: color}}>
    <h1 className='flex justify-center  ' style={{color:hcol}}>Bg changer</h1>
    <div className="fixed inset-x-4 flex flex-wrap py-2 px-2 justify-center bottom-8 rounded-xl" >
      <div className="flex flex-wrap gap-3  bg-white p-2 rounded-xl">
        {/* The on click method in React expects a function reference
You can't directly pass parameters inside the function, instead, you need to pass it as a reference or use arrow function syntax */}
        <button className='p-3 rounded-full text-white' style={{backgroundColor:"red"}} onClick={()=>{setColor(color = "red")
          setHcol(hcol= "green")}
        } > Red</button>
        <button className='p-3 rounded-full text-white' style={{backgroundColor:"green"}} onClick={()=>(setColor(color = "green"))}> Green</button>
        <button className='p-3 rounded-full text-white' style={{backgroundColor:"blue"}} onClick={()=>(setColor(color = "blue"))}> Blue</button>
        <button className='p-3 rounded-full text-white' style={{backgroundColor:"yellow"}} onClick={()=>(setColor(color = "yellow"))}> Yellow</button>
        <button className='p-3 rounded-full ' style={{backgroundColor:"white"}} onClick={()=>(setColor(color = "white"))}> white</button>
      </div>
    </div>



   </div>
  )
}

export default App
