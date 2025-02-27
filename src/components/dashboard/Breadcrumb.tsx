"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

export default function Breadcrumb() {
    const pathname = usePathname()
    const paths = pathname.split('/').filter(Boolean)

    return (
        <nav aria-label="Breadcrumb" className="py-2 px-4">
            <ol className="flex items-center space-x-2 text-sm">
                <li>
                    <Link href="/" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                        Home
                    </Link>
                </li>
                {paths.map((path, index) => {
                    const href = `/${paths.slice(0, index + 1).join('/')}`
                    const isLast = index === paths.length - 1
                    return (
                        <React.Fragment key={path}>
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                            <li>
                                {isLast ? (
                                    <span className="font-medium text-gray-700 dark:text-gray-200">{path}</span>
                                ) : (
                                    <Link href={href} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                                        {path}
                                    </Link>
                                )}
                            </li>
                        </React.Fragment>
                    )
                })}
            </ol>
        </nav>
    )
}