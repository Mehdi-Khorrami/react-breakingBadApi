import  Box  from '@mui/system/Box'
import  AppBar  from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from 'react'
import { useNavigate } from 'react-router';

function Home() {
  return (
    <Box>
        <Header />
    </Box>
  )
}


const Header = () => {
    const navigat = useNavigate();

    return (
        <Box sx={{ flexGrow: 1  }} >
        <AppBar position="static" sx={{ background : "#3B3B3B" }}>
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

export default Home