"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS } from '@/constant/navItems'

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-64 bg-gray-800 text-white">
            <div className="p-4">
                <h1 className="text-2xl font-bold">Dashboard</h1>
            </div>
            <nav className="mt-8">
                {NAV_ITEMS.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center px-4 py-2 mt-2 text-gray-100 ${pathname === item.href ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                    >
                        <span className="mr-2">{item.icon}</span>
                        {item.name}
                    </Link>
                ))}
            </nav>
        </aside>
    )
}