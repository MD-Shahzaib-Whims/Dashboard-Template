import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value
    const userRole = request.cookies.get('userRole')?.value

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // Role-based access control
    if (request.nextUrl.pathname.startsWith('/dashboard/auth-management') && userRole !== 'admin') {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/dashboard/:path*',
}