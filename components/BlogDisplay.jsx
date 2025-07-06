"use client"
import React, { useState } from 'react';
import BlogSubDisplay from './BlogSubDisplay';
import "../assets/Blogs.css";

const BlogDisplay = ({ initialData }) => {
  const [limit, setLimit] = useState(10);

  const loadMore = () => {
    setLimit(prev => prev + 10);
  };

  return (
    <div className="blog-container">
      {initialData.slice(0, limit).map((article) => (
        <BlogSubDisplay
          key={article.id}
          id={article.id}
          src={article.imageurl}
          title={article.title}
          text={article.article.substring(0, 50)}
          status={article.status}
          date={article.datetime}
        />
      ))}
      {limit < initialData.length && (
        <button className="read-more-btn" onClick={loadMore}>
          Read More
        </button>
      )}
    </div>
  );
};

export default BlogDisplay;