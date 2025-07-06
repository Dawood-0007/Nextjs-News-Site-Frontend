// app/articles/[id]/page.js
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SingleBlog from '@/components/SingleBlog'

// Generate static paths at build time
export async function generateStaticParams() {
  const res = await fetch('https://khatreezserver.vercel.app/data/blogdisplay/100000')
  const posts = await res.json()
  
  return posts.map(post => ({
    id: post.id.toString()
  }))
}

// Fetch the specific post data
async function getPostData(id) {
  const res = await fetch(`https://khatreezserver.vercel.app/data/article/${id}`)
  return res.json()
}

export default async function Article({ params }) {
  const postData = await getPostData(params.id)
  
  return (
    <div>
      <Navbar />
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