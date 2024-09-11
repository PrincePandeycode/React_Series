import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
 
let [count,setCount] = useState(10)

const addVal= () =>{
  // if you want to do it muliple times in a row, it wont work because it exceute comands in batches so fibre alog ignore it 
  // setCount(count+1)
  // setCount(count+1)
  // setCount(count+1)

  // use Previosstate to do it , using callback provided in setCOunt/ setter method
  setCount((pervC)=>(pervC+1))
  // setCount((pervC)=>(pervC+1))
  // setCount((pervC)=>(pervC+1)) //now it is working

}
  const aother = ()=>{
    console.log("i am called ")
  }

const removeVal = () =>{
  setCount(count -1)
}
  return (
   <>
   <Navbar/>
   <h1>Count is {count}</h1>
   <button onClick={addVal}>Addval {count}</button><br />
   <button onClick={removeVal}>Removeval {count}</button>
   <button ></button>
   </>
  )
}

export default App
