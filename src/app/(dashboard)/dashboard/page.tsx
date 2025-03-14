import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dashboard | My App',
    description: 'View and manage your account information',
}

export default function Dashboard() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p>Dashboard feature coming soon...</p>
        </div>
    )
}