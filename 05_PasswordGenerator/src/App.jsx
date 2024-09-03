import { useState,useEffect, useCallback,useRef } from 'react'

// import './App.css'
// import './index.css'


function App() {
  let [count,setCount] = useState(8)
  let [charAllow,setCharAllow] = useState(false)
  let [numAllow, setNumAllow ] = useState(false)
  let [Password,setPassword] = useState("")

  let userefr = useRef(null)

  let PasswordGenerate = useCallback(() =>{
      
        let pass = ""
        let str= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        
        if(charAllow) str+="!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
        if(numAllow) str+="0123456789"

        for(let i = 1;i<=count;i++){
          let ind = Math.floor(Math.random()*str.length+1)
          pass += str.charAt(ind)
        }
       setPassword(pass)

    },[count,charAllow,numAllow,setPassword])

    // the useCallback mthod doesn't run byitelf so useeffect i used
  useEffect(() =>{
    PasswordGenerate()
  },[count,charAllow,numAllow ,PasswordGenerate ])

    function copyall(){
      // window.navigator.clipboard.writeText(Password)  //or
      window.navigator.clipboard.writeText(userefr.current.value)


      // 1.select all
      userefr.current?.select() //the blue line

      // 2. selct a range
        // // Focus the input field
        // userefr.current?.focus();
        // // Set the selection range (selects first 6 characters)
        // userefr.current?.setSelectionRange(0, 6);
      
    }

  return (
   <>
      <div className=" w-full  max-w-md mx-auto py-3 my-8 px-4 text-orange-500 rounded-lg bg-slate-800">
       <h1 className='text-white text-center mb-4'>Password Generator</h1>
        <div className="flex overflow-hidden rounded-lg ">
          <input type="text" value={Password} ref={userefr} className='outline-none w-full py-1 px-3' readOnly/>
          <button className='text-white bg-blue-700 px-3 shrink-0' onClick={copyall}>copy</button>
        </div>

        <div className="flex text-sm gap-x-3 mt-5">
          
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={50} value={count} className='cursor-pointer' onChange={(e)=>{setCount(e.target.value)}}/>
            <label > lenght: {count}</label>

          </div>

          <div className="flex text-sm gap-x-1">
              <input type="checkbox" defaultChecked = {numAllow} onChange={() => {setNumAllow((prev) => !prev)}}/>
              <label > Numbers</label>
          </div>

          <div className="flex text-sm gap-x-1">
            <input type="checkbox" defaultChecked = {charAllow} onChange={() =>{
              setCharAllow((prev) => !prev)
            }} />
            <label > Characters</label>
          </div>

        </div>


      </div>
   </>
  )
}

export default App
