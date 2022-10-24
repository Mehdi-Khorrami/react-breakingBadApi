
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import '../App.css'
import { selected } from '../context/context'

function Details() {
  const item = useContext(selected)
  const [lists, setLists] = useState([]);
  const url = useParams()

  useEffect(() => {
    axios.get('https://www.breakingbadapi.com/api/characters')
      .then((res) => {
        setLists(res.data)
      })
      .catch(error => console.log('Error : ' + { error }))
  }, [])



  return (
    <section className='details'>
      <div>
        <img src={lists[url.id].img} alt="" />
        <div>
          <h1>Details</h1>
          <h4>name :</h4>
          <p>{ lists[url.id].name} </p>
          <h4>birthday :</h4>
          <p>{lists[url.id].birthday}</p>
          <h4>occupation :</h4>
          <p>{ lists[url.id].occupation[0]}</p>
          <h4>nickname : </h4>
          <p>{ lists[url.id].nickname} </p>
        </div>
      </div>
    </section>
  )
}



export default Details