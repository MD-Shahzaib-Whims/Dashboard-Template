"use client";
import { useState } from 'react'
import { Bell, Search, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { useAppContext } from '@/context'

export default function Navbar() {
    const [showSearch, setShowSearch] = useState(false)
    const { theme, toggleTheme } = useAppContext()

    return (
        <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
            <div className="flex items-center">
                <SidebarTrigger />
                <h1 className="text-xl font-bold ml-4">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
                {showSearch ? (
                    <Input
                        type="search"
                        placeholder="Search..."
                        className="w-64"
                        onBlur={() => setShowSearch(false)}
                    />
                ) : (
                    <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)}>
                        <Search className="h-5 w-5" />
                    </Button>
                )}
                <Button variant="ghost" size="icon" onClick={toggleTheme}>
                    {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                </Button>
                <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                </Button>
            </div>
        </nav>
    )
}