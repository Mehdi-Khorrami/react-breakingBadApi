
import { CircularProgress,Box} from '@mui/material'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import '../App.css'
import { selected } from '../context/context'

function Details() {
  const item = useContext(selected)
  const [lists, setLists] = useState([]);
  const navigat = useNavigate()
  const url = useParams()
  const finalItem = item.details ? item.details : lists[0];

  useEffect(() => {
    axios.get('https://www.breakingbadapi.com/api/characters/' + url.id)
      .then((res) => {
        setLists(res.data)
      })
      .catch(error => console.log('Error : ' + { error }))
  }, [])

  if (!finalItem) {
    return <Box display='flex' alignItems='center' justifyContent='center' height='100vh' width='100%'>
      <CircularProgress />
    </Box>;
  }

  const handleClick = () =>{
      
  }

  return (
    <section className='details'>
      <div>
        <img src={finalItem.img} alt="" />
        <div>
          <h1>Details</h1>
          <h4>name :</h4>
          <p>{finalItem.name} </p>
          <h4>birthday :</h4>
          <p>{finalItem.birthday}</p>
          <h4>occupation :</h4>
          <p>{finalItem.occupation[0]}</p>
          <h4>nickname : </h4>
          <p>{finalItem.nickname} </p>
        </div>
      </div>
    </section>
  )
}

export default Details