"use client"

import React from 'react'
import Appsidebar from '../Appsidebar'
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar'

const DashboardLayout = ({ children, className = '' }) => {
    return (
        <SidebarProvider>
            <Appsidebar />
            <main className="w-full relative min-h-screen">
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    )
}

export default DashboardLayout
