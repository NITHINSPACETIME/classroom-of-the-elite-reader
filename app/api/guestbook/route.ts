import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

function getSupabase() {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
}

export async function GET() {
    try {
        const supabase = getSupabase()
        const { data, error } = await supabase
            .from('guestbook')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(100)

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json(data)
    } catch {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, message } = body

        if (!message || message.trim().length === 0) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 })
        }

        if (message.trim().length > 500) {
            return NextResponse.json({ error: 'Message too long (max 500 chars)' }, { status: 400 })
        }

        const displayName = (name && name.trim().length > 0) ? name.trim().slice(0, 30) : 'Anonymous'

        const supabase = getSupabase()
        const { data, error } = await supabase
            .from('guestbook')
            .insert({
                name: displayName,
                message: message.trim(),
                created_at: new Date().toISOString()
            })
            .select()
            .single()

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json(data)
    } catch {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
