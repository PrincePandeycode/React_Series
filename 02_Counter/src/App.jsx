import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
let [count,setCount] = useState(10)

const addVal= () =>{
  if(count < 20){
  setCount(count+1)
}
}

const removeVal = () =>{
  if(count >0) setCount(count -1)
}
  return (
   <>
   <h1>Count is {count}</h1>
   <button onClick={addVal}>Addval {count}</button><br />
   <button onClick={removeVal}>Removeval {count}</button>
   </>
  )
}

export default App
