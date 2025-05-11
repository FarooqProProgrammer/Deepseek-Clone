import React, { useState } from 'react'
import { SidebarTrigger } from '../ui/sidebar'
import { EditText } from 'react-edit-text'

const Header = () => {
    const [value, setValue] = useState('Dashboard')

    return (
        <section className="flex justify-start gap-3 items-center p-4 bg-[var(--sidebar)] border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <SidebarTrigger />
            <EditText
                value={value}
                onChange={(e) => setValue(e.value)}
                className="text-primary sm:text-sm"
            />
        </section>
    )
}

export default Header