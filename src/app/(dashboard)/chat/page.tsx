import dynamic from 'next/dynamic'
import { Message } from '@/interfaces/chat'

const ChatInterface = dynamic(() => import('./ChatInterface'), {
    loading: () => <p>Loading chat...</p>
})

export default async function Chat() {
    // Fetch initial messages from an API
    const messages: Message[] = []

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Chat</h1>
            <ChatInterface initialMessages={messages} />
        </div>
    )
}