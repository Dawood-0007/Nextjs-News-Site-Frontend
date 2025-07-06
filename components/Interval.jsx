import React from 'react'
import '../assets/interval.css'

const Interval = (props) => {
  return (
    <div className='interval-div'>
        <h1 className='interval-title'>{props.title}</h1>
        <p className='interval-detail'>{props.detail}</p>
        <hr />
    </div>
  )
}

export default Interval;