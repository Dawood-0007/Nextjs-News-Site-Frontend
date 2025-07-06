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
  try {
    const res = await fetch(`https://khatreezserver.vercel.app/articles/filter/${encodeURIComponent(type)}/100000`);
    if (!res.ok) throw new Error("Failed to fetch articles");
    const data = await res.json();
    return Array.isArray(data) ? data : []; // Force return an array
  } catch (error) {
    console.error(error);
    return []; // Fallback to empty array
  }
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
  title: `Khatreez - Articles`,
  description: `Explore articles on Khatreez.`,
  icons: {
    icon: './icon.png',
    shortcut: './icon.png',
    apple: './icon.png',
  }
};