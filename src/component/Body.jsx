import React , { useState , useContext , useEffect }from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';
import { selected } from '../context/context';
import { loginUser } from '../context/context';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {  Grid, Paper} from '@mui/material';
import '../App.css'

function Body() {
    const [list, setList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const navigat = useNavigate()
    const details = useContext(selected);
    const { loginUsers, setLoginUsers } = useContext(loginUser)

    useEffect(() => {
        axios.get('https://www.breakingbadapi.com/api/characters?limit=12&offset=1')
            .then((res) => {
                setList(res.data)
            })
            .catch(error => console.log('Error : ' + { error }))
    }, [])

    const handleSearch = (e) => {
        setSearchValue(e.target.value)
        const search = list.filter(value => value.name.toLowerCase().includes(searchValue.toLowerCase()))
        if (search) {
            setList(search)
        }
        ///beporsam ino bray render shodan dobary useEffect
    }

    const handleClick = (event, key) => {
        if (loginUsers) {
            details.setDetails(list[key])
            navigat('/Details')
        } else {
            alert('please login ')
        }
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
                {list.map((info, index) => {
                    return (
                        <Grid key={index} onClick={event => handleClick(event, index)}>
                            <Paper>
                                <img src={info.img} alt={info.category} />
                                <h4>{info.name}</h4>
                            </Paper>
                        </Grid>
                    )
                })}
            </Box>
        </>
    )
}

export default Body