import React from 'react'
import Navbar from '@/components/Navbar'
import BlogDisplay from '@/components/BlogDisplay'
import Footer from '@/components/Footer'

async function getInitialData() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_URL_ARTICLES);
    return response.json();
  } catch (err) {
    return [];
  }
}



const Articles = async () => {
  const initialData = await getInitialData();

  return (
    <div>
        <><Navbar allArticles={initialData} /><BlogDisplay initialData={initialData} /><Footer /></>
    </div>
  )
}

const metadata = {
  title: "Kalyptica - Articles",
  description: "Explore a wide range of articles on various topics.",
  icons: {
    icon: './icon.png',
    shortcut: './icon.png',
    apple: './icon.png',
  }
};

export default Articles