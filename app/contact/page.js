import React from 'react'
import Contact from '@/components/Contact'
import Navbar from "@/components/Navbar";

async function getAllArticles() {
  try {
    const res = await fetch("https://khatreezserver.vercel.app/data/blogdisplay/100000");
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    return [];
  }
}

const About = () => {
  const allArticles = getAllArticles();

  return (
    <div>
      <Navbar allArticles={allArticles} />
      <Contact />
    </div>
  )
}

//staticsite generation
export async function generateMetadata() {
  return {
    title: 'Khatreez - About Us',
    description: 'Learn more about us and our mission.',
    icons: {
    icon: './icon.png',
    shortcut: './icon.png',
    apple: './icon.png',
  }
  }
}

export default About