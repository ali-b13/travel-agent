// app/api/offers/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const apiKey = process.env.OFFER_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { success: false, error: "API key not configured" },
      { status: 500 }
    );
  }

  // Get client information
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '0.0.0.0';
  const userAgent = req.headers.get('user-agent') || '';

  try {
    // Build API URL
    const apiUrl = new URL('https://unlockcontent.net/api/v2');
    apiUrl.searchParams.set('ip', ip);
    apiUrl.searchParams.set('user_agent', userAgent);
    apiUrl.searchParams.set('ctype', '1'); // CPI offers only

    // Fetch offers
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        offers: []
      },
      { status: 500 }
    );
  }
}