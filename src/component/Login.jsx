import { Box, Container, Grid, Paper } from '@mui/material'
import React from 'react'

function Login() {

  const theme1 = {
    border:"1px solid red",
    height :"100vh",
    display :'flex',
    alignItems:'center' ,
  }
  const theme2 = {
    border:"1px solid blue",
    width: '30% ' ,
    height: '500px',
    margin:'100px auto'
  }


  return (
  
      <Grid  container spacing={2}>
        <Grid md={8} xs={12}>
            <Paper  sx={theme2}  elevation={8} >

            </Paper> 
        </Grid>
      </Grid>
 
  )
}

export default Login 