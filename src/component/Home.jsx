import '../App.css'
import Box from '@mui/system/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import axios from "axios"
import {  Grid, Paper } from '@mui/material';

function Home() {
  return (
    <Box>
      <Header />
      <Box className='card'>
        <Body />
      </Box>
    </Box>
  )
}


const Header = () => {
  const navigat = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{ background: "#3B3B3B" }}>
        <Toolbar>
          <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
            The Breaking Bad API
          </Typography>
          <Button color="inherit" onClick={() => navigat('/Login')} >Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}


const Body = () => {

  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('https://www.breakingbadapi.com/api/characters?limit=12&offset=1')
      .then((res) => {
        setList(res.data)
      })
      .catch(error => console.log('Error : ' + { error }))
  }, [])


  return (
    list.map((info, index) => {
      return (
          <Grid key={index}>
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