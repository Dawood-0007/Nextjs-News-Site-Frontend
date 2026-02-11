export default async function sitemap() {
  const baseUrl = 'https://kalyptica.vercel.app'; 
  let blogPosts = [];

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_URL_ARTICLES);
    
    if (!response.ok) throw new Error('Failed to fetch articles');
    
    const posts = await response.json();

    blogPosts = posts.map((post) => {
      let dateValue = new Date(post.datetime);

      if (isNaN(dateValue.getTime())) {
        dateValue = new Date();
      }

      return {
        url: `${baseUrl}/article/${post.slug}`,
        lastModified: dateValue,
        changeFrequency: 'monthly',
        priority: 0.7,
      };
    });
  } catch (error) {
    console.error("Sitemap generation error:", error);
    blogPosts = [];
  }

  const essentialPages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  return [...essentialPages, ...blogPosts];
}
