import React from 'react'
import Contact from '@/components/Contact'
import Navbar from "@/components/Navbar";
import axios from 'axios';

async function getAllArticles() {
  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_API_URL_ARTICLES);
    return res.datsa;
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