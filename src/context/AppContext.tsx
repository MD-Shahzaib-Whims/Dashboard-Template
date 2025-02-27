'use client'

import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext(undefined)

export function AppProvider({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const [user, setUser] = useState(null)

    return (
        <AppContext.Provider value={{ user, setUser }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}