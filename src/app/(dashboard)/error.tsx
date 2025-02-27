'use client'
import { ErrorBoundary } from '@/components/shared'
import { useEffect } from 'react'

export default function ErrorComponent({
    error,
    reset,
}: Readonly<{
    error: Error
    reset: () => void
}>) {
    
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <ErrorBoundary error={error} reset={reset} />
    )
}