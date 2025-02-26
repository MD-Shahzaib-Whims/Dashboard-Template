// 'use client'

// import { useState } from 'react'

// export default function ChatInterface({ initialMessages }) {
//     const [messages, setMessages] = useState(initialMessages)
//     const [newMessage, setNewMessage] = useState('')

//     const sendMessage = async (e) => {
//         e.preventDefault()
//         if (!newMessage.trim()) return

//         const message = { id: Date.now(), text: newMessage, sender: 'user' }
//         setMessages([...messages, message])
//         setNewMessage('')

//         // Send message to API
//         await fetch('https://api.example.com/messages', {
//             method: 'POST',
//             body: JSON.stringify(message),
//         })
//     }

//     return (
//         <div>
//             <div className="h-64 overflow-y-auto mb-4 p-4 border rounded">
//                 {messages.map((msg) => (
//                     <div key={msg.id} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : ''}`}>
//                         {msg.text}
//                     </div>
//                 ))}
//             </div>
//             <form onSubmit={sendMessage} className="flex">
//                 <input
//                     type="text"
//                     value={newMessage}
//                     onChange={(e) => setNewMessage(e.target.value)}
//                     className="flex-grow border rounded-l px-4 py-2"
//                     placeholder="Type a message..."
//                 />
//                 <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
//                     Send
//                 </button>
//             </form>
//         </div>
//     )
// }







'use client'

import { useState } from 'react'

type Message = {
    id: number
    text: string
    sender: 'user' | 'other'
}

export default function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([])
    const [inputMessage, setInputMessage] = useState('')

    const sendMessage = (e: React.FormEvent) => {
        e.preventDefault()
        if (inputMessage.trim()) {
            setMessages([...messages, { id: Date.now(), text: inputMessage, sender: 'user' }])
            setInputMessage('')
        }
    }

    return (
        <div className="flex flex-col h-[calc(100vh-200px)]">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-100'
                            }`}
                    >
                        {message.text}
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
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-lg">
                        Send
                    </button>
                </div>
            </form>
        </div>
    )
}