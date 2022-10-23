import React, { useContext } from 'react'
import '../App.css'
import { selected } from '../context/context'

function Details() {
  const item = useContext( selected )
  return (
    <section className='details'>
      <div>
        <img src={item.details.img} alt="" />
        <div>
            <h1>Details</h1>
            <h4>name :</h4>
            <p>{item.details.name}</p>
            <h4>birthday :</h4>
            <p>{item.details.birthday}</p>
            <h4>occupation :</h4>
            <p>{item.details.occupation[0]}</p>
            <h4>nickname : </h4>
            <p>{item.details.nickname}</p>
        </div>
      </div>
    </section>
  )
}
export default Details