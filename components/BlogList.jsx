"use client"
import React from 'react';
import '../assets/BlogList.css';
import BlogListComponent from './BlogListComponent';

const BlogList = ({ initialPosts }) => {
  return (
    <div className='podcast-section'>
      <h1 className='section-h1'>The Articles across The world</h1>
      <div className="podcast-container">
        {initialPosts && initialPosts.length > 0 ? (
          initialPosts.map((article) => (
            <BlogListComponent
              key={article.id}
              id={article.id}
              slug={article.slug}
              src={article.imageurl}
              title={article.title}
              text={article.article}
              status={article.status}
              date={article.datetime}
            />
          ))
        ) : (
          <BlogListComponent />
        )}
      </div>
    </div>
  );
};

export default BlogList;