import { NextResponse } from 'next/server'

let messages = []

export async function GET() {
    return NextResponse.json(messages)
}

export async function POST(req: Request) {
    const message = await req.json()
    messages.push(message)
    return NextResponse.json({ status: 'success' })
}