import React from 'react'
import Contact from '@/components/Contact'
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div>
                <Navbar />
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