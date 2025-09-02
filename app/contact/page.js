import React from 'react'
import Contact from '@/components/Contact'
import Navbar from "@/components/Navbar";

async function getAllArticles() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_URL_ARTICLES);
    return res.json();
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    return [];
  }
}

export default async function About (){
  const allArticles = await getAllArticles();

  return (
    <div>
      <Navbar allArticles={allArticles} />
      <Contact />
    </div>
  )
}

export async function generateMetadata() {
  return {
    title: 'Kalyptica - Contact',
    description: 'Get in touch with us for any inquiries or support.',
    icons: {
    icon: './icon.png',
    shortcut: './icon.png',
    apple: './icon.png',
  }
  }
}
