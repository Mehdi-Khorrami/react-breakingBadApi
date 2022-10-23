import { Paper } from '@mui/material'
import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router'

const setLocal = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      username: formData.username,
      password: formData.password,
    }
    setLocal(user)
    navigate('/', {replace : true})
  }

  const handleFormChange = (event) => {

    const key = event.target.id;

    setFormData({
      ...formData,
      [key]: event.target.value
    });

  }

  return (
    <Paper elevation={20} className='login'>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Login Form</h2>
        </div>

        <div>
          <TextField value={formData.username} onChange={handleFormChange} id="username" label="username" variant="standard" />
        </div>

        <div>
          <TextField value={formData.password} onChange={handleFormChange} id="password" label="password" variant="standard" />
        </div>

        <Button type='submit' variant="contained" >
          Send
        </Button>
      </form>
    </Paper>
  )
}


export default Login 