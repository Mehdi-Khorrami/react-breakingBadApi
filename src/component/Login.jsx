import { Paper } from '@mui/material'
import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router'
import { userNameContext } from './context/context'



const setLocal = (user) =>{
  localStorage.setItem( 'user' , JSON.stringify(user))
}



function Login() {
  const [userName , setUserName] = useState();
  const [password , setPassword] = useState();
  const navigate = useNavigate()


  const handleSubmit = (event) => {
      event.preventDefault();
      const user = {
        username : userName , 
        password : password ,
      }
      setLocal(user)
      navigate('/')
  }


 
  return (
    <Paper elevation={20} className='login'>
      <form  onSubmit={handleSubmit}>
        <div>
          <h2>Login Form</h2>
        </div>
       
        <div>
          <TextField value={userName} onChange={ e => setUserName(e.target.value)} id="userName-basic" label="userName" variant="standard" />
        </div>
     
        <div>
          <TextField value={password} onChange={ e => setPassword(e.target.value)} id="password-basic" label="password" variant="standard" />
        </div>

        <Button type='submit' variant="contained" >
          Send
        </Button>
      </form>
    </Paper>
  )
}


export default Login 