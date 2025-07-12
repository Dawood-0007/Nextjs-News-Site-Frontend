import Navbar from "@/components/Navbar";
import FirstComponent from "@/components/FirstComponent";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Interval from "@/components/Interval";
import CategoriesComponent from "@/components/CategoriesComponent";
import axios from "axios";


async function getAllArticles() {
  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_API_URL_ARTICLES);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    return [];
  }
}

async function getHomeData() {
  try {
    const [featuredRes, blogsRes] = await Promise.all([
      axios.get(process.env.NEXT_PUBLIC_API_URL_ARTICLES_MAIN),
      axios.get(process.env.NEXT_PUBLIC_API_URL_ARTICLES_COMPONENT)
    ]);
    
    return {
      featuredPost: featuredRes.data,
      blogPosts: blogsRes.data
    };
  } catch (error) {
    console.error("Failed to fetch home data:", error);
    return {
      featuredPost: null,
      blogPosts: []
    };
  }
}

export default async function Home() {
  const { featuredPost, blogPosts } = await getHomeData();
  const allArticles = await getAllArticles();

  return (
    <>
      <Navbar allArticles={allArticles} />
      <FirstComponent featuredPost={featuredPost?.[0]} />
      <Interval
        title="See Latest"
        detail="Enhance Knowledge and change the way you see the world"
      />
      <BlogList initialPosts={blogPosts} />
      <Interval title="Popular Categories" />
      <CategoriesComponent />
      <Footer />
    </>
  );
}

export const metadata = {
  title: "Khatreez - Home",
  description: "Welcome to Khatreez, your source for insightful articles and updates.",
  icons: {
    icon: './icon.png',
    shortcut: './icon.png',
    apple: './icon.png',
  }
};