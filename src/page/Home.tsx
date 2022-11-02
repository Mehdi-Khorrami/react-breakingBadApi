import '../App.css'
import Header from '../component/Header';
import Body from '../component/Body';
import Box from '@mui/material/Box';
import React, { ReactElement, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { useAppState } from '../context';
import Details from './Details';


function Home() {
  const{ state }= useAppState()
  return (
    <Box>
      <Header />
      { (state.status) ?  <Body /> : <Details />  }
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
    </Box>
  )
}

export default Home