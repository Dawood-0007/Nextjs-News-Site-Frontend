import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SingleBlog from '@/components/SingleBlog'
import axios from 'axios'

export async function generateStaticParams() {
  const res = await axios.get('https://khatreezserver.vercel.app/data/blogdisplay/100000')
  const posts = res.data

  return posts.map(post => ({
    id: post.id.toString()
  }))
}

async function getAllArticles() {
  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_API_URL_ARTICLES);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    return [];
  }
}

async function getPostData(id) {
  const res = await axios.get(process.env.NEXT_PUBLIC_API_URL_ARTICLE_BY_ID + id)
  return res.data
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