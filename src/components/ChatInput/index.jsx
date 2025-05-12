"use client"

import React, { useState } from 'react'
import { Badge } from '../ui/badge'
import { Atom, Globe2, Send } from 'lucide-react'
import { Button } from '../ui/button'

const ChatInput = () => {
    const [activeBadge, setActiveBadge] = useState(null)

    const handleBadgeClick = (badgeType) => {
        setActiveBadge(activeBadge === badgeType ? null : badgeType)
    }

    return (
        <div className="w-full p-3 pb-4 bg-[var(--sidebar)]">
            <input
                placeholder="Message Deepseek"
                className={'border-0 placeholder:text-gray-400 focus:outline-none w-full'}
            />
            <div className="flex mt-3 space-x-2 justify-between items-center">
                <div className='space-x-2'>
                    <Badge
                        variant={activeBadge === 'deepthink' ? 'default' : 'outline'}
                        onClick={() => handleBadgeClick('deepthink')}
                        className="cursor-pointer p-2"
                    >
                        <Atom className="mr-1 h-4 w-4" />
                        Deepthink R1
                    </Badge>
                    <Badge
                        variant={activeBadge === 'search' ? 'default' : 'outline'}
                        onClick={() => handleBadgeClick('search')}
                        className="cursor-pointer p-2"
                    >
                        <Globe2 className="mr-1 h-4 w-4" />
                        Search
                    </Badge>
                </div>
                <Button><Send /></Button>
            </div>
        </div>
    )
}

export default ChatInput