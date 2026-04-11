import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const BANNED_USER_AGENTS = [
  'axios', 'python-requests', 'aiohttp', 'scrapy', 'go-http-client', 
  'node-fetch', 'got', 'curl', 'wget', 'postmanruntime', 
  'headlesschrome', 'phantomjs', 'selenium', 'playwright', 'puppeteer',
];

export function proxy(request: NextRequest) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
  // @ts-ignore: NextRequest.ip may not be recognized by tsc in some environments
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';

  const isBot = BANNED_USER_AGENTS.some((bot) => userAgent.includes(bot));

  if (isBot) {
    console.warn(`[Anti-Crawl] Bot detected and blocked: IP=${ip}, UA=${userAgent}`);
    return new NextResponse(
      JSON.stringify({ error: 'Access denied. Automated scraping is prohibited.' }),
      { status: 403, headers: { 'content-type': 'application/json' } }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
