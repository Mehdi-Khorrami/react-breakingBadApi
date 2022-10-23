import '../App.css'
import Header from '../component/Header';
import Body from '../component/Body';
import Box from '@mui/material/Box';
import React, { useState } from 'react'
import { loginUser } from '../context/context';


function Home() {
  const [loginUsers, setLoginUsers] = useState();

  return (
    <Box>
      <loginUser.Provider value={{ loginUsers, setLoginUsers }}>
        <Header />
         <Body />
      </loginUser.Provider>
    </Box>
  )
}

export default Home