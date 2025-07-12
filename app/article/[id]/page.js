import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SingleBlog from '@/components/SingleBlog'

export async function generateStaticParams() {
  const res = await fetch(process.env.NEXT_PUBLIC_URL_ARTICLES)
  const posts = await res.json()

  return posts.map(post => ({
    id: post.id.toString()
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

async function getPostData(id) {
  const res = await fetch(process.env.NEXT_PUBLIC_URL_ARTICLE_BY_ID + id)
  return res.json()
}

export default async function Article({ params }) {
  const postData = await getPostData(params.id)
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
  title: "Khatreez - Article",
  description: "Read the latest insights on Khatreez.",
  icons: {
    icon: './icon.png',
    shortcut: './icon.png',
    apple: './icon.png',
  }
};