import '../App.css'
import 'react-toastify/dist/ReactToastify.css';
import React, { useState , useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import { Grid, Paper, CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppState } from '../context';
import { fetchDataAction, paginationAction, statusAction } from '../context/action';

function Body() {
    const { state } = useAppState()
    const dispatch = useAppDispatch()
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        if (!state?.characters) {
            let y = 0
            fetchDataAction(dispatch , y)
        }
    }, [])

    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }

    const handleClick = (event, key) => {
        const user = localStorage.getItem('user')
        if (user) {
            const payload = state.characters[key]
            statusAction(dispatch, payload)
        } else {
            toast("please Login")
        }
    }


     const handlePagination = (event, value) => {
            let x = value
            let y : number  
            if (x === 1) {y = 0}
            if (x === 2) {y = 12}
            if (x === 3) {y = 23}
            if (x === 4) {y = 34}
            if (x === 5) {y = 46}
            if (x === 6) {y = 58}
         paginationAction(dispatch , x )
         fetchDataAction(dispatch , y)             
        }

    return (
        <>
            <TextField
                sx={{ width: "50%", height: "16px", position: 'absolute', top: '25%', left: '25%' }}
                id="outlined-basic" label="Search" variant="outlined"
                onChange={handleSearch}
                value={searchValue}
            ></TextField>
            <Box className='card'>
                {(!state?.characters || state?.characters.length < 1)
                    ?
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100% !important' }}>
                        <CircularProgress />
                    </Box>
                    :
                    state.characters.filter((value) => {
                        if (searchValue === '') {
                            return value
                        } else if (value.name.toLowerCase().includes(searchValue.toLowerCase())) {
                            return value
                        }
                    }).map((info, index) => {
                        return (
                            <Grid key={index} onClick={event => handleClick(event, index)}>
                                <Paper>
                                    <img src={info.img} alt={info.category} />
                                    <h4>{info.name}</h4>
                                </Paper>
                            </Grid>
                        )
                    })}
                <Pagination
                    className='pag'
                    count={state.pagination.count}
                    variant="outlined"
                    color="primary"
                    onChange={handlePagination}
                    defaultPage={state.pagination.page}
                />
            </Box>
        </>
    )
}

export default Body;