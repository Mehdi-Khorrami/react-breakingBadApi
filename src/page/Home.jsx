import '../App.css'
import Header from '../component/Header';
import Body from '../component/Body';
import Box from '@mui/material/Box';
import React, { useState } from 'react'
import { loginUser } from '../context/context';
import { ToastContainer } from 'react-toastify';


function Home() {
  const [loginUsers, setLoginUsers] = useState();

  return (
    <Box>
      <loginUser.Provider value={{ loginUsers, setLoginUsers }}>
        <Header />
        <Body />
        <ToastContainer position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </loginUser.Provider>
    </Box>
  )
}

export default Home