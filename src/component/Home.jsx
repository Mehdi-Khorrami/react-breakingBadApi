import '../App.css'
import Box from '@mui/system/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import axios from "axios"
import { Alert, Grid, Paper } from '@mui/material';
import { loginUser, selected } from '../context/context';


function Home() {
  const [loginUsers, setLoginUsers] = useState();

  return (
    <Box>
      <loginUser.Provider value={{ loginUsers, setLoginUsers }}>
        <Header />
        <Box className='card'>
          <Body />
        </Box>
      </loginUser.Provider>
    </Box>
  )
}


const Header = () => {
  const [login, setLogin] = useState();
  const navigat = useNavigate();
  const { loginUsers, setLoginUsers } = useContext(loginUser)

  useEffect(() => {
    let user = localStorage.getItem('user')
    user = JSON.parse(user)
    if (user) {
      setLogin(user)
      setLoginUsers(user)
    }
  }, [])

  const handleLogOut = () => {
    localStorage.removeItem('user')
    setLogin('')
    setLoginUsers('')
  }

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{ background: "#3B3B3B" }}>
        <Toolbar>
          <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
            The Breaking Bad API
          </Typography>
          {login ? <Button color="inherit" onClick={handleLogOut}>{login.username}</Button> : <Button color="inherit" onClick={() => navigat('/Login')} >Login</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  )
}


const Body = () => {
  const [list, setList] = useState([]);
  const navigat = useNavigate()
  const details = useContext(selected);
  const { loginUsers, setLoginUsers } = useContext(loginUser)

  useEffect(() => {
    axios.get('https://www.breakingbadapi.com/api/characters?limit=12&offset=0')
      .then((res) => {
        setList(res.data)
      })
      .catch(error => console.log('Error : ' + { error }))
  }, [])

  const handleClick = (event, key) => {
    if (loginUsers) {
      details.setDetails(list[key])
      navigat('/Details')
    } else {
      alert('please login ')
    }
  }


  return (
    list.map((info, index) => {
      return (
        <Grid key={index} onClick={event => handleClick(event, index)}>
          <Paper>
            <img src={info.img} alt={info.category} />
            <h4>{info.name}</h4>
          </Paper>
        </Grid>
      )
    })
  )
}

export default Home