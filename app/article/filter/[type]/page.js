// app/articles/type/[type]/page.js
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ArticlesStatus from '@/components/ArticlesStatus'

export async function generateStaticParams() {
  const types = ['Politics', 'Economics', 'Statistics', 'Social']
  return types.map(type => ({ type }))
}

async function getArticlesByType(type) {
  const res = await fetch(`https://khatreezserver.vercel.app/articles/filter/${encodeURIComponent(type)}/100000`)
  return res.json()
}

export const revalidate = 3600 

export default async function ArticleType({ params }) {
  const initialArticles = await getArticlesByType(params.type)
  
  return (
    <div>
      <Navbar />
      <ArticlesStatus 
        type={params.type} 
        initialArticles={initialArticles} 
      />
      <Footer />
    </div>
  )
}

const metadata = {
  title: `Khatreez - ${params.type} Articles`,
  description: `Explore ${params.type} articles on Khatreez.`,
  icons: {
    icon: './icon.png',
    shortcut: './icon.png',
    apple: './icon.png',
  }
};