import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ArticlesStatus from '@/components/ArticlesStatus'

export async function generateStaticParams() {
  const types = ['Politics', 'Economics', 'Statistics', 'Social']
  return types.map(type => ({ type }))
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

async function getArticlesByType(type) {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_URL_ARTICLE_FILTER + `${encodeURIComponent(type)}/100000`);
    if (!res.ok) throw new Error("Failed to fetch articles");
    return Array.isArray(await res.json()) ? await res.json() : [];
  } catch (error) {
    console.error(error);
    return []; 
  }
}

export default async function ArticleType({ params }) {
  const initialArticles = await getArticlesByType(params.type)
  const allArticles = await getAllArticles();
  
  return (
    <div>
      <Navbar allArticles={allArticles} />
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