"use client"

import React from 'react'
import Appsidebar from '../Appsidebar'
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar'
import Header from '../Header'

const DashboardLayout = ({ children, className = '' }) => {
    return (
        <SidebarProvider>
            <Appsidebar />
            <main className="w-full flex flex-col relative min-h-screen">
                <Header />
                {children}
            </main>
        </SidebarProvider>
    )
}

export default DashboardLayout
