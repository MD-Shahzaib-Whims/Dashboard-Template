import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

    // Retrieve authentication token and user role from cookies
    const token = request.cookies.get('token')?.value
    const userRole = request.cookies.get('userRole')?.value

    console.log('Token:', token);
    console.log('User Role:', userRole);

    // Redirect to /login if the user is not authenticated
    // Ensure users are not redirected again if they are already on /login
    if (!token && request.nextUrl.pathname !== '/login') {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // Role-based access control: Restrict access to /authorization for non-admin users
    // Prevent redirect loops by ensuring the user isn't already on '/'
    if (request.nextUrl.pathname.startsWith('/authorization') && userRole !== 'admin' && request.nextUrl.pathname !== '/') {
        return NextResponse.redirect(new URL('/', request.url))
    }

    // Allow request to proceed if no restrictions apply
    return NextResponse.next()
}

// Apply middleware to all routes except public routes like login, signup, and public APIs
export const config = {
    matcher: '/((?!login|signup|public-api).*)',
}