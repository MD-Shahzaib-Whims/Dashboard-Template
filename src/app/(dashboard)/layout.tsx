import Sidebar from '@/components/dashboard/Sidebar'
import Header from '@/components/dashboard/Header'
import Footer from '@/components/dashboard/Footer'

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <Header />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    )
}