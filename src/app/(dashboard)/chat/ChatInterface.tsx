'use client'
import { Message } from '@/interfaces/chat'
import { useState } from 'react'

export default function ChatInterface({ initialMessages }: { initialMessages: Message[] }) {

    const [messages, setMessages] = useState<Message[]>(initialMessages)
    const [inputMessage, setInputMessage] = useState('')

    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!inputMessage.trim()) return

        const message: Message = {
            id: Date.now(),
            text: inputMessage,
            sender: 'user'
        }

        setMessages([...messages, message])
        setInputMessage('')

        // Send message to API
        // await fetch('https://api.example.com/messages', {
        //     method: 'POST',
        //     body: JSON.stringify(message),
        // })
    }

    return (
        <div className="flex flex-col h-[calc(100vh-200px)]">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`p-2 rounded-lg ${msg.sender === 'user' ? 'mr-auto' : 'bg-gray-100'}`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>
            <form onSubmit={sendMessage} className="p-4 border-t">
                <div className="flex">
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        className="flex-1 border rounded-l-lg p-2"
                        placeholder="Type a message..."
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded-r-lg"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    )
}