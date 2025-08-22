import { auth } from '@/auth';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default auth((req: NextRequest & { auth: any }) => {
  const { pathname } = req.nextUrl;

  // Check if the user is authenticated
  const isAuthenticated = !!req.auth;

  // Protect dashboard routes
  if (pathname.startsWith('/dashboard')) {
    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      const url = new URL('/login', req.url);
      url.searchParams.set('callbackUrl', req.url);
      return Response.redirect(url);
    }
  }

  // Protect API routes that require authentication
  if (pathname.startsWith('/api') && !pathname.includes('/api/auth')) {
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }
  }

  // Allow the request to continue
  return NextResponse.next();
});

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/api/orders/:path*', // Protect order-related API routes
  ],
};
