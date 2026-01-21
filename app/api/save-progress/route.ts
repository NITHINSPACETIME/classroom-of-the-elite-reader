import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'


export async function POST(request: Request) {
    try {
        const body = await request.text()
        const data = JSON.parse(body)


        if (!data.user_id || !data.volume_id || !data.chapter_index) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        const supabase = createClient(supabaseUrl, supabaseKey)

        // reading progress
        const { error } = await supabase
            .from('reading_progress')
            .upsert({
                user_id: data.user_id,
                volume_id: data.volume_id,
                chapter_index: data.chapter_index,
                scroll_percentage: data.scroll_percentage || 0,
                last_read: new Date().toISOString(),
                percentage: Math.round((data.chapter_index / 50) * 100)
            }, {
                onConflict: 'user_id,volume_id'
            })

        if (error) {
            console.error('Database error:', error)
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('API error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
