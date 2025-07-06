import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(request) {
  const secret = request.nextUrl.searchParams.get('secret');
  const origin = request.headers.get('origin');

  if (secret !== process.env.REVALIDATE_TOKEN) {
    return new NextResponse('Invalid token', { status: 401 });
  }

  const allowedOrigins = [
    'https://khatreez-admin.vercel.app',
    'https://khatreez-server.vercel.app',
  ];

  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse('Origin not allowed', { status: 403 });
  }

  try {
    revalidatePath('/', 'layout');
    
    const response = new NextResponse(JSON.stringify({
      success: true,
      message: 'Revalidation triggered'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        // CORS headers (only for allowed origins)
        'Access-Control-Allow-Origin': origin || '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    });

    return response;
  } catch (err) {
    return new NextResponse(JSON.stringify({
      error: 'Revalidation failed'
    }), { status: 500 });
  }
}