export interface Message {
    id: string | number
    text: string
    sender: 'user' | 'other'
}