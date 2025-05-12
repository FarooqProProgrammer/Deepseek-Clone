"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useEffect } from "react";
import { Button } from "../ui/button";


const ChatBody = ({
    className,
    messages = [],
    isLoading = false
}) => {
    const scrollRef = useRef(null);

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    // Example message if no messages provided
    const exampleMessages = messages.length ? messages : [
        {
            id: '1',
            content: 'Welcome to the chat! How can I help you today?',
            sender: 'assistant',
            timestamp: new Date()
        }
    ];

    return (
        <div className={cn("relative w-full h-full flex flex-col", className)}>
            <div
                ref={scrollRef}
                className="w-full h-full max-w-3xl mx-auto px-4 pb-20 pt-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
            >
                {exampleMessages.map((message) => (
                    <div
                        key={message.id}
                        className={cn(
                            "mb-4 flex w-full",
                            message.sender === "user" ? "justify-end" : "justify-start"
                        )}
                    >
                        <div
                            className={cn(
                                "max-w-[85%] rounded-lg p-4",
                                message.sender === "user"
                                    ? "bg-blue-600 text-white rounded-br-none"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-none"
                            )}
                        >
                            <p className="whitespace-pre-wrap break-words">{message.content}</p>
                            <span className="mt-1 text-xs opacity-70 block text-right">
                                {new Intl.DateTimeFormat('en-US', {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                }).format(message.timestamp)}
                            </span>
                        </div>
                    </div>
                ))}

                {isLoading && (
                    <div className="flex justify-start mb-4">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 rounded-bl-none flex items-center space-x-2">
                            <div className="flex space-x-1">
                                <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatBody;