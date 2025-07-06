"use client"
import Link from 'next/link';
import "../assets/FirstComponent.css";

function FirstComponent({ featuredPost }) {
  if (!featuredPost) {
    return (
      <div className="main-1 flex">
        <div className="left">
          <h1>No featured article</h1>
          <p>Check back later for updates</p>
        </div>
      </div>
    );
  }

  return (
    <Link href={`/article/${featuredPost.id}`} className="custom-link">
      <div className="main-1 flex">
        <div className="left">
          <h1>{featuredPost.title}</h1>
          <p>{featuredPost.article.substring(0, 150)} ...</p>
          <div className="left-div flex">
            <p className="details-p">Date : {featuredPost.datetime}</p>
            <p className="details-p status">{featuredPost.status}</p>
          </div>
        </div>
        <div className="right">
          <img src={featuredPost.imageurl} alt={featuredPost.title} />
        </div>
      </div>
    </Link>
  );
}

export default FirstComponent;