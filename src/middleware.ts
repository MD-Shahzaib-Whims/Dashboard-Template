import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

    // Retrieve authentication token and user role from cookies (fallback values for debugging)
    const token = request.cookies.get('token')?.value ?? "tempToken"
    const userRole = request.cookies.get('userRole')?.value ?? "tempRole"

    console.log('Token:', token, 'User Role:', userRole);

    // Prevent logged-in users from accessing authentication pages ("/login" & "/register")
    if (token && ['/login', '/register'].includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    // Redirect unauthenticated users to login (except if they are already on ("/login" & "/register"))
    if (!token && request.nextUrl.pathname !== '/login') {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // Role-based access control: Restrict access to /authorization for non-admin users (except if they are already on "/")
    if (request.nextUrl.pathname.startsWith('/authorization') && userRole !== 'admin' && request.nextUrl.pathname !== '/') {
        return NextResponse.redirect(new URL('/', request.url))
    }

    // Allow request to proceed if no restrictions apply
    return NextResponse.next()
}

// Middleware Configuration
export const config = {
    /**
     * 🔹 Matcher defines which routes should trigger the middleware
     *
     * - Excludes public API routes (`/public-api/*`) to allow unauthenticated access
     * - Middleware applies to all other routes (`/:path*`), enforcing authentication and role-based access control
     * - to exclude specific routes from the middleware, use a negative lookahead in the regex pattern (e.g., `((?!login|signup).*)`)
     * - To apply middleware to all routes, use a wildcard pattern (`/:path*`)
     * - To apply middleware to all routes except specific routes, use a negative lookahead (e.g., `((?!public-api).*)`)
     * - To apply middleware to specific routes, use a regex pattern (e.g., `/profile|/settings|/dashboard`)
     * - To apply middleware to dynamic routes, use a regex pattern with a wildcard (e.g., `/blog/:slug*`)
     * - To apply middleware to all routes except specific dynamic routes, use a negative lookahead with a regex pattern (e.g., `((?!blog|projects).*)`)
     * - To apply middleware to all routes except specific static routes, use a negative lookahead with a string pattern (e.g., `((?!about|contact).*)`)
    */
    matcher: '/((?!public-api).*)',
}