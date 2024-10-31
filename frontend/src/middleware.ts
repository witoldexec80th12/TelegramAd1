import { NextRequest, NextResponse, userAgent } from 'next/server';

export function middleware(request: NextRequest) {
  const { device } = userAgent(request);
  // const viewport = device.type === 'mobile' ? 'mobile' : 'desktop';

  // const isHtmlPage = request.headers.get('accept')?.includes('text/html');

  // if (viewport === 'desktop' && isHtmlPage) {
  //   // Rewrite only if it's a desktop user requesting an HTML page
  //   return NextResponse.rewrite(new URL('/desktop', request.url));
  // }

  // Proceed with the original request for other cases (assets, API calls, etc.)
  return NextResponse.next();
}
