"use client"
import React, { useState } from 'react'
import "../assets/Blogs.css"
import BlogSubDisplay from './BlogSubDisplay'

const ArticlesStatus = ({ type, initialArticles }) => {
  const [limit, setLimit] = useState(10)
  
  const visibleArticles = initialArticles.slice(0, limit)

  const loadMoreArticles = () => {
    setLimit(prev => prev + 10)
  }

  return (
    <div className="blog-container">
      {visibleArticles.length > 0 ? (
        visibleArticles.map((article) => (
          <BlogSubDisplay
            key={article.id}
            id={article.id}
            src={article.imageurl}
            title={article.title}
            text={article.article.substring(0, 50)}
            status={article.status}
            date={article.datetime}
          />
        ))
      ) : (
        <p className='p-loading'>No articles found</p>
      )}
      
      {limit < initialArticles.length && (
        <button 
          className="read-more-btn" 
          onClick={loadMoreArticles}
        >
          Read More
        </button>
      )}
    </div>
  )
}

export default ArticlesStatus