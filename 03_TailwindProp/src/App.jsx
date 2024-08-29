import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  let user1= {
    username : "Syco",
    btnTxt : "syco btn"
  }
  

  return (
    <>
     
     <h1 className='bg-green-500 rounded-xl p-4 text-black mb-4'>this is Main</h1>

   <div className="flex space-x-3 ">
   <Card username="Prince pandey" btnTxt = "Visit here"/>  {/* u can also pass array or object into {} this backet and u will ahvto handle them properly*/}
   <Card username="Smasung" />
   <Card username="syco" />

   </div>

    </>
  )
}

export default App
