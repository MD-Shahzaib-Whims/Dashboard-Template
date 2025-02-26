'use client'

import { useEffect } from 'react'

export default function Error({
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
        <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => reset()}
            >
                Try again
            </button>
        </div>
    )
}