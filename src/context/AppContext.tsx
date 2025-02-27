'use client'

import { ThemeContext } from '@/interfaces/AppContexts'
import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext<ThemeContext | undefined>(undefined)

export function AppProvider({ children }: Readonly<{ children: React.ReactNode }>) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    const value = React.useMemo(() => ({ theme, toggleTheme }), [theme])

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    const context = useContext(AppContext)
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider')
    }
    return context
}