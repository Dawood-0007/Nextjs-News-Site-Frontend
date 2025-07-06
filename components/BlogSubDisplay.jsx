"use client"
import React from 'react'
import "../assets/Blogs.css"
import Link from 'next/link'

const BlogSubDisplay = (props) => {
  return (
      <Link href={`/article/${props.id}`} className='blog-element navlink' id={props.id}>
        <img src={props.src} alt="Article Photo"/>
            <div className='blog-element-div' >
                <h1>{props.title}</h1>
                <p className='div-p'>{props.text} ...</p>
                <p className='div-p'>{props.status}</p>
                <p className='div-date div-p'>Date: {props.date}</p>
            </div>
            </Link>
  )
}

export default BlogSubDisplay