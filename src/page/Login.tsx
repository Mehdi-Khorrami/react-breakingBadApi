import { Paper } from '@mui/material'
import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router'
import { useAppState, useAppDispatch } from '../context'
import { loginAction } from '../context/action'


function Login() {
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const login = {
      username: formData.username,
      password: formData.password,
    }
    setLocal(login)
    loginAction(dispatch, login)
    navigate('/', { replace: true })
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
          <TextField type={'password'} value={formData.password} onChange={handleFormChange} id="password" label="password" variant="standard" />
        </div>

        <Button type='submit' variant="contained" >
          Send
        </Button>
      </form>
    </Paper>
  )
}

const setLocal = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}


export default Login 