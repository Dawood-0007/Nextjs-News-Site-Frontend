import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SingleBlog from '@/components/SingleBlog'

export async function generateStaticParams() {
  const res = await fetch(process.env.NEXT_PUBLIC_URL_ARTICLES)
  const posts = await res.json()

  return posts.map(post => ({
    slug: post.slug.toString()
  }))
}

async function getAllArticles() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_URL_ARTICLES);
    return res.json();
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    return [];
  }
}

async function getPostData(slug) {
  const res = await fetch(process.env.NEXT_PUBLIC_URL_ARTICLE_BY_ID + "slug/" + slug)
  return res.json()
}

export default async function Article(props) {
  const { slug } = await props.params;
  const postData = await getPostData(slug);
  const allArticles = await getAllArticles();
  
  return (
    <div>
      <Navbar allArticles={allArticles} />
      <SingleBlog initialData={postData[0]} />
      <Footer />
    </div>
  )
}

const metadata = {
  title: "Kalyptica - Article",
  description: "Read the latest insights on Kalyptica.",
  icons: {
    icon: './icon.png',
    shortcut: './icon.png',
    apple: './icon.png',
  }
};