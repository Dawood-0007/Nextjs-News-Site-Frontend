"use client"
import React from 'react'
import "../assets/BlogList.css"
import Link from 'next/link'

const BlogListComponent = (props) => {
  return (
    <Link
      href={props?.id ? `/article/${props.id}` : "#"}
      className='podcast-card blog-contain navlink'>
      <div className='card-img'>
        {props?.src ? <img src={props.src} alt="Title" /> : <p>Image not available</p>}
      </div>
      <div className='card-info'>
        <h2>{props?.title ? props.title.substring(0, 40) + " ..." : "Untitled"}</h2>
        <p>{props?.text ? props.text.substring(0, 80) + " ..." : "No description available"}</p>
        <p>Date : {props?.date ?? "Unknown"}</p>
      </div>
    </Link>
  )
}

export default BlogListComponent