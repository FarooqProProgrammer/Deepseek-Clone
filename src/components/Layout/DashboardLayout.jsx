"use client"

import React from 'react'
import Appsidebar from '../Appsidebar'
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar'

const DashboardLayout = ({ children }) => {
    return (
        <SidebarProvider>
            <Appsidebar />
            <main>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    )
}

export default DashboardLayout
