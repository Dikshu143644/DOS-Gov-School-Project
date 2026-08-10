import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './lib/auth'; // Ensure this exists and works in Edge if possible, or use a separate edge-compatible JWT library

// Simplified Edge-compatible JWT check for middleware
function parseJwt(token: string) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Only protect dashboard routes
  if (pathname.startsWith('/dashboard')) {
    const token = request.cookies.get('auth_token')?.value;
    
    // In Mock mode or local dev without tokens, we can bypass or use a mock user
    // For production, require the token
    if (!token && process.env.NODE_ENV === 'production') {
      return NextResponse.redirect(new URL('/login/staff', request.url));
    }
    
    // Extract user from token
    const user = token ? parseJwt(token) : { role: 'platform_admin' }; // Fallback for dev

    // RBAC & ABAC Policy Engine
    if (pathname.startsWith('/dashboard/admin') && user.role !== 'platform_admin') {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    
    if (pathname.startsWith('/dashboard/teacher') && !['class_teacher', 'subject_teacher', 'platform_admin', 'principal'].includes(user.role)) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    if (pathname.startsWith('/dashboard/clerk') && !['clerk', 'platform_admin', 'principal'].includes(user.role)) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    
    // Additional ABAC: "My Class" scope enforcement can be passed via headers to the downstream API
    const response = NextResponse.next();
    response.headers.set('x-user-role', user.role);
    if (user.assignedClass) {
       response.headers.set('x-assigned-class', user.assignedClass);
    }
    
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
