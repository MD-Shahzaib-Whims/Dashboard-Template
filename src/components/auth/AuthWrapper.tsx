'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function AuthWrapper({ children, requiredRole }: Readonly<{ children: React.ReactNode, requiredRole?: string }>) {
    const { data: session, status } = useSession()
    const router = useRouter()

    if (status === "loading") {
        return <div>Loading...</div>
    }

    if (status === "unauthenticated") {
        router.push('/login')
        return null
    }

    if (requiredRole && (session?.user as any)?.role !== requiredRole) {
        return <div>Access Denied</div>
    }

    return <>{children}</>
}