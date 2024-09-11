import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setpassword] = useState("")
    const {setUser} = useContext(UserContext)

    const handleUser =(e) =>{
        e.preventDefault()
        setUser({username})

    }
  return (

    
    
    <div>
        <h2>Login</h2>

        <input type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='username'/>
        <input type='text' value={password} onChange={(e) =>{setpassword(e.target.value)}} placeholder='password'/>
    <button onClick={handleUser}>Submit</button>
    </div>
  )
}

export default Login