// app/api/cron/indexnow/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  const baseUrl = 'https://kalyptica.vercel.app';
  const apiKey = '97f223a02efe4f46a409f82a590d5452';

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_URL_ARTICLES);
    const posts = await response.json();

    const urlList = [
      baseUrl,
      `${baseUrl}/contact`,
      ...posts.map(post => `${baseUrl}/article/${post.slug}`)
    ];

    const indexNowRes = await fetch('https://api.indexnow.org', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: 'kalyptica.vercel.app',
        key: apiKey,
        keyLocation: `${baseUrl}/${apiKey}.txt`,
        urlList: urlList,
      }),
    });

    if (!indexNowRes.ok) throw new Error('Submission failed');

    return NextResponse.json({ success: true, count: urlList.length });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
