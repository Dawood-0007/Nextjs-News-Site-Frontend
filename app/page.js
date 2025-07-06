import Navbar from "@/components/Navbar";
import FirstComponent from "@/components/FirstComponent";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Interval from "@/components/Interval";
import CategoriesComponent from "@/components/CategoriesComponent";

async function getHomeData() {
  try {
    const [featuredRes, blogsRes] = await Promise.all([
      fetch("https://khatreezserver.vercel.app/data/blogmain"),
      fetch("https://khatreezserver.vercel.app/data/blogcomponent")
    ]);
    
    return {
      featuredPost: await featuredRes.json(),
      blogPosts: await blogsRes.json()
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

  return (
    <>
      <Navbar />
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