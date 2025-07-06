"use client"
import React from 'react'
import Link from 'next/link'
import "../assets/SingleBlog.css"

const SingleBlog = ({ initialData }) => {
  return (
    <div className='container-single'>
      {initialData ? (
        <div className="sub">
          <p><span className='sapn-1'>Explore Article</span> | {initialData.datetime}</p>
          <h1>{initialData.title}</h1>
          <p>{initialData.status}</p>
          <img 
            src={initialData.imageurl} 
            alt="Today's News" 
            loading="lazy"
          />
          <p className='break-spaces'>{initialData.article}</p>
          <Link href="/articles" className="read-more">
            <p>Read More Articles</p>
          </Link>
        </div>
      ) : (
        <p className='p-loading'>Article not found</p>
      )}
    </div>
  )
}

export default SingleBlog