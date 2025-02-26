import Link from 'next/link'
import { NAV_ITEMS } from '@/constant/navItems'

export default function DashboardHome() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NAV_ITEMS.map((feature) => (
                <Link
                    key={feature.name}
                    href={feature.href}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                    <div className="flex items-center">
                        <span className="text-3xl mr-4">{feature.icon}</span>
                        <h2 className="text-xl font-semibold">{feature.name}</h2>
                    </div>
                </Link>
            ))}
        </div>
    )
}