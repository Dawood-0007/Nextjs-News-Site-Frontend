import React from 'react'
import "../assets/BlogList.css"
import Link from 'next/link'

const SubComponents = (props) => {
  return (
    <div className='podcast-card sub-component-card'>
      <Link href={`/article/filter/${props.title}`} className="sub-component-card">
        <h1 className='sub-component-h1'>{props.title}</h1>
        <img className="sub-component-img"src={props.src} alt={props.title} /></Link>
    </div>
  )
}

export default SubComponents